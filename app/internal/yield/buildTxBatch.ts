import { encodeFunctionData, Address, parseUnits } from 'viem'
import { controllerAbi } from '@/public/abi/Controller.abi'
import { genericUSDAbi } from '@/public/abi/GenericUSD.abi'
import { bridgeCoordinatorL1Abi } from '@/public/abi/BridgeCoordinatorL1.abi'
import { BridgeAdapter, CONTRACTS, YIELD_DESTINATIONS, type YieldDestinationKey } from '@/config/constants'
import { fetchEstimateBridgeFee } from '@/app/actions/rpc/bridgeAdapter'
import { fetchEncodeBridgeMessage } from '@/app/actions/rpc/bridgeCoordinator'

export interface TxBuilderTransaction {
  to: Address
  value: number
  data: string
}

interface DestinationBreakdown {
  destination: {
    id: string
    name: string
    address: string
  }
  yieldAmount: number
  supply: number
  proportion: number
}

interface ChainYield {
  key: YieldDestinationKey
  supply: number
  yieldAmount: number
  destinations: DestinationBreakdown[]
}

/**
 * Estimates the bridge fee for a given chain and amount
 */
async function estimateBridgeFee(
  bridge: BridgeAdapter,
  chainId: number,
  amount: bigint,
  sender: `0x${string}`,
  remoteRecipient: `0x${string}`,
  sourceWhitelabel: `0x${string}`,
  destinationWhitelabel: `0x${string}`
): Promise<bigint> {
  const bridgeAdapterAddress = bridge.address.ethereum as `0x${string}`

  const message = await fetchEncodeBridgeMessage({
    sender: sender,
    recipient: remoteRecipient,
    sourceWhitelabel: sourceWhitelabel,
    destinationWhitelabel: destinationWhitelabel,
    amount
  })

  // Estimate the fee
  const fee = await fetchEstimateBridgeFee(bridgeAdapterAddress, {
    chainId: BigInt(chainId),
    message,
    bridgeParams: '0x' as `0x${string}`
  })

  return fee
}

export async function buildYieldDistributionTxBatch(
  yieldResults: ChainYield[],
  totalYield: number,
  distributingYield: number
): Promise<TxBuilderTransaction[]> {
  const transactions: TxBuilderTransaction[] = []

  // Convert to wei (18 decimals)
  const toWei = (value: number): bigint => {
    return parseUnits(value.toFixed(18), 18)
  }

  // 1. Set safety buffer: (distributable - distributing)
  transactions.push({
    to: CONTRACTS.ethereum.controller.address,
    value: 0,
    data: encodeFunctionData({
      abi: controllerAbi,
      functionName: 'setSafetyBufferYieldDeduction',
      args: [toWei(totalYield - distributingYield)]
    })
  })

  // 2. Distribute yield on controller
  transactions.push({
    to: CONTRACTS.ethereum.controller.address,
    value: 0,
    data: encodeFunctionData({
      abi: controllerAbi,
      functionName: 'distributeYield',
      args: []
    })
  })

  // 3. Aprove unit tokens GUSD
  transactions.push({
    to: CONTRACTS.ethereum.assets.unit.address,
    value: 0,
    data: encodeFunctionData({
      abi: genericUSDAbi,
      functionName: 'approve',
      args: [CONTRACTS.ethereum.assets.gusd.address, toWei(distributingYield)]
    })
  })

  // 4. Wrap unit tokens into GUSD
  transactions.push({
    to: CONTRACTS.ethereum.assets.gusd.address,
    value: 0,
    data: encodeFunctionData({
      abi: genericUSDAbi,
      functionName: 'wrap',
      args: [CONTRACTS.ethereum.dao.address, toWei(distributingYield)]
    })
  })

  // 5. Build list of Ethereum destinations (direct transfers)
  const ethereumDestinations: { address: Address; amount: bigint }[] = []

  // Collect all Ethereum destinations (chainId === 1)
  for (const chain of yieldResults) {
    const yieldDest = YIELD_DESTINATIONS[chain.key]

    if (yieldDest.chainId === 1) {
      // This is on Ethereum
      for (const dest of chain.destinations) {
        if (dest.yieldAmount > 0 && dest.destination.address !== '0x0000000000000000000000000000000000000000') {
          ethereumDestinations.push({
            address: dest.destination.address as Address,
            amount: toWei(dest.yieldAmount)
          })
        }
      }
    }
  }

  // Add transfer transactions for Ethereum destinations
  for (const dest of ethereumDestinations) {
    transactions.push({
      to: CONTRACTS.ethereum.assets.gusd.address,
      value: 0,
      data: encodeFunctionData({
        abi: genericUSDAbi,
        functionName: 'transfer',
        args: [dest.address, dest.amount]
      })
    })
  }

  // 6. Build list of bridge transactions (grouped by chain)
  // Note: Multiple destinations on the same chain are merged into a single bridge transaction
  // If a chain has a periphery distributor configured, bridge to that distributor address
  // Otherwise, bridge to the first destination on that chain

  // Map chainId -> total amount to bridge
  const bridgeAmountsByChain = new Map<number, bigint>()

  // Map chainId -> remoteRecipient (distributor or first destination on that chain)
  const bridgeRecipientsByChain = new Map<number, string>()

  // Map chainId -> bridge (from distributor config)
  const bridgeByChain = new Map<number, BridgeAdapter>()

  // Map chainId -> destinationWhitelabel (from distributor config)
  const destinationWhitelabelsByChain = new Map<number, string>()

  for (const chain of yieldResults) {
    const yieldDest = YIELD_DESTINATIONS[chain.key]

    if (yieldDest.chainId !== 1) {
      // This needs to be bridged

      // Set distributor
      if (!yieldDest.distributor) {
        throw new Error(`Chain ${yieldDest.name} (${yieldDest.chainId}): No distributor configured for non-Ethereum chain`)
      }
      if (!yieldDest.distributor.address || yieldDest.distributor.bridge === undefined) {
        throw new Error(`Chain ${yieldDest.name} (${yieldDest.chainId}): Distributor is configured but missing address or bridgeType`)
      }
      if (!yieldDest.distributor.whitelabel?.address) {
        throw new Error(`Chain ${yieldDest.name} (${yieldDest.chainId}): Distributor is configured but missing whitelabel address`)
      }
      bridgeRecipientsByChain.set(yieldDest.chainId, yieldDest.distributor.address)
      bridgeByChain.set(yieldDest.chainId, yieldDest.distributor.bridge)
      destinationWhitelabelsByChain.set(yieldDest.chainId, yieldDest.distributor.whitelabel.address)

      // Calculate total amount for this chain
      let totalChainAmount = BigInt(0)
      for (const dest of chain.destinations) {
        if (dest.yieldAmount > 0 && dest.destination.address !== '0x0000000000000000000000000000000000000000') {
          totalChainAmount += toWei(dest.yieldAmount)
        }
      }

      if (totalChainAmount > BigInt(0)) {
        // Aggregate amounts for the same chain
        const existingAmount = bridgeAmountsByChain.get(yieldDest.chainId) || BigInt(0)
        bridgeAmountsByChain.set(yieldDest.chainId, existingAmount + totalChainAmount)
      }
    }
  }

  // Add bridge transactions with estimated fees
  for (const [chainId, amount] of bridgeAmountsByChain.entries()) {
    const remoteRecipient = bridgeRecipientsByChain.get(chainId)
    const bridge = bridgeByChain.get(chainId)
    const destinationWhitelabel = destinationWhitelabelsByChain.get(chainId)

    if (!remoteRecipient) {
      throw new Error(`No recipient found for chain ${chainId}`)
    }

    if (bridge === undefined) {
      throw new Error(`No bridge found for chain ${chainId}`)
    }

    if (!destinationWhitelabel) {
      throw new Error(`No destination whitelabel found for chain ${chainId}`)
    }

    // Convert address to bytes32 (pad left with zeros)
    const senderBytes32 = `0x${CONTRACTS.ethereum.dao.address.slice(2).padStart(64, '0')}` as `0x${string}`
    const remoteRecipientBytes32 = `0x${remoteRecipient.slice(2).padStart(64, '0')}` as `0x${string}`
    const sourceWhitelabelBytes32 = `0x${CONTRACTS.ethereum.assets.gusd.address.slice(2).padStart(64, '0')}` as `0x${string}`
    const destinationWhitelabelBytes32 = `0x${destinationWhitelabel.slice(2).padStart(64, '0')}` as `0x${string}`

    // Estimate bridge fee
    const bridgeFee = await estimateBridgeFee(
      bridge,
      chainId,
      amount,
      senderBytes32,
      remoteRecipientBytes32,
      sourceWhitelabelBytes32,
      destinationWhitelabelBytes32
    )

    // Note: When a distributor is configured, the bridge sends funds to the distributor contract
    // on the remote chain, which then handles distribution to final destinations.
    const bridgeData = encodeFunctionData({
      abi: bridgeCoordinatorL1Abi,
      functionName: 'bridge',
      args: [
        bridge.id, // use configured bridgeType from distributor
        BigInt(chainId),
        CONTRACTS.ethereum.dao.address, // onBehalf
        remoteRecipientBytes32, // yield distributor
        CONTRACTS.ethereum.assets.gusd.address, // sourceWhitelabel
        destinationWhitelabelBytes32, // destinationWhitelabel from yield destination config
        amount,
        '0x' as `0x${string}` // empty bridgeParams
      ]
    })

    transactions.push({
      to: CONTRACTS.ethereum.bridgeCoordinator.address,
      value: Number(bridgeFee), // Add estimated bridge fee in wei
      data: bridgeData
    })
  }

  return transactions
}

export async function downloadTxBatch(
  yieldResults: ChainYield[],
  totalYield: number,
  distributingYield: number
): Promise<void> {
  const jsonData = await buildYieldDistributionTxBatch(yieldResults, totalYield, distributingYield)

  const blob = new Blob([JSON.stringify(jsonData, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `yield-distribution-txs-${Date.now()}.json`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
