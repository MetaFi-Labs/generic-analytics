'use client'

import { useState } from 'react'
import VaultBalanceItem from './VaultBalanceItem'
import RefreshButton from './RefreshButton'
import {
  fetchUSDCVaultTotalAssets,
  fetchUSDTVaultTotalAssets,
  fetchUSDSVaultTotalAssets,
  fetchUSDCPrice,
  fetchUSDTPrice,
  fetchUSDSPrice
} from '../actions/chain'

interface VaultBalancesSectionProps {
  initialData: {
    usdcTotalAssets: number;
    usdtTotalAssets: number;
    usdsTotalAssets: number;
    usdcPrice: number;
    usdtPrice: number;
    usdsPrice: number;
  };
  colors: {
    usdc: string;
    usdt: string;
    usds: string;
  };
  vaultSettings: {
    usdc: {
      maxCapacity: number;
      maxProportionality: number;
      minProportionality: number;
      automaticDepositThreshold: number;
    };
    usdt: {
      maxCapacity: number;
      maxProportionality: number;
      minProportionality: number;
      automaticDepositThreshold: number;
    };
    usds: {
      maxCapacity: number;
      maxProportionality: number;
      minProportionality: number;
      automaticDepositThreshold: number;
    };
  };
}

export default function VaultBalancesSection({ initialData, colors, vaultSettings }: VaultBalancesSectionProps) {
  const [loading, setLoading] = useState(false);
  const [vaultData, setVaultData] = useState(initialData);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const handleRefresh = async () => {
    setLoading(true);
    try {
      const [usdcTotalAssets, usdtTotalAssets, usdsTotalAssets, usdcPrice, usdtPrice, usdsPrice] = await Promise.all([
        fetchUSDCVaultTotalAssets(),
        fetchUSDTVaultTotalAssets(),
        fetchUSDSVaultTotalAssets(),
        fetchUSDCPrice(),
        fetchUSDTPrice(),
        fetchUSDSPrice(),
      ]);

      setVaultData({
        usdcTotalAssets,
        usdtTotalAssets,
        usdsTotalAssets,
        usdcPrice,
        usdtPrice,
        usdsPrice,
      });
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Error refreshing vault balances:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Vault Balances</h2>
        <div className="flex items-center gap-4">
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </div>
          <RefreshButton onClick={handleRefresh} loading={loading} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <VaultBalanceItem
          symbol="USDC"
          name="USD Coin"
          color={colors.usdc}
          icon="$"
          totalAssets={vaultData.usdcTotalAssets}
          price={vaultData.usdcPrice}
          vaultSettings={vaultSettings.usdc}
        />
        <VaultBalanceItem
          symbol="USDT"
          name="Tether"
          color={colors.usdt}
          icon="₮"
          totalAssets={vaultData.usdtTotalAssets}
          price={vaultData.usdtPrice}
          vaultSettings={vaultSettings.usdt}
        />
        <VaultBalanceItem
          symbol="USDS"
          name="Sky Dollar"
          color={colors.usds}
          icon="◎"
          totalAssets={vaultData.usdsTotalAssets}
          price={vaultData.usdsPrice}
          vaultSettings={vaultSettings.usds}
        />
      </div>
    </div>
  );
}
