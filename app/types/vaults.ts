import { ValueContract } from "./common";

export type VaultKey = 'usdc' | 'usdt' | 'usds';

export interface VaultContract extends ValueContract {
  strategy: ValueContract;
}
