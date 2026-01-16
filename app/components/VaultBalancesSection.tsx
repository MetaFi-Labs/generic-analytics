'use client'

import VaultBalanceItem from './VaultBalanceItem'
import { VaultsMap, VaultConfig } from '../types/vaults'
import { vaultConfigsToArray } from '../utils/vaults'

interface VaultBalancesSectionProps {
  vaults: VaultsMap<VaultConfig>;
  showBasicInfoOnly?: boolean;
}

export default function VaultBalancesSection({ vaults, showBasicInfoOnly }: VaultBalancesSectionProps) {
  const vaultArray = vaultConfigsToArray(vaults);

  return (
    <div className="w-full mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Vault Balances</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {vaultArray.map(({ key, metadata, data, settings, strategyAddress, vaultAddress }) => (
          <VaultBalanceItem
            key={key}
            symbol={metadata.symbol}
            name={metadata.name}
            color={metadata.color}
            icon={metadata.icon}
            totalAssets={data.totalAssets}
            vaultBalance={data.vaultBalance}
            price={data.price}
            availableLiquidity={data.availableLiquidity}
            vaultSettings={settings}
            strategyAddress={strategyAddress}
            vaultAddress={vaultAddress}
            showBasicInfoOnly={showBasicInfoOnly}
          />
        ))}
      </div>
    </div>
  )
}
