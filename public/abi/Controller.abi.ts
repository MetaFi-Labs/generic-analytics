export const controllerAbi = [
    {
        type: "function",
        name: "ASSET_DEPOSIT_MAX_PRICE",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "ASSET_REDEMPTION_MIN_PRICE",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "CONFIG_MANAGER_ROLE",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "DEFAULT_ADMIN_ROLE",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "EMERGENCY_MANAGER_ROLE",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "HEARTBEAT_BUFFER",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "MAX_BPS",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "NORMALIZED_PRICE_DECIMALS",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint8",
                internalType: "uint8"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "PERIPHERY_MANAGER_ROLE",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "PRICE_FEED_MANAGER_ROLE",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "REBALANCING_MANAGER_ROLE",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "REWARDS_MANAGER_ROLE",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "SENTINEL_VAULTS",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "SHARE_MINT_PRICE",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "VAULT_MANAGER_ROLE",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "YIELD_MANAGER_ROLE",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "addVault",
        inputs: [
            {
                name: "vault",
                type: "address",
                internalType: "address"
            },
            {
                name: "settings",
                type: "tuple",
                internalType: "struct BaseController.VaultSettings",
                components: [
                    {
                        name: "maxCapacity",
                        type: "uint224",
                        internalType: "uint224"
                    },
                    {
                        name: "minProportionality",
                        type: "uint16",
                        internalType: "uint16"
                    },
                    {
                        name: "maxProportionality",
                        type: "uint16",
                        internalType: "uint16"
                    }
                ]
            },
            {
                name: "isMainVaultForAsset",
                type: "bool",
                internalType: "bool"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "allowSkipNextRebalanceSafetyBufferCheck",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "assetDepositPrice",
        inputs: [
            {
                name: "asset",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "assetRedemptionPrice",
        inputs: [
            {
                name: "asset",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "backingAssetsValue",
        inputs: [],
        outputs: [
            {
                name: "totalValue",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "claimRewards",
        inputs: [
            {
                name: "rewardAsset",
                type: "address",
                internalType: "address"
            },
            {
                name: "vault",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [
            {
                name: "rewards",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "deposit",
        inputs: [
            {
                name: "normalizedAssets",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "receiver",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [
            {
                name: "shares",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "distributeYield",
        inputs: [],
        outputs: [
            {
                name: "yield",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "getAssetPrice",
        inputs: [
            {
                name: "asset",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [
            {
                name: "normalizedPrice",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "getRoleAdmin",
        inputs: [
            {
                name: "role",
                type: "bytes32",
                internalType: "bytes32"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "grantRole",
        inputs: [
            {
                name: "role",
                type: "bytes32",
                internalType: "bytes32"
            },
            {
                name: "account",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "hasRole",
        inputs: [
            {
                name: "role",
                type: "bytes32",
                internalType: "bytes32"
            },
            {
                name: "account",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "initialize",
        inputs: [
            {
                name: "admin",
                type: "address",
                internalType: "address"
            },
            {
                name: "share_",
                type: "address",
                internalType: "contract IGenericShare"
            },
            {
                name: "rewardsCollector_",
                type: "address",
                internalType: "address"
            },
            {
                name: "swapper_",
                type: "address",
                internalType: "contract ISwapper"
            },
            {
                name: "yieldDistributor_",
                type: "address",
                internalType: "contract IYieldDistributor"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "isRewardAsset",
        inputs: [
            {
                name: "",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "isVault",
        inputs: [
            {
                name: "vault",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "maxDeposit",
        inputs: [
            {
                name: "",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "maxMint",
        inputs: [
            {
                name: "",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "maxProtocolRebalanceSlippage",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint16",
                internalType: "uint16"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "maxRedeem",
        inputs: [
            {
                name: "owner",
                type: "address",
                internalType: "address"
            },
            {
                name: "availableAssets",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "maxWithdraw",
        inputs: [
            {
                name: "owner",
                type: "address",
                internalType: "address"
            },
            {
                name: "availableAssets",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "mint",
        inputs: [
            {
                name: "shares",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "receiver",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [
            {
                name: "normalizedAssets",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "pause",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "paused",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "previewDeposit",
        inputs: [
            {
                name: "normalizedAssets",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        outputs: [
            {
                name: "shares",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "previewMint",
        inputs: [
            {
                name: "shares",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        outputs: [
            {
                name: "normalizedAssets",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "previewRedeem",
        inputs: [
            {
                name: "shares",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        outputs: [
            {
                name: "normalizedAssets",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "previewWithdraw",
        inputs: [
            {
                name: "normalizedAssets",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        outputs: [
            {
                name: "shares",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "priceFeedExists",
        inputs: [
            {
                name: "asset",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "priceFeeds",
        inputs: [
            {
                name: "asset",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [
            {
                name: "feed",
                type: "address",
                internalType: "contract IChainlinkAggregatorLike"
            },
            {
                name: "heartbeat",
                type: "uint24",
                internalType: "uint24"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "rebalance",
        inputs: [
            {
                name: "fromVault",
                type: "address",
                internalType: "address"
            },
            {
                name: "fromAmount",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "toVault",
                type: "address",
                internalType: "address"
            },
            {
                name: "minToAmount",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "swapperData",
                type: "bytes",
                internalType: "bytes"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "redeem",
        inputs: [
            {
                name: "shares",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "spender",
                type: "address",
                internalType: "address"
            },
            {
                name: "owner",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [
            {
                name: "normalizedAssets",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "removeVault",
        inputs: [
            {
                name: "vault",
                type: "address",
                internalType: "address"
            },
            {
                name: "prevVault",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "renounceRole",
        inputs: [
            {
                name: "role",
                type: "bytes32",
                internalType: "bytes32"
            },
            {
                name: "callerConfirmation",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "revokeRole",
        inputs: [
            {
                name: "role",
                type: "bytes32",
                internalType: "bytes32"
            },
            {
                name: "account",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "rewardsCollector",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "safetyBuffer",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "safetyBufferYieldDeduction",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "sellRewards",
        inputs: [
            {
                name: "rewardAsset",
                type: "address",
                internalType: "address"
            },
            {
                name: "vault",
                type: "address",
                internalType: "address"
            },
            {
                name: "minAmountOut",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "swapperData",
                type: "bytes",
                internalType: "bytes"
            }
        ],
        outputs: [
            {
                name: "assets",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "setMainVault",
        inputs: [
            {
                name: "vault",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "setMaxProtocolRebalanceSlippage",
        inputs: [
            {
                name: "newMaxSlippage",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "setPriceFeed",
        inputs: [
            {
                name: "asset",
                type: "address",
                internalType: "address"
            },
            {
                name: "feed",
                type: "address",
                internalType: "contract IChainlinkAggregatorLike"
            },
            {
                name: "heartbeat",
                type: "uint24",
                internalType: "uint24"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "setRewardAsset",
        inputs: [
            {
                name: "asset",
                type: "address",
                internalType: "address"
            },
            {
                name: "isReward",
                type: "bool",
                internalType: "bool"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "setRewardsCollector",
        inputs: [
            {
                name: "newRewardsCollector",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "setSafetyBufferYieldDeduction",
        inputs: [
            {
                name: "newSafetyBufferYieldDeduction",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "setSwapper",
        inputs: [
            {
                name: "newSwapper",
                type: "address",
                internalType: "contract ISwapper"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "setYieldDistributor",
        inputs: [
            {
                name: "newDistributor",
                type: "address",
                internalType: "contract IYieldDistributor"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "share",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "shareDepositPrice",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "pure"
    },
    {
        type: "function",
        name: "shareRedemptionPrice",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "skipNextRebalanceSafetyBufferCheck",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "supportsInterface",
        inputs: [
            {
                name: "interfaceId",
                type: "bytes4",
                internalType: "bytes4"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "swapper",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "unpause",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "updateVaultSettings",
        inputs: [
            {
                name: "vault",
                type: "address",
                internalType: "address"
            },
            {
                name: "settings",
                type: "tuple",
                internalType: "struct BaseController.VaultSettings",
                components: [
                    {
                        name: "maxCapacity",
                        type: "uint224",
                        internalType: "uint224"
                    },
                    {
                        name: "minProportionality",
                        type: "uint16",
                        internalType: "uint16"
                    },
                    {
                        name: "maxProportionality",
                        type: "uint16",
                        internalType: "uint16"
                    }
                ]
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "vaultFor",
        inputs: [
            {
                name: "asset",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "vaultSettings",
        inputs: [
            {
                name: "vault",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [
            {
                name: "maxCapacity",
                type: "uint224",
                internalType: "uint224"
            },
            {
                name: "minProportionality",
                type: "uint16",
                internalType: "uint16"
            },
            {
                name: "maxProportionality",
                type: "uint16",
                internalType: "uint16"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "vaults",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address[]",
                internalType: "address[]"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "withdraw",
        inputs: [
            {
                name: "normalizedAssets",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "spender",
                type: "address",
                internalType: "address"
            },
            {
                name: "owner",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [
            {
                name: "shares",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "yieldDistributor",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address"
            }
        ],
        stateMutability: "view"
    },

] as const;