'use server'

import { client } from './client'
import { erc20Abi } from '../../../public/abi/ERC20.abi'

interface Asset {
  address: `0x${string}`;
  decimals: number;
}

export async function fetchTotalSupply(asset: Asset) {
  return client.readContract({
    address: asset.address,
    abi: erc20Abi,
    functionName: 'totalSupply',
  }).then(res => Number(res) / 10 ** asset.decimals)
}

export async function fetchBalanceOf(asset: Asset, owner: `0x${string}`) {
  return client.readContract({
    address: asset.address,
    abi: erc20Abi,
    functionName: 'balanceOf',
    args: [owner],
  }).then(res => Number(res) / 10 ** asset.decimals)
}
