'use server'

import { mainnet } from 'viem/chains'
import { Chain } from 'viem'

import { getClient } from './client'
import { erc20Abi } from '@/public/abi/ERC20.abi'
import { AssetContract } from '@/app/types/assets'
import { ValueContract, Address } from '@/app/types/common'

export async function fetchTotalSupply(asset: ValueContract, chain: Chain = mainnet) {
  return getClient(chain).readContract({
    address: asset.address,
    abi: erc20Abi,
    functionName: 'totalSupply',
  }).then(res => Number(res) / 10 ** asset.decimals)
}

export async function fetchBalanceOf(asset: AssetContract, owner: Address) {
  return getClient().readContract({
    address: asset.address,
    abi: erc20Abi,
    functionName: 'balanceOf',
    args: [owner],
  }).then(res => Number(res) / 10 ** asset.decimals)
}
