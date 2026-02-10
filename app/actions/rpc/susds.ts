'use server'

import { getClient } from './client'
import { sUSDSAbi } from '@/public/abi/sUSDS.abi'
import { CONTRACTS } from '@/config/constants'

export async function fetchSSR() {
  return getClient().readContract({
    address: CONTRACTS.ethereum.vaults.usds.strategy.address,
    abi: sUSDSAbi,
    functionName: 'ssr',
  }).then(res => (Number(res) / 1e27) ** 31536000 - 1)
}
