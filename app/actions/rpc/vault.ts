'use server'

import { client } from './client'
import { genericVaultAbi } from '@/public/abi/GenericVault.abi'
import { VaultContract } from '@/app/types/vaults'

export async function fetchTotalAssets(vault: VaultContract) {
  return client.readContract({
    address: vault.address,
    abi: genericVaultAbi,
    functionName: 'totalAssets',
  }).then(res => Number(res) / 10 ** vault.decimals)
}

export async function fetchAutoDepositThreshold(vault: VaultContract) {
    return client.readContract({
      address: vault.address,
      abi: genericVaultAbi,
      functionName: 'autoAllocationThreshold',
    }).then(res => Number(res) / 10 ** vault.decimals)
}

export async function fetchAdditionalAvailableAssets(vault: VaultContract, strategy: VaultContract) {
    return client.readContract({
      address: strategy.address,
      abi: genericVaultAbi,
      functionName: 'maxWithdraw',
      args: [vault.address],
    }).then(res => Number(res) / 10 ** strategy.decimals)
}
