interface VaultSettingsProps {
  maxCapacity: number;
  maxProportionality: number;
  minProportionality: number;
  automaticDepositThreshold: number;
  symbol: string;
}

export default function VaultSettings({
  maxCapacity,
  maxProportionality,
  minProportionality,
  automaticDepositThreshold,
  symbol
}: VaultSettingsProps) {
  return (
    <div className="pt-3 mt-3 border-t border-zinc-200 dark:border-zinc-800">
      <h4 className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Vault Settings</h4>
      <div className="space-y-1.5">
        <div className="flex justify-between items-center">
          <span className="text-xs text-zinc-500 dark:text-zinc-400">Max Capacity</span>
          <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
            {maxCapacity.toLocaleString('en-US', { maximumFractionDigits: 0 })}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-zinc-500 dark:text-zinc-400">Max Proportionality</span>
          <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
            {maxProportionality.toFixed(0)}%
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-zinc-500 dark:text-zinc-400">Min Proportionality</span>
          <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
            {minProportionality.toFixed(0)}%
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-zinc-500 dark:text-zinc-400">Auto Deposit Threshold</span>
          <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
            {automaticDepositThreshold.toLocaleString('en-US', { maximumFractionDigits: 0 })}
          </span>
        </div>
      </div>
    </div>
  );
}
