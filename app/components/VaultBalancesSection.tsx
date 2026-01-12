'use client'

import { useState } from 'react'
import VaultBalanceItem from './VaultBalanceItem'

interface VaultBalancesSectionProps {
  initialData: {
    usdcTotalAssets: number;
    usdtTotalAssets: number;
    usdsTotalAssets: number;
    usdcVaultBalance: number;
    usdtVaultBalance: number;
    usdsVaultBalance: number;
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
  const [lastUpdated] = useState(new Date());

  return (
    <div className="w-full mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Vault Balances</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <VaultBalanceItem
          symbol="USDC"
          name="USD Coin"
          color={colors.usdc}
          icon="$"
          totalAssets={initialData.usdcTotalAssets}
          vaultBalance={initialData.usdcVaultBalance}
          price={initialData.usdcPrice}
          vaultSettings={vaultSettings.usdc}
        />
        <VaultBalanceItem
          symbol="USDT"
          name="Tether"
          color={colors.usdt}
          icon="₮"
          totalAssets={initialData.usdtTotalAssets}
          vaultBalance={initialData.usdtVaultBalance}
          price={initialData.usdtPrice}
          vaultSettings={vaultSettings.usdt}
        />
        <VaultBalanceItem
          symbol="USDS"
          name="Sky Dollar"
          color={colors.usds}
          icon="◎"
          totalAssets={initialData.usdsTotalAssets}
          vaultBalance={initialData.usdsVaultBalance}
          price={initialData.usdsPrice}
          vaultSettings={vaultSettings.usds}
        />
      </div>
    </div>
  );
}
