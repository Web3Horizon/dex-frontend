const dexerV2PairAbi = [
	{
		type: 'constructor',
		inputs: [],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		name: 'allowance',
		inputs: [
			{
				name: 'owner',
				type: 'address',
				internalType: 'address'
			},
			{
				name: 'spender',
				type: 'address',
				internalType: 'address'
			}
		],
		outputs: [
			{
				name: '',
				type: 'uint256',
				internalType: 'uint256'
			}
		],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'approve',
		inputs: [
			{
				name: 'spender',
				type: 'address',
				internalType: 'address'
			},
			{
				name: 'value',
				type: 'uint256',
				internalType: 'uint256'
			}
		],
		outputs: [
			{
				name: '',
				type: 'bool',
				internalType: 'bool'
			}
		],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		name: 'balanceOf',
		inputs: [
			{
				name: 'account',
				type: 'address',
				internalType: 'address'
			}
		],
		outputs: [
			{
				name: '',
				type: 'uint256',
				internalType: 'uint256'
			}
		],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'burn',
		inputs: [
			{
				name: 'to',
				type: 'address',
				internalType: 'address'
			}
		],
		outputs: [
			{
				name: 'amount0',
				type: 'uint256',
				internalType: 'uint256'
			},
			{
				name: 'amount1',
				type: 'uint256',
				internalType: 'uint256'
			}
		],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		name: 'decimals',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'uint8',
				internalType: 'uint8'
			}
		],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'factory',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'address',
				internalType: 'address'
			}
		],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'getReserves',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'uint256',
				internalType: 'uint256'
			},
			{
				name: '',
				type: 'uint256',
				internalType: 'uint256'
			}
		],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'initialize',
		inputs: [
			{
				name: '_token0',
				type: 'address',
				internalType: 'address'
			},
			{
				name: '_token1',
				type: 'address',
				internalType: 'address'
			}
		],
		outputs: [],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		name: 'mint',
		inputs: [
			{
				name: 'to',
				type: 'address',
				internalType: 'address'
			}
		],
		outputs: [
			{
				name: 'amountLPToken',
				type: 'uint256',
				internalType: 'uint256'
			}
		],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		name: 'name',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'string',
				internalType: 'string'
			}
		],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'swap',
		inputs: [
			{
				name: 'amount0Out',
				type: 'uint256',
				internalType: 'uint256'
			},
			{
				name: 'amount1Out',
				type: 'uint256',
				internalType: 'uint256'
			},
			{
				name: 'to',
				type: 'address',
				internalType: 'address'
			}
		],
		outputs: [],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		name: 'symbol',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'string',
				internalType: 'string'
			}
		],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'token0',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'address',
				internalType: 'address'
			}
		],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'token1',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'address',
				internalType: 'address'
			}
		],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'totalSupply',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'uint256',
				internalType: 'uint256'
			}
		],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'transfer',
		inputs: [
			{
				name: 'to',
				type: 'address',
				internalType: 'address'
			},
			{
				name: 'value',
				type: 'uint256',
				internalType: 'uint256'
			}
		],
		outputs: [
			{
				name: '',
				type: 'bool',
				internalType: 'bool'
			}
		],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		name: 'transferFrom',
		inputs: [
			{
				name: 'from',
				type: 'address',
				internalType: 'address'
			},
			{
				name: 'to',
				type: 'address',
				internalType: 'address'
			},
			{
				name: 'value',
				type: 'uint256',
				internalType: 'uint256'
			}
		],
		outputs: [
			{
				name: '',
				type: 'bool',
				internalType: 'bool'
			}
		],
		stateMutability: 'nonpayable'
	},
	{
		type: 'event',
		name: 'Approval',
		inputs: [
			{
				name: 'owner',
				type: 'address',
				indexed: true,
				internalType: 'address'
			},
			{
				name: 'spender',
				type: 'address',
				indexed: true,
				internalType: 'address'
			},
			{
				name: 'value',
				type: 'uint256',
				indexed: false,
				internalType: 'uint256'
			}
		],
		anonymous: false
	},
	{
		type: 'event',
		name: 'Burn',
		inputs: [
			{
				name: 'sender',
				type: 'address',
				indexed: true,
				internalType: 'address'
			},
			{
				name: 'amount0',
				type: 'uint256',
				indexed: false,
				internalType: 'uint256'
			},
			{
				name: 'amount1',
				type: 'uint256',
				indexed: false,
				internalType: 'uint256'
			},
			{
				name: 'to',
				type: 'address',
				indexed: true,
				internalType: 'address'
			}
		],
		anonymous: false
	},
	{
		type: 'event',
		name: 'Mint',
		inputs: [
			{
				name: 'sender',
				type: 'address',
				indexed: true,
				internalType: 'address'
			},
			{
				name: 'amount0',
				type: 'uint256',
				indexed: false,
				internalType: 'uint256'
			},
			{
				name: 'amount1',
				type: 'uint256',
				indexed: false,
				internalType: 'uint256'
			},
			{
				name: 'to',
				type: 'address',
				indexed: true,
				internalType: 'address'
			}
		],
		anonymous: false
	},
	{
		type: 'event',
		name: 'Swap',
		inputs: [
			{
				name: 'sender',
				type: 'address',
				indexed: true,
				internalType: 'address'
			},
			{
				name: 'amount0Out',
				type: 'uint256',
				indexed: false,
				internalType: 'uint256'
			},
			{
				name: 'amount1Out',
				type: 'uint256',
				indexed: false,
				internalType: 'uint256'
			},
			{
				name: 'to',
				type: 'address',
				indexed: true,
				internalType: 'address'
			}
		],
		anonymous: false
	},
	{
		type: 'event',
		name: 'Transfer',
		inputs: [
			{
				name: 'from',
				type: 'address',
				indexed: true,
				internalType: 'address'
			},
			{
				name: 'to',
				type: 'address',
				indexed: true,
				internalType: 'address'
			},
			{
				name: 'value',
				type: 'uint256',
				indexed: false,
				internalType: 'uint256'
			}
		],
		anonymous: false
	},
	{
		type: 'error',
		name: 'DexerV2Pair__AlreadyInitialized',
		inputs: []
	},
	{
		type: 'error',
		name: 'DexerV2Pair__InsufficientInputAmount',
		inputs: []
	},
	{
		type: 'error',
		name: 'DexerV2Pair__InsufficientLiquidity',
		inputs: []
	},
	{
		type: 'error',
		name: 'DexerV2Pair__InsufficientOutputAmount',
		inputs: []
	},
	{
		type: 'error',
		name: 'DexerV2Pair__InvalidK',
		inputs: []
	},
	{
		type: 'error',
		name: 'DexerV2Pair__Unauthorized',
		inputs: []
	},
	{
		type: 'error',
		name: 'DexerV2pair__InsufficientLiquidityBurn',
		inputs: []
	},
	{
		type: 'error',
		name: 'DexerV2pair__InsufficientLiquidityMint',
		inputs: []
	},
	{
		type: 'error',
		name: 'ERC20InsufficientAllowance',
		inputs: [
			{
				name: 'spender',
				type: 'address',
				internalType: 'address'
			},
			{
				name: 'allowance',
				type: 'uint256',
				internalType: 'uint256'
			},
			{
				name: 'needed',
				type: 'uint256',
				internalType: 'uint256'
			}
		]
	},
	{
		type: 'error',
		name: 'ERC20InsufficientBalance',
		inputs: [
			{
				name: 'sender',
				type: 'address',
				internalType: 'address'
			},
			{
				name: 'balance',
				type: 'uint256',
				internalType: 'uint256'
			},
			{
				name: 'needed',
				type: 'uint256',
				internalType: 'uint256'
			}
		]
	},
	{
		type: 'error',
		name: 'ERC20InvalidApprover',
		inputs: [
			{
				name: 'approver',
				type: 'address',
				internalType: 'address'
			}
		]
	},
	{
		type: 'error',
		name: 'ERC20InvalidReceiver',
		inputs: [
			{
				name: 'receiver',
				type: 'address',
				internalType: 'address'
			}
		]
	},
	{
		type: 'error',
		name: 'ERC20InvalidSender',
		inputs: [
			{
				name: 'sender',
				type: 'address',
				internalType: 'address'
			}
		]
	},
	{
		type: 'error',
		name: 'ERC20InvalidSpender',
		inputs: [
			{
				name: 'spender',
				type: 'address',
				internalType: 'address'
			}
		]
	},
	{
		type: 'error',
		name: 'SafeERC20FailedOperation',
		inputs: [
			{
				name: 'token',
				type: 'address',
				internalType: 'address'
			}
		]
	}
] as const;

export default dexerV2PairAbi;