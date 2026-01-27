export type Address = `0x${string}`;

export interface Contract {
  address: Address;
}

export interface ValueContract extends Contract {
  decimals: number;
}
