export enum WalletConnectivity {
  WEB3 = 'web3',
  MYCRYPTO = 'mycrypto',
  LEDGER = 'ledger',
  TREZOR = 'trezor',
  WALLET_CONNECT = 'wallet-connect',
  INTERFACE = 'interface',
  VIEW_ONLY = 'view-only',
  MIGRATE_CUSTODIAL = 'migrate-custodial',
  MIGRATE_NONCUSTODIAL = 'migrate-noncustodial'
}

export enum WalletTypes {
  WALLET = 'wallet',
  INTERFACE = 'interface',
  EXCHANGE = 'exchange'
}

export enum WalletTags {
  HARDWARE = 'Hardware',
  WEB = 'Web',
  WEB3 = 'Web3',
  ENTERPRISE = 'Enterprise',
  TELEGRAM = 'Telegram',
  BROWSER_BASED = 'Browser Based',
  MOBILE = 'Mobile',
  DESKTOP = 'Desktop',
  EXCHANGE = 'Exchange',
  WALLET = 'Wallet',
  WALLET_CONNECT = 'Wallet Connect',
  BRIDGE = 'Bridge'
}

export interface IWallet {
  name: string;
  id: string;
  desc: string;
  type?: WalletTypes;
  connectivity: WalletConnectivity;
  icon?: string;
  tags?: WalletTags[];
  urls: {
    website?: string;
    support?: string;
  };
  priority: number;
  mostPopular?: boolean;
}
