/**
 * Utility functions for working with vault data
 */

import { VaultKey, VaultConfig, VaultsMap, VaultMetadata, VaultData, VaultSettings } from '../types/vaults';
import { CONTRACTS } from '../../config/constants';

/**
 * Get all vault keys in a consistent order
 */
export const VAULT_KEYS: readonly VaultKey[] = ['usdc', 'usdt', 'usds'] as const;

/**
 * Get vault metadata from constants
 */
export function getVaultMetadata(vaultKey: VaultKey): VaultMetadata {
  const vault = CONTRACTS.vaults[vaultKey];
  return {
    symbol: vault.symbol,
    name: vault.displayName,
    icon: vault.icon,
    color: vault.color,
  };
}

/**
 * Get all vault metadata as a map
 */
export function getAllVaultMetadata(): VaultsMap<VaultMetadata> {
  return {
    usdc: getVaultMetadata('usdc'),
    usdt: getVaultMetadata('usdt'),
    usds: getVaultMetadata('usds'),
  };
}

/**
 * Get vault addresses as a map
 */
export function getVaultAddresses(): VaultsMap<string> {
  return {
    usdc: CONTRACTS.vaults.usdc.address,
    usdt: CONTRACTS.vaults.usdt.address,
    usds: CONTRACTS.vaults.usds.address,
  };
}

/**
 * Get strategy addresses as a map
 */
export function getStrategyAddresses(): VaultsMap<string> {
  return {
    usdc: CONTRACTS.vaults.usdc.strategy.address,
    usdt: CONTRACTS.vaults.usdt.strategy.address,
    usds: CONTRACTS.vaults.usds.strategy.address,
  };
}

/**
 * Build vault configurations from individual data pieces
 */
export function buildVaultConfigs(
  vaultData: VaultsMap<VaultData>,
  vaultSettings?: VaultsMap<VaultSettings>
): VaultsMap<VaultConfig> {
  const metadata = getAllVaultMetadata();
  const vaultAddresses = getVaultAddresses();
  const strategyAddresses = getStrategyAddresses();

  return VAULT_KEYS.reduce((acc, key) => {
    acc[key] = {
      metadata: metadata[key],
      data: vaultData[key],
      settings: vaultSettings?.[key],
      strategyAddress: strategyAddresses[key],
      vaultAddress: vaultAddresses[key],
    };
    return acc;
  }, {} as VaultsMap<VaultConfig>);
}

/**
 * Convert vault configs to an array for easy iteration
 */
export function vaultConfigsToArray(configs: VaultsMap<VaultConfig>): Array<VaultConfig & { key: VaultKey }> {
  return VAULT_KEYS.map(key => ({
    ...configs[key],
    key,
  }));
}

/**
 * Get colors map from vault metadata
 */
export function getVaultColors(): VaultsMap<string> {
  return {
    usdc: CONTRACTS.vaults.usdc.color,
    usdt: CONTRACTS.vaults.usdt.color,
    usds: CONTRACTS.vaults.usds.color,
  };
}
