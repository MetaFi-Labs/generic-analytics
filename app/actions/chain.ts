'use server'

import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

import { genericUnitAbi } from '../../public/abi/GenericUnit.abi'
import { genericVaultAbi } from '../../public/abi/GenericVault.abi'
import { chainlinkFeedAbi } from '../../public/abi/ChainlinkFeed.abi'

import { CONTRACTS } from '../../config/constants'

const client = createPublicClient({
  batch: {
      multicall: true,
  },
  chain: mainnet,
  transport: http(),
})

export async function fetchUnitTotalSupply() {
  return client.readContract({
    address: CONTRACTS.unit.address,
    abi: genericUnitAbi,
    functionName: 'totalSupply',
  }).then(res => Number(res) / 10 ** CONTRACTS.unit.decimals)
}

export async function fetchUSDCVaultTotalAssets() {
  return client.readContract({
    address: CONTRACTS.vaults.usdc.address,
    abi: genericVaultAbi,
    functionName: 'totalAssets',
  }).then(res => Number(res) / 10 ** CONTRACTS.vaults.usdc.decimals)
}

export async function fetchUSDTVaultTotalAssets() {
  return client.readContract({
    address: CONTRACTS.vaults.usdt.address,
    abi: genericVaultAbi,
    functionName: 'totalAssets',
  }).then(res => Number(res) / 10 ** CONTRACTS.vaults.usdt.decimals)
}

export async function fetchUSDSVaultTotalAssets() {
  return client.readContract({
    address: CONTRACTS.vaults.usds.address,
    abi: genericVaultAbi,
    functionName: 'totalAssets',
  }).then(res => Number(res) / 10 ** CONTRACTS.vaults.usds.decimals)
}

export async function fetchUSDCPrice() {
  return client.readContract({
    address: CONTRACTS.priceFeeds.usdc.address,
    abi: chainlinkFeedAbi,
    functionName: 'latestRoundData',
  }).then(res => Number(res[1]) / 10 ** CONTRACTS.priceFeeds.usdc.decimals)
}

export async function fetchUSDTPrice() {
  return client.readContract({
    address: CONTRACTS.priceFeeds.usdt.address,
    abi: chainlinkFeedAbi,
    functionName: 'latestRoundData',
  }).then(res => Number(res[1]) / 10 ** CONTRACTS.priceFeeds.usdt.decimals)
}

export async function fetchUSDSPrice() {
  return client.readContract({
    address: CONTRACTS.priceFeeds.usds.address,
    abi: chainlinkFeedAbi,
    functionName: 'latestRoundData',
  }).then(res => Number(res[1]) / 10 ** CONTRACTS.priceFeeds.usds.decimals)
}
