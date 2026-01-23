'use server'

import { client } from './client'
import { bridgeCoordinatorL1Abi } from '@/public/abi/BridgeCoordinatorL1.abi'
import { CONTRACTS } from '@/config/constants'

export async function fetchTotalPredeposits(chainNickname: `0x${string}`) {
    return client.readContract({
      address: CONTRACTS.bridgeCoordinator.address,
      abi: bridgeCoordinatorL1Abi,
      functionName: 'getTotalPredeposits',
      args: [chainNickname],
    }).then(res => Number(res) / 10 ** CONTRACTS.assets.unit.decimals)
}