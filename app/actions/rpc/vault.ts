'use server'

import { getClient } from './client'
import { genericVaultAbi } from '@/public/abi/GenericVault.abi'
import { VaultContract } from '@/app/types/vaults'

export async function fetchTotalAssets(vault: VaultContract) {
  return getClient().readContract({
    address: vault.address,
    abi: genericVaultAbi,
    functionName: 'totalAssets',
  }).then(res => Number(res) / 10 ** vault.decimals)
}

export async function fetchAutoDepositThreshold(vault: VaultContract) {
  return getClient().readContract({
    address: vault.address,
    abi: genericVaultAbi,
    functionName: 'autoAllocationThreshold',
  }).then(res => Number(res) / 10 ** vault.decimals)
}

export async function fetchAdditionalAvailableAssets(vault: VaultContract) {
  return getClient().readContract({
    address: vault.strategy.address,
    abi: genericVaultAbi,
    functionName: 'maxWithdraw',
    args: [vault.address],
  }).then(res => Number(res) / 10 ** vault.strategy.decimals)
}
