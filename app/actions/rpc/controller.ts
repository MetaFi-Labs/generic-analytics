'use server'

import { getClient } from './client'
import { controllerAbi } from '@/public/abi/Controller.abi'
import { CONTRACTS } from '@/config/constants'
import { VaultContract } from '@/app/types/vaults'

export async function fetchVaultSettings(vault: VaultContract) {
  return getClient().readContract({
    address: CONTRACTS.ethereum.controller.address,
    abi: controllerAbi,
    functionName: 'vaultSettings',
    args: [vault.address],
  }).then(res => ({
    maxCapacity: Number(res[0]) / 10 ** CONTRACTS.ethereum.assets.unit.decimals,
    minProportionality: res[1] / 100,
    maxProportionality: res[2] / 100,
  }))
}

export async function fetchShareRedemptionPrice() {
  return getClient().readContract({
    address: CONTRACTS.ethereum.controller.address,
    abi: controllerAbi,
    functionName: 'shareRedemptionPrice',
  }).then(res => Number(res) / 10 ** CONTRACTS.ethereum.assets.unit.decimals)
}
