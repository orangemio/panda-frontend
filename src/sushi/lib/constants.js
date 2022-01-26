import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

const NETWORK_ID = 256;

export const contractAddresses = {
  sushi: {
    [NETWORK_ID]: '0x40929FB2008c830731A3d972950bC13f70161c75',
  },
  masterChef: {
    [NETWORK_ID]: '0xEf837F795e538aA53A6Cb5065B3673b4Ac1F820E',
  },
  weth: {
    [NETWORK_ID]: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  },
}

/*
TUNA-V1 LP Address on mainnet for reference
==========================================
0  USDT 0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852
1  USDC 0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc
2  DAI  0xa478c2975ab1ea89e8196811f51a7b7ade33eb11
3  sUSD 0xf80758ab42c3b07da84053fd88804bcb6baa4b5c
4  COMP 0xcffdded873554f362ac02f8fb1f02e5ada10516f
5  LEND 0xab3f9bf1d81ddb224a2014e98b238638824bcf20
6  SNX  0x43ae24960e5534731fc831386c07755a2dc33d47
7  UMA  0x88d97d199b9ed37c29d846d00d443de980832a22
8  LINK 0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974
9  BAND 0xf421c3f2e695c2d4c0765379ccace8ade4a480d9
10 AMPL 0xc5be99a02c6857f9eac67bbce58df5572498f40c
11 YFI  0x2fdbadf3c4d5a8666bc06645b8358ab803996e28
12 SUSHI 0xce84867c3c02b05dc570d0135103d3fb9cc19433
*/

// TUNA-USDT(x2), BNB-USDT, BTC-USDT, ETH-USDT
// USDT: 0x55d398326f99059ff775485246999027b3197955
// BTC: 0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c
// ETH: 0x2170ed0880ac9a755fd29b2688956bd959f933f8
// wBNB: 0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c
// TUNA: 0x2B9d06d67Ed8b709BC037b1427726487103644f0
export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      [NETWORK_ID]: '0x1a31DEE832fA505d2901De35204e1949FD850482',
    },
    tokenAddresses: {
      [NETWORK_ID]: '0x55d398326f99059ff775485246999027b3197955',  // USDT
    },
    name: 'BNB Turtle',
    symbol: 'BNB-USDT PDA-V1 LP',
    tokenSymbol: 'USDT',
    icon: '🐢',
  },
  {
    pid: 1,
    lpAddresses: {
      [NETWORK_ID]: '0xdd49e66bff620c41c92dee5935ef7f29a922aaeb',
    },
    tokenAddresses: {
      [NETWORK_ID]: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',  // BTC
    },
    name: 'Bitcoin Snail',
    symbol: 'BTCB-USDT PDA-V1 LP',
    tokenSymbol: 'BTCB',
    icon: '🐌',
  },
  {
    pid: 2,
    lpAddresses: {
      [NETWORK_ID]: '0xaf4Ff2c5DF5B6B3F9353FDEa63042814fd72AFb0',
    },
    tokenAddresses: {
      [NETWORK_ID]: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',  // ETH
    },
    name: 'Ethereum Shark',
    symbol: 'ETH-USDT PDA-V1 LP',
    tokenSymbol: 'ETH',
    icon: '🦈',
  },
  {
    pid: 3,
    lpAddresses: {
      [NETWORK_ID]: '0xAeD046bc0b75C93eD48E54c1f88FaD34F9aEd3B0',
    },
    tokenAddresses: {
      [NETWORK_ID]: '0x2B9d06d67Ed8b709BC037b1427726487103644f0',  // TUNA
    },
    name: 'PDA Party!',
    symbol: 'PDA-USDT(x5) PDA-V1 LP',
    tokenSymbol: 'TUNA',
    icon: '🐟',
  },
  {
    pid: 4,
    lpAddresses: {
      [NETWORK_ID]: '0x6112f646ad99fdf8331f94d514d3d4a4402ea825',
    },
    tokenAddresses: {
      [NETWORK_ID]: '0x2B9d06d67Ed8b709BC037b1427726487103644f0',  // TUNA
    },
    name: 'PDA Carnival!',
    symbol: 'PDA-BNB (X5) PDA-V1 LP',
    tokenSymbol: 'TUNA',
    icon: '🐠',
  },
]
