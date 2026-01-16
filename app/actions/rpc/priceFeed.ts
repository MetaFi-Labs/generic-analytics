'use server'

import { client } from './client'
import { chainlinkFeedAbi } from '../../../public/abi/ChainlinkFeed.abi'

interface PriceFeed {
  address: `0x${string}`;
  decimals: number;
}

export async function fetchPrice(priceFeed: PriceFeed) {
  return client.readContract({
    address: priceFeed.address,
    abi: chainlinkFeedAbi,
    functionName: 'latestRoundData',
  }).then(res => Number(res[1]) / 10 ** priceFeed.decimals)
}
