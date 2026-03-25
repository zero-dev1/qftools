export interface Account {
  address: string;
  qfName?: string;
  avatar?: string | null;
  bio?: string | null;
  freeBalance: number;
  reservedBalance: number;
  nonce: number;
}

export const ACCOUNTS: Account[] = [
  // === ECOSYSTEM ACCOUNTS ===
  {
    address: '5FbmtGERRpSCFG8Rz8bVGrUPW6y7q2xKCDv4EeRz8bVGrU',
    qfName: 'deployer',
    avatar: null,
    bio: 'QF Network deployer account',
    freeBalance: 49.09,
    reservedBalance: 0,
    nonce: 506,
  },
  {
    address: '5HpLku4FAmAJHJpMo9Bv6CKFG8Rz8bVGrUPW6y7q2xKCDv',
    qfName: 'qfpay',
    avatar: null,
    bio: 'QFPay — Instant payments on QF Network',
    freeBalance: 0,
    reservedBalance: 0,
    nonce: 1,
  },
  {
    address: '5DfhGyZiTArUDB7pSMFJ2DCbGRz8bVGrUPW6y7q2xKCDvR',
    qfName: 'qns',
    avatar: null,
    bio: 'QF Name Service — Your identity on QF Network',
    freeBalance: 0,
    reservedBalance: 0,
    nonce: 1,
  },
  {
    address: '5GNJqTPyNqANBkUVMN1LPPrxXnFouWA2MJHzRz8bVGrUPW',
    qfName: 'qflink',
    avatar: null,
    bio: 'QFLink — On-chain messaging',
    freeBalance: 0,
    reservedBalance: 0,
    nonce: 1,
  },
  {
    address: '5EsXZf83jgtyuKCDv4EeRz8bVGrUPW6y7q2xotJQCYLMn',
    qfName: 'chopsticks',
    avatar: null,
    bio: null,
    freeBalance: 150.98,
    reservedBalance: 0,
    nonce: 9,
  },
  {
    address: '5HRAXshTidPW6y7q2xKCDv4EeRz8bVGrUPWE6YH5tzPq',
    qfName: 'hardwired',
    avatar: null,
    bio: 'Building on QF since day one',
    freeBalance: 14040.00,
    reservedBalance: 0,
    nonce: 8,
  },
  // === COMMUNITY ACCOUNTS ===
  {
    address: '5DqSZBLxvAKCDv4EeRz8bVGrUPW6y7q2xrWoYnaaxPm',
    qfName: 'bigbadbarry',
    avatar: null,
    bio: 'Barry. Big. Bad.',
    freeBalance: 11.10,
    reservedBalance: 0,
    nonce: 8,
  },
  {
    address: '5DcouPSTvkCDv4EeRz8bVGrUPW6y7q2xVuFoKM73Rt',
    qfName: 'axe',
    avatar: null,
    bio: null,
    freeBalance: 33.25,
    reservedBalance: 0,
    nonce: 17,
  },
  {
    address: '5Ew9dLGRMLKCDv4EeRz8bVGrUPW6y7q2xT1KG1uKcNm',
    qfName: 'alex',
    avatar: null,
    bio: 'dApp Lab',
    freeBalance: 920.50,
    reservedBalance: 0,
    nonce: 42,
  },
  {
    address: '5CiRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qNUWR',
    qfName: 'boobs',
    avatar: null,
    bio: null,
    freeBalance: 1.32,
    reservedBalance: 0,
    nonce: 20,
  },
  {
    address: '5FvRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qWxMn',
    qfName: 'satoshi',
    avatar: null,
    bio: 'In cryptography we trust',
    freeBalance: 2100.00,
    reservedBalance: 0,
    nonce: 31,
  },
  {
    address: '5GjRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qKpLm',
    qfName: 'vitalik',
    avatar: null,
    bio: null,
    freeBalance: 450.75,
    reservedBalance: 0,
    nonce: 15,
  },
  {
    address: '5HkRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qPnQr',
    qfName: 'zero',
    avatar: null,
    bio: 'First to nothing, last to everything',
    freeBalance: 0.01,
    reservedBalance: 0,
    nonce: 3,
  },
  {
    address: '5JmRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qTrSt',
    qfName: 'phantom',
    avatar: null,
    bio: null,
    freeBalance: 77.77,
    reservedBalance: 0,
    nonce: 7,
  },
  {
    address: '5KnRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qVuTw',
    qfName: 'ghost',
    avatar: null,
    bio: 'Lurking in the mempool',
    freeBalance: 500.00,
    reservedBalance: 0,
    nonce: 22,
  },
  {
    address: '5LpRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qXwVy',
    qfName: 'nova',
    avatar: null,
    bio: 'Stellar things ahead',
    freeBalance: 3333.33,
    reservedBalance: 0,
    nonce: 44,
  },
  {
    address: '5MqRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qZyXA',
    qfName: 'pixel',
    avatar: null,
    bio: 'One dot at a time',
    freeBalance: 88.88,
    reservedBalance: 0,
    nonce: 11,
  },
  {
    address: '5NrRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qBACB',
    qfName: 'onyx',
    avatar: null,
    bio: null,
    freeBalance: 1250.00,
    reservedBalance: 0,
    nonce: 19,
  },
  {
    address: '5PsRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qDCED',
    qfName: 'ember',
    avatar: null,
    bio: 'Burning bright',
    freeBalance: 666.66,
    reservedBalance: 0,
    nonce: 16,
  },
  {
    address: '5QtRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qFEGF',
    qfName: 'cipher',
    avatar: null,
    bio: 'Encrypted thoughts',
    freeBalance: 42.00,
    reservedBalance: 0,
    nonce: 5,
  },
  // === ACCOUNTS WITHOUT QNS NAMES (address-only) ===
  {
    address: '5GaRaCrdTYRz8bVGrUPW6y7q2xKCDv4Ee22U2rgfRPm',
    freeBalance: 10000000,
    reservedBalance: 90000000,
    nonce: 0,
  },
  {
    address: '5F6i4D5y3cRz8bVGrUPW6y7q2xKCDv4EenCSKnWMuQp',
    freeBalance: 10000000,
    reservedBalance: 90000000,
    nonce: 0,
  },
  {
    address: '5ECAbGJmoWRz8bVGrUPW6y7q2xKCDv4Eerg2Gyr8kLm',
    freeBalance: 19400000,
    reservedBalance: 180000000,
    nonce: 0,
  },
  {
    address: '5EU53UgNLRz8bVGrUPW6y7q2xKCDv4Ee9tr6t7roNp',
    freeBalance: 5000000,
    reservedBalance: 45000000,
    nonce: 0,
  },
  {
    address: '5G9dSUYyR2Rz8bVGrUPW6y7q2xKCDv4EeoX4gium8Qr',
    freeBalance: 70960,
    reservedBalance: 0,
    nonce: 0,
  },
  {
    address: '5Dqb6W6gKrRz8bVGrUPW6y7q2xKCDv4Ee8f7xf4FEst',
    freeBalance: 4990,
    reservedBalance: 0,
    nonce: 1,
  },
  {
    address: '5CoR3f1aqWRz8bVGrUPW6y7q2xKCDv4Ee4UPWQHjRuv',
    freeBalance: 2500,
    reservedBalance: 0,
    nonce: 0,
  },
  {
    address: '5GuU6sEamVRz8bVGrUPW6y7q2xKCDv4EeCRJwAqJDwx',
    freeBalance: 2500,
    reservedBalance: 0,
    nonce: 4,
  },
  {
    address: '5Dnf1nGQZFRz8bVGrUPW6y7q2xKCDv4EeyufEkkAuyz',
    freeBalance: 49.93,
    reservedBalance: 0,
    nonce: 2,
  },
  {
    address: '5FjunwqnWQRz8bVGrUPW6y7q2xKCDv4Ee9QDC8LBgAB',
    freeBalance: 100.00,
    reservedBalance: 0,
    nonce: 0,
  },
];

export interface Transfer {
  id: string;
  from: string;
  to: string;
  amount: number;
  block: number;
  timestamp: string;
  isQFPayTransfer: boolean;
  burnAmount?: number;
}

export const TRANSFERS: Transfer[] = [
  {
    id: 'tx-001',
    from: '5Ew9dLGRMLKCDv4EeRz8bVGrUPW6y7q2xT1KG1uKcNm',
    to: '5DcouPSTvkCDv4EeRz8bVGrUPW6y7q2xVuFoKM73Rt',
    amount: 1.00,
    block: 48306227,
    timestamp: '2026-03-24T19:45:14Z',
    isQFPayTransfer: true,
    burnAmount: 0.001,
  },
  {
    id: 'tx-002',
    from: '5Ew9dLGRMLKCDv4EeRz8bVGrUPW6y7q2xT1KG1uKcNm',
    to: '5DcouPSTvkCDv4EeRz8bVGrUPW6y7q2xVuFoKM73Rt',
    amount: 0.10,
    block: 48305064,
    timestamp: '2026-03-24T19:43:17Z',
    isQFPayTransfer: true,
    burnAmount: 0.0001,
  },
  {
    id: 'tx-003',
    from: '5CiRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qNUWR',
    to: '5Ew9dLGRMLKCDv4EeRz8bVGrUPW6y7q2xT1KG1uKcNm',
    amount: 0.10,
    block: 48305064,
    timestamp: '2026-03-24T19:43:17Z',
    isQFPayTransfer: true,
    burnAmount: 0.0001,
  },
  {
    id: 'tx-004',
    from: '5DqSZBLxvAKCDv4EeRz8bVGrUPW6y7q2xrWoYnaaxPm',
    to: '5GaRaCrdTYRz8bVGrUPW6y7q2xKCDv4Ee22U2rgfRPm',
    amount: 5.00,
    block: 48306647,
    timestamp: '2026-03-24T19:45:56Z',
    isQFPayTransfer: true,
    burnAmount: 0.005,
  },
  {
    id: 'tx-005',
    from: '5GaRaCrdTYRz8bVGrUPW6y7q2xKCDv4Ee22U2rgfRPm',
    to: '5DqSZBLxvAKCDv4EeRz8bVGrUPW6y7q2xrWoYnaaxPm',
    amount: 0.50,
    block: 48307431,
    timestamp: '2026-03-24T19:47:15Z',
    isQFPayTransfer: true,
    burnAmount: 0.0005,
  },
  {
    id: 'tx-006',
    from: '5FvRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qWxMn',
    to: '5LpRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qXwVy',
    amount: 100.00,
    block: 48310500,
    timestamp: '2026-03-24T20:15:30Z',
    isQFPayTransfer: true,
    burnAmount: 0.1,
  },
  {
    id: 'tx-007',
    from: '5LpRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qXwVy',
    to: '5KnRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qVuTw',
    amount: 50.00,
    block: 48315000,
    timestamp: '2026-03-24T21:00:00Z',
    isQFPayTransfer: true,
    burnAmount: 0.05,
  },
  {
    id: 'tx-008',
    from: '5HRAXshTidPW6y7q2xKCDv4EeRz8bVGrUPWE6YH5tzPq',
    to: '5Ew9dLGRMLKCDv4EeRz8bVGrUPW6y7q2xT1KG1uKcNm',
    amount: 500.00,
    block: 48320000,
    timestamp: '2026-03-24T22:00:00Z',
    isQFPayTransfer: true,
    burnAmount: 0.5,
  },
  {
    id: 'tx-009',
    from: '5PsRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qDCED',
    to: '5MqRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qZyXA',
    amount: 8.88,
    block: 48325000,
    timestamp: '2026-03-24T23:00:00Z',
    isQFPayTransfer: true,
    burnAmount: 0.00888,
  },
  {
    id: 'tx-010',
    from: '5NrRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qBACB',
    to: '5QtRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qFEGF',
    amount: 25.00,
    block: 48330000,
    timestamp: '2026-03-24T23:30:00Z',
    isQFPayTransfer: false,
  },
  {
    id: 'tx-011',
    from: '5JmRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qTrSt',
    to: '5HkRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qPnQr',
    amount: 0.01,
    block: 48335000,
    timestamp: '2026-03-25T00:00:00Z',
    isQFPayTransfer: true,
    burnAmount: 0.00001,
  },
  {
    id: 'tx-012',
    from: '5GjRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qKpLm',
    to: '5FvRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qWxMn',
    amount: 210.00,
    block: 48340000,
    timestamp: '2026-03-25T01:00:00Z',
    isQFPayTransfer: true,
    burnAmount: 0.21,
  },
  {
    id: 'tx-013',
    from: '5Dqb6W6gKrRz8bVGrUPW6y7q2xKCDv4Ee8f7xf4FEst',
    to: '5PsRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qDCED',
    amount: 200.00,
    block: 48345000,
    timestamp: '2026-03-25T02:00:00Z',
    isQFPayTransfer: false,
  },
  {
    id: 'tx-014',
    from: '5KnRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qVuTw',
    to: '5Dnf1nGQZFRz8bVGrUPW6y7q2xKCDv4EeyufEkkAuyz',
    amount: 15.50,
    block: 48348000,
    timestamp: '2026-03-25T02:30:00Z',
    isQFPayTransfer: true,
    burnAmount: 0.0155,
  },
  {
    id: 'tx-015',
    from: '5Ew9dLGRMLKCDv4EeRz8bVGrUPW6y7q2xT1KG1uKcNm',
    to: '5FvRz8bVGrUPW6y7qWxMn',
    amount: 21.00,
    block: 48350000,
    timestamp: '2026-03-25T03:00:00Z',
    isQFPayTransfer: true,
    burnAmount: 0.021,
  },
  {
    id: 'tx-016',
    from: '5LpRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qXwVy',
    to: '5NrRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qBACB',
    amount: 333.33,
    block: 48352000,
    timestamp: '2026-03-25T03:15:00Z',
    isQFPayTransfer: true,
    burnAmount: 0.33333,
  },
  {
    id: 'tx-017',
    from: '5FbmtGERRpSCFG8Rz8bVGrUPW6y7q2xKCDv4EeRz8bVGrU',
    to: '5HRAXshTidPW6y7q2xKCDv4EeRz8bVGrUPWE6YH5tzPq',
    amount: 5000.00,
    block: 48355000,
    timestamp: '2026-03-25T04:00:00Z',
    isQFPayTransfer: false,
  },
  {
    id: 'tx-018',
    from: '5MqRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qZyXA',
    to: '5JmRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qTrSt',
    amount: 7.77,
    block: 48358000,
    timestamp: '2026-03-25T04:30:00Z',
    isQFPayTransfer: true,
    burnAmount: 0.00777,
  },
  {
    id: 'tx-019',
    from: '5QtRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qFEGF',
    to: '5Ew9dLGRMLKCDv4EeRz8bVGrUPW6y7q2xT1KG1uKcNm',
    amount: 4.20,
    block: 48360000,
    timestamp: '2026-03-25T05:00:00Z',
    isQFPayTransfer: true,
    burnAmount: 0.0042,
  },
  {
    id: 'tx-020',
    from: '5DcouPSTvkCDv4EeRz8bVGrUPW6y7q2xVuFoKM73Rt',
    to: '5CiRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qNUWR',
    amount: 0.69,
    block: 48362000,
    timestamp: '2026-03-25T05:15:00Z',
    isQFPayTransfer: true,
    burnAmount: 0.00069,
  },
  {
    id: 'tx-021',
    from: '5F6i4D5y3cRz8bVGrUPW6y7q2xKCDv4EenCSKnWMuQp',
    to: '5GjRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qKpLm',
    amount: 1000.00,
    block: 48365000,
    timestamp: '2026-03-25T06:00:00Z',
    isQFPayTransfer: false,
  },
  {
    id: 'tx-022',
    from: '5HRAXshTidPW6y7q2xKCDv4EeRz8bVGrUPWE6YH5tzPq',
    to: '5LpRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qXwVy',
    amount: 250.00,
    block: 48367000,
    timestamp: '2026-03-25T06:15:00Z',
    isQFPayTransfer: true,
    burnAmount: 0.25,
  },
  {
    id: 'tx-023',
    from: '5DqSZBLxvAKCDv4EeRz8bVGrUPW6y7q2xrWoYnaaxPm',
    to: '5DcouPSTvkCDv4EeRz8bVGrUPW6y7q2xVuFoKM73Rt',
    amount: 3.33,
    block: 48369000,
    timestamp: '2026-03-25T06:30:00Z',
    isQFPayTransfer: true,
    burnAmount: 0.00333,
  },
  {
    id: 'tx-024',
    from: '5KnRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qVuTw',
    to: '5PsRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qDCED',
    amount: 66.60,
    block: 48371000,
    timestamp: '2026-03-25T06:45:00Z',
    isQFPayTransfer: true,
    burnAmount: 0.0666,
  },
  {
    id: 'tx-025',
    from: '5EsXZf83jgtyuKCDv4EeRz8bVGrUPW6y7q2xotJQCYLMn',
    to: '5FbmtGERRpSCFG8Rz8bVGrUPW6y7q2xKCDv4EeRz8bVGrU',
    amount: 10.00,
    block: 48373000,
    timestamp: '2026-03-25T07:00:00Z',
    isQFPayTransfer: true,
    burnAmount: 0.01,
  },
  {
    id: 'tx-026',
    from: '5Ew9dLGRMLKCDv4EeRz8bVGrUPW6y7q2xT1KG1uKcNm',
    to: '5KnRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qVuTw',
    amount: 42.00,
    block: 48375000,
    timestamp: '2026-03-25T07:15:00Z',
    isQFPayTransfer: true,
    burnAmount: 0.042,
  },
  {
    id: 'tx-027',
    from: '5NrRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qBACB',
    to: '5GuU6sEamVRz8bVGrUPW6y7q2xKCDv4EeCRJwAqJDwx',
    amount: 125.00,
    block: 48377000,
    timestamp: '2026-03-25T07:30:00Z',
    isQFPayTransfer: false,
  },
  {
    id: 'tx-028',
    from: '5FvRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qWxMn',
    to: '5Ew9dLGRMLKCDv4EeRz8bVGrUPW6y7q2xT1KG1uKcNm',
    amount: 21.00,
    block: 48378000,
    timestamp: '2026-03-25T07:40:00Z',
    isQFPayTransfer: true,
    burnAmount: 0.021,
  },
  {
    id: 'tx-029',
    from: '5LpRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qXwVy',
    to: '5HkRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qPnQr',
    amount: 0.33,
    block: 48379000,
    timestamp: '2026-03-25T07:50:00Z',
    isQFPayTransfer: true,
    burnAmount: 0.00033,
  },
  {
    id: 'tx-030',
    from: '5DcouPSTvkCDv4EeRz8bVGrUPW6y7q2xVuFoKM73Rt',
    to: '5DqSZBLxvAKCDv4EeRz8bVGrUPW6y7q2xrWoYnaaxPm',
    amount: 2.22,
    block: 48380000,
    timestamp: '2026-03-25T08:00:00Z',
    isQFPayTransfer: true,
    burnAmount: 0.00222,
  },
];

export interface BurnEvent {
  id: string;
  source: 'qfpay' | 'qns';
  amount: number;
  triggerTx: string;
  triggerAccount: string;
  block: number;
  timestamp: string;
}

export const QNS_BURNS: BurnEvent[] = [
  { id: 'burn-qns-001', source: 'qns', amount: 0.05, triggerTx: 'QNS: alex.qf registered', triggerAccount: '5Ew9dLGRMLKCDv4EeRz8bVGrUPW6y7q2xT1KG1uKcNm', block: 48100000, timestamp: '2026-03-20T10:00:00Z' },
  { id: 'burn-qns-002', source: 'qns', amount: 0.15, triggerTx: 'QNS: axe.qf registered', triggerAccount: '5DcouPSTvkCDv4EeRz8bVGrUPW6y7q2xVuFoKM73Rt', block: 48100500, timestamp: '2026-03-20T10:30:00Z' },
  { id: 'burn-qns-003', source: 'qns', amount: 0.05, triggerTx: 'QNS: boobs.qf registered', triggerAccount: '5CiRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qNUWR', block: 48101000, timestamp: '2026-03-20T11:00:00Z' },
  { id: 'burn-qns-004', source: 'qns', amount: 0.05, triggerTx: 'QNS: bigbadbarry.qf registered', triggerAccount: '5DqSZBLxvAKCDv4EeRz8bVGrUPW6y7q2xrWoYnaaxPm', block: 48102000, timestamp: '2026-03-20T12:00:00Z' },
  { id: 'burn-qns-005', source: 'qns', amount: 0.05, triggerTx: 'QNS: satoshi.qf registered', triggerAccount: '5FvRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qWxMn', block: 48110000, timestamp: '2026-03-21T08:00:00Z' },
  { id: 'burn-qns-006', source: 'qns', amount: 0.10, triggerTx: 'QNS: vitalik.qf registered', triggerAccount: '5GjRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qKpLm', block: 48120000, timestamp: '2026-03-21T14:00:00Z' },
  { id: 'burn-qns-007', source: 'qns', amount: 0.05, triggerTx: 'QNS: ghost.qf registered', triggerAccount: '5KnRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qVuTw', block: 48150000, timestamp: '2026-03-22T09:00:00Z' },
  { id: 'burn-qns-008', source: 'qns', amount: 0.05, triggerTx: 'QNS: nova.qf registered', triggerAccount: '5LpRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qXwVy', block: 48155000, timestamp: '2026-03-22T10:00:00Z' },
];

export interface Token {
  name: string;
  symbol: string;
  contractAddress: string;
  deployer: string;
  totalSupply: string;
  verified: boolean;
}

export const TOKENS: Token[] = [
  {
    name: 'Wrapped QF',
    symbol: 'wQF',
    contractAddress: '0x1234567890abcdef1234567890abcdef12345678',
    deployer: '5FbmtGERRpSCFG8Rz8bVGrUPW6y7q2xKCDv4EeRz8bVGrU',
    totalSupply: '1,000,000',
    verified: true,
  },
  {
    name: 'QF Staked',
    symbol: 'sQF',
    contractAddress: '0xabcdef1234567890abcdef1234567890abcdef12',
    deployer: '5FbmtGERRpSCFG8Rz8bVGrUPW6y7q2xKCDv4EeRz8bVGrU',
    totalSupply: '500,000',
    verified: true,
  },
  {
    name: 'Pixel Token',
    symbol: 'PXL',
    contractAddress: '0x567890abcdef1234567890abcdef123456789012',
    deployer: '5MqRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qZyXA',
    totalSupply: '10,000,000',
    verified: false,
  },
  {
    name: 'Nova Credits',
    symbol: 'NOVA',
    contractAddress: '0x890abcdef1234567890abcdef12345678901234ab',
    deployer: '5LpRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qXwVy',
    totalSupply: '100,000',
    verified: false,
  },
  {
    name: 'Ember Fuel',
    symbol: 'FUEL',
    contractAddress: '0xcdef1234567890abcdef1234567890abcdef1234',
    deployer: '5PsRz8bVGrUPW6y7q2xKCDv4EeRz8bVGrUPW6y7qDCED',
    totalSupply: '50,000',
    verified: true,
  },
];

export interface GasDataPoint {
  timestamp: string;
  price: number;
}

export const GAS_DATA: GasDataPoint[] = Array.from({ length: 48 }).map((_, i) => {
  const date = new Date('2026-03-25T08:00:00Z');
  date.setHours(date.getHours() - (47 - i));
  return {
    timestamp: date.toISOString(),
    price: 0.00018 + Math.random() * (0.00035 - 0.00018),
  };
});

export const CURRENT_GAS = 0.00025;

export const GAS_ESTIMATES = {
  qfpayTransfer: '~0.0012 QF',
  qnsRegistration: '~0.0045 QF',
  tokenTransfer: '~0.0008 QF',
};

export const NETWORK_STATS = {
  currentBlock: 48380000,
  fundedAccounts: 75,
  totalTransfers: 156,
  syncStatus: 'synced' as const,
  totalBurned: 1.832,
  qfpayBurned: 1.282,
  qnsBurned: 0.55,
};
