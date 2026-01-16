'use server'

import { client } from './client'
import { genericVaultAbi } from '../../../public/abi/GenericVault.abi'

interface Vault {
  address: `0x${string}`;
  decimals: number;
}

export async function fetchTotalAssets(vault: Vault) {
  return client.readContract({
    address: vault.address,
    abi: genericVaultAbi,
    functionName: 'totalAssets',
  }).then(res => Number(res) / 10 ** vault.decimals)
}

export async function fetchAutoDepositThreshold(vault: Vault) {
    return client.readContract({
      address: vault.address,
      abi: genericVaultAbi,
      functionName: 'autoAllocationThreshold',
    }).then(res => Number(res) / 10 ** vault.decimals)
}
