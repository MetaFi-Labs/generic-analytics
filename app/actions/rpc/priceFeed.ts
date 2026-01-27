'use server'

import { getClient } from './client'
import { chainlinkFeedAbi } from '@/public/abi/ChainlinkFeed.abi'
import { PriceFeedContract } from '@/app/types/priceFeeds'

export async function fetchPrice(priceFeed: PriceFeedContract) {
  return getClient().readContract({
    address: priceFeed.address,
    abi: chainlinkFeedAbi,
    functionName: 'latestRoundData',
  }).then(res => Number(res[1]) / 10 ** priceFeed.decimals)
}
