export const CONTRACTS = {
  controller: {
    address: '0x3a64D23313E1bEAABa25Ec13149bD8D514C973Ae' as const,
    name: 'Generic Controller'
  },
  unit: {
    address: '0x8c307baDbd78bEa5A1cCF9677caa58e7A2172502' as const,
    decimals: 18,
    name: 'Generic Unit'
  },
  vaults: {
    usdc: {
      address: '0x4825eFF24F9B7b76EEAFA2ecc6A1D5dFCb3c1c3f' as const,
      decimals: 6,
      name: 'USDC Vault'
    },
    usdt: {
      address: '0xB8280955aE7b5207AF4CDbdCd775135Bd38157fE' as const,
      decimals: 6,
      name: 'USDT Vault'
    },
    usds: {
      address: '0x6133dA4Cd25773Ebd38542a8aCEF8F94cA89892A' as const,
      decimals: 18,
      name: 'USDS Vault'
    }
  },
  priceFeeds: {
    usdc: {
      address: '0x8fFfFfd4AfB6115b954Bd326cbe7B4BA576818f6' as const,
      decimals: 8,
      name: 'USDC/USD Chainlink Feed'
    },
    usdt: {
      address: '0x3E7d1eAB13ad0104d2750B8863b489D65364e32D' as const,
      decimals: 8,
      name: 'USDT/USD Chainlink Feed'
    },
    usds: {
      address: '0xfF30586cD0F29eD462364C7e81375FC0C71219b1' as const,
      decimals: 8,
      name: 'USDS/USD Chainlink Feed'
    }
  }
} as const

export const DUNE_QUERIES = {
  unitsInTime: 6283930,
  depositsInTime: 6284260
} as const
