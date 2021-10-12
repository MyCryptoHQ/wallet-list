export enum WalletConnectivity {
  Web3 = 'web3',
  MyCrypto = 'mycrypto',
  Ledger = 'ledger',
  Trezor = 'trezor',
  WalletConnect = 'wallet-connect',
  Interface = 'interface',
  ViewOnly = 'view-only',
  MigrateCustodial = 'migrate-custodial',
  MigrateNonCustodial = 'migrate-noncustodial'
}

export enum WalletTypes {
  Wallet = 'wallet',
  Interface = 'interface',
  Exchange = 'exchange'
}

export enum WalletTags {
  Hardware = 'Hardware',
  Web = 'Web',
  Web3 = 'Web3',
  Enterprise = 'Enterprise',
  Telegram = 'Telegram',
  BrowserBased = 'Browser Based',
  Mobile = 'Mobile',
  Desktop = 'Desktop',
  Exchange = 'Exchange',
  Wallet = 'Wallet',
  WalletConnect = 'Wallet Connect',
  Bridge = 'Bridge'
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
