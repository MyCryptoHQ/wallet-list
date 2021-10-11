import {
  privateKey,
  keystoreFile,
  mnemonicPhrase,
  ledger,
  trezor,
  metamask,
  coinbase,
  imtoken,
  trust,
  opera,
  alice,
  alphaWallet,
  argent,
  atomic,
  authereum,
  coinomi,
  coolWallet,
  eidoo,
  equal,
  gnosisSafe,
  gridPlus,
  guarda,
  huobiWallet,
  infinito,
  mathWallet,
  myKey,
  pillar,
  rainbow,
  safepal,
  spatium,
  tokenary,
  tokenPocket,
  torus,
  walletConnect,
  myEtherWallet,
  zerion,
  zapper,
  defiSaver,
  binance,
  kraken,
  huobiGlobal,
  bithumb,
  upbit,
  bitfinex,
  ftx,
  kucoin,
  bitstamp,
  okex,
  coinone,
  jaxx,
  exodus,
  walletLink,
  portis,
  fortmatic,
  keepkey,
  dapper,
  zengo,
  xWallet,
  edge,
  enjin,
  bitbox,
  secalot,
  finney,
  bcVault,
  bitpie,
  buttonWallet,
  coboWallet,
  dexWallet,
  jWallet,
  multis,
  scatter
} from './assets';
import { WalletTypes, WalletConnectivity, WalletTags } from './types';
import type { IWallet } from './types';

export const wallets: IWallet[] = [
  {
    name: 'Private Key',
    id: 'private-key',
    icon: privateKey,
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.MYCRYPTO,
    urls: {},
    priority: 5
  },
  {
    name: 'Keystore File',
    id: 'keystore-file',
    icon: keystoreFile,
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.MYCRYPTO,
    urls: {
      support:
        'https://support.mycrypto.com/how-to/accessing-wallet/how-to-access-your-wallet-with-keystore-file'
    },
    priority: 5
  },
  {
    name: 'Mnemonic Phrase',
    id: 'mnemonic-phrase',
    icon: mnemonicPhrase,
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.MYCRYPTO,

    urls: {
      support:
        'https://support.mycrypto.com/how-to/accessing-wallet/how-to-access-your-wallet-with-mnemonic-phrase'
    },
    priority: 5
  },
  {
    name: 'Ledger',
    id: 'ledger',
    icon: ledger,
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.LEDGER,
    tags: [WalletTags.HARDWARE],
    urls: {
      website: 'https://ledger.com',
      support: 'https://support.mycrypto.com/how-to/migrating/moving-from-mycrypto-to-ledger'
    },
    priority: 4
  },
  {
    name: 'Trezor',
    id: 'trezor',
    icon: trezor,
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.TREZOR,
    tags: [WalletTags.HARDWARE],
    urls: {
      website: 'https://trezor.io',
      support: 'https://support.mycrypto.com/how-to/migrating/moving-from-mycrypto-to-trezor'
    },
    priority: 4
  },
  {
    name: 'MetaMask',
    id: 'metamask',
    icon: metamask,
    desc: 'Metamask is a thing.',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WEB3,
    tags: [WalletTags.WEB, WalletTags.MOBILE],
    urls: {
      website: 'https://metamask.io',
      support: 'https://support.mycrypto.com/how-to/migrating/moving-from-mycrypto-to-metamask'
    },
    priority: 4
  },
  {
    name: 'Coinbase Wallet',
    id: 'coinbase-wallet',
    icon: coinbase,
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WEB3,
    tags: [WalletTags.WALLET_CONNECT, WalletTags.MOBILE],
    urls: {
      website: 'https://wallet.coinbase.com'
    },
    priority: 4
  },
  {
    name: 'imToken',
    id: 'imtoken',
    icon: imtoken,
    desc: '',
    connectivity: WalletConnectivity.WEB3,
    tags: [WalletTags.WALLET_CONNECT, WalletTags.MOBILE],
    urls: {
      website: 'https://token.im'
    },
    priority: 4
  },
  {
    name: 'Trust',
    id: 'trust',
    icon: trust,
    desc: '',
    connectivity: WalletConnectivity.WEB3,
    tags: [WalletTags.WALLET_CONNECT, WalletTags.MOBILE],
    urls: {
      website: 'https://trustwallet.com'
    },
    priority: 4
  },
  {
    name: 'Opera',
    id: 'opera',
    desc: '',
    icon: opera,
    connectivity: WalletConnectivity.WEB3,
    tags: [WalletTags.MOBILE, WalletTags.WEB],
    urls: {
      website: 'https://opera.com/crypto'
    },
    priority: 3
  },
  {
    name: '1inch Wallet',
    id: '1inch-wallet',
    desc: '',
    connectivity: WalletConnectivity.WALLET_CONNECT,
    urls: {
      website: 'https://1inch.io/wallet/'
    },
    priority: 3
  },
  {
    name: 'Alice',
    id: 'alice',
    desc: '',
    icon: alice,
    connectivity: WalletConnectivity.WALLET_CONNECT,
    tags: [WalletTags.WALLET_CONNECT],
    urls: {
      website: 'https://alicedapp.com/'
    },
    priority: 1
  },
  {
    name: 'AlphaWallet',
    id: 'alpha-wallet',
    desc: '',
    icon: alphaWallet,
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,
    urls: {
      website: 'https://alphawallet.com/'
    },
    priority: 2
  },
  {
    name: 'Argent',
    id: 'argent',
    desc: '',
    icon: argent,
    type: WalletTypes.INTERFACE,
    connectivity: WalletConnectivity.WALLET_CONNECT,
    tags: [WalletTags.WALLET_CONNECT, WalletTags.MOBILE],
    urls: {
      website: 'https://argent.xyz/'
    },
    priority: 3
  },
  {
    name: 'AT.Wallet',
    id: 'at-wallet',
    desc: '',
    connectivity: WalletConnectivity.WALLET_CONNECT,
    urls: {
      website: 'https://authentrend.com/at-wallet/'
    },
    priority: 1
  },
  {
    name: 'AToken Wallet',
    id: 'atoken-wallet',
    desc: '',
    connectivity: WalletConnectivity.WALLET_CONNECT,
    urls: {
      website: 'https://atoken.com'
    },
    priority: 1
  },
  {
    name: 'Atomic',
    id: 'atomic',
    icon: atomic,
    desc: '',
    connectivity: WalletConnectivity.WALLET_CONNECT,
    tags: [WalletTags.WALLET_CONNECT],
    urls: {
      website: 'https://atomicwallet.io'
    },
    priority: 2
  },
  {
    name: 'Authereum',
    id: 'authereum',
    icon: authereum,
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,
    urls: {
      website: 'https://authereum.org'
    },
    priority: 3
  },
  {
    name: 'BitKeep',
    id: 'bitkeep',
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,
    urls: {
      website: 'https://bitkeep.com/'
    },
    priority: 2
  },
  {
    name: 'BitPay',
    id: 'bitpay',
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,

    urls: {
      website: 'https://bitpay.com'
    },
    priority: 2
  },
  {
    name: 'Bridge Wallet',
    id: 'bridge-wallet',
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,

    urls: {
      website: 'https://mtpelerin.com/bridge-wallet'
    },
    priority: 2
  },
  {
    name: 'Celo Wallet',
    id: 'celo-wallet',
    desc: '',
    connectivity: WalletConnectivity.WALLET_CONNECT,

    urls: {
      website: 'https://celowallet.app/'
    },
    priority: 2
  },
  {
    name: 'cmorq',
    id: 'cmorq',
    desc: '',
    connectivity: WalletConnectivity.WALLET_CONNECT,

    urls: {
      website: 'https://cmorq.com/'
    },
    priority: 2
  },
  {
    name: 'Coin98',
    id: 'coin98',
    desc: '',
    connectivity: WalletConnectivity.WALLET_CONNECT,

    urls: {
      website: 'https://coin98.app/'
    },
    priority: 2
  },
  {
    name: 'Coinomi',
    id: 'coinomi',
    icon: coinomi,
    desc: '',
    type: WalletTypes.INTERFACE,
    connectivity: WalletConnectivity.WALLET_CONNECT,
    tags: [WalletTags.WALLET_CONNECT],
    urls: {
      website: 'https://coinomi.com/'
    },
    priority: 2
  },
  {
    name: 'CoinUs',
    id: 'coin-us',
    desc: '',
    type: WalletTypes.INTERFACE,
    connectivity: WalletConnectivity.WALLET_CONNECT,

    urls: {
      website: 'https://coinus.io/'
    },
    priority: 2
  },
  {
    name: 'CoolWallet',
    id: 'coolwallet',
    icon: coolWallet,
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,
    tags: [WalletTags.WALLET_CONNECT, WalletTags.HARDWARE],
    urls: {
      website: 'https://coolwallet.io/'
    },
    priority: 2
  },
  {
    name: 'Crypto.com',
    id: 'crypto-com',
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,
    tags: [WalletTags.WALLET_CONNECT],
    urls: {
      website: 'https://crypto.com'
    },
    priority: 3
  },
  {
    name: 'Cybavo Wallet',
    id: 'cybavo-wallet',
    desc: '',
    connectivity: WalletConnectivity.WALLET_CONNECT,
    urls: {
      website: 'https://cybavo.com/'
    },
    priority: 2
  },
  {
    name: "D'CENT Wallet",
    id: 'dcent-wallet',
    desc: '',
    connectivity: WalletConnectivity.WALLET_CONNECT,
    urls: {
      website: 'https://dcentwallet.com'
    },
    priority: 1
  },
  {
    name: 'Defiant',
    id: 'defiant',
    desc: '',
    connectivity: WalletConnectivity.WALLET_CONNECT,
    urls: {
      website: 'https://defiantapp.tech/'
    },
    priority: 1
  },
  {
    name: 'Dharma',
    id: 'dharma',
    desc: '',
    connectivity: WalletConnectivity.WALLET_CONNECT,
    urls: {
      website: 'https://www.dharma.io/'
    },
    priority: 3
  },
  {
    name: 'Dok Wallet',
    id: 'dok-wallet',
    desc: '',
    connectivity: WalletConnectivity.WALLET_CONNECT,
    urls: {
      website: 'https://dokwallet.com/'
    },
    priority: 1
  },
  {
    name: 'EasyPocket',
    id: 'easy-pocket',
    desc: '',
    connectivity: WalletConnectivity.WALLET_CONNECT,
    urls: {
      website: 'https://easypocket.app/'
    },
    priority: 1
  },
  {
    name: 'Eidoo',
    id: 'eidoo',
    icon: eidoo,
    desc: '',
    connectivity: WalletConnectivity.WALLET_CONNECT,
    urls: {
      website: 'https://eidoo.io/'
    },
    priority: 2
  },
  {
    name: 'Ellipal',
    id: 'ellipal',
    desc: '',
    connectivity: WalletConnectivity.WALLET_CONNECT,
    urls: {
      website: 'https://ellipal.com/'
    },
    priority: 2
  },
  {
    name: 'Equal',
    id: 'equal',
    icon: equal,
    desc: '',
    connectivity: WalletConnectivity.WALLET_CONNECT,
    tags: [WalletTags.WALLET_CONNECT],
    urls: {
      website: 'https://equal.tech'
    },
    priority: 1
  },
  {
    name: 'Flare Wallet',
    id: 'flare-wallet',
    desc: '',
    connectivity: WalletConnectivity.WALLET_CONNECT,
    urls: {
      website: 'https://flarewallet.io'
    },
    priority: 1
  },
  {
    name: 'Gnosis Safe',
    id: 'gnosis-safe',
    icon: gnosisSafe,
    desc: '',
    connectivity: WalletConnectivity.WALLET_CONNECT,
    tags: [WalletTags.WALLET_CONNECT],
    urls: {
      website: 'https://gnosis-safe.io/'
    },
    priority: 3
  },
  {
    name: 'GridPlus',
    id: 'gridplus',
    icon: gridPlus,
    desc: '',
    connectivity: WalletConnectivity.WALLET_CONNECT,
    tags: [WalletTags.WALLET_CONNECT, WalletTags.HARDWARE],
    urls: {
      website: 'https://gridplus.io/'
    },
    priority: 3
  },
  {
    name: 'Guarda Wallet',
    id: 'guarda-wallet',
    icon: guarda,
    desc: '',
    connectivity: WalletConnectivity.WALLET_CONNECT,
    urls: {
      website: 'https://guarda.com/'
    },
    priority: 2
  },
  {
    name: 'HaloDeFi Wallet',
    id: 'halodefi-wallet',
    desc: '',
    type: WalletTypes.EXCHANGE,
    connectivity: WalletConnectivity.WALLET_CONNECT,
    urls: {
      website: 'https://halodefi.org/'
    },
    priority: 1
  },
  {
    name: 'HashKey Me',
    id: 'hashkey-me',
    desc: '',
    type: WalletTypes.EXCHANGE,
    connectivity: WalletConnectivity.WALLET_CONNECT,

    urls: {
      website: 'https://me.hashkey.com/'
    },
    priority: 1
  },
  {
    name: 'Huobi Wallet',
    id: 'huobi-wallet',
    icon: huobiWallet,
    desc: '',
    type: WalletTypes.EXCHANGE,
    connectivity: WalletConnectivity.WALLET_CONNECT,

    urls: {
      website: 'https://huobiwallet.com/'
    },
    priority: 2
  },
  {
    name: 'Infinito',
    id: 'infinito',
    icon: infinito,
    desc: '',
    connectivity: WalletConnectivity.WALLET_CONNECT,
    tags: [WalletTags.WALLET_CONNECT],
    urls: {
      website: 'https://infinitowallet.io/'
    },
    priority: 1
  },
  {
    name: 'Jade Wallet',
    id: 'jade-wallet',
    desc: '',
    type: WalletTypes.INTERFACE,
    connectivity: WalletConnectivity.WALLET_CONNECT,

    urls: {
      website: 'https://jadewallet.io/'
    },
    priority: 1
  },
  {
    name: 'KEYRING PRO',
    id: 'keyring-pro',
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,
    urls: {
      website: 'https://keyring.app/'
    },
    priority: 1
  },
  {
    name: 'KyberSwap',
    id: 'kyber-swap',
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,
    tags: [WalletTags.WALLET_CONNECT],
    urls: {
      website: 'https://kyberswap.com/'
    },
    priority: 1
  },
  {
    name: 'Ledger Live',
    id: 'ledger-live',
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,

    urls: {
      website: 'https://www.ledger.com/'
    },
    priority: 3
  },
  {
    name: 'Loopring Wallet',
    id: 'loopring-wallet',
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,

    urls: {
      website: 'https://loopring.io'
    },
    priority: 1
  },
  {
    name: 'Math',
    id: 'mathwallet',
    icon: mathWallet,
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,
    tags: [WalletTags.WALLET_CONNECT],
    urls: {
      website: 'https://mathwallet.org'
    },
    priority: 1
  },
  {
    name: 'MetaMask',
    id: 'metamask',
    icon: metamask,
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,
    urls: {
      website: 'https://metamask.io/'
    },
    priority: 4,
    mostPopular: true
  },
  {
    name: 'Midas Wallet',
    id: 'midas-wallet',
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,
    urls: {
      website: 'https://midasprotocol.io/'
    },
    priority: 1
  },
  {
    name: 'MyKey',
    id: 'mykey',
    icon: myKey,
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,
    tags: [WalletTags.WALLET_CONNECT],
    urls: {
      website: 'https://mykey.org'
    },
    priority: 1
  },
  {
    name: 'Nash',
    id: 'nash',
    desc: '',
    connectivity: WalletConnectivity.WALLET_CONNECT,
    tags: [WalletTags.WALLET_CONNECT],
    urls: {
      website: 'https://nash.io/'
    },
    priority: 1
  },
  {
    name: 'O3Wallet',
    id: 'o3wallet',
    desc: '',
    connectivity: WalletConnectivity.WALLET_CONNECT,

    urls: {
      website: 'https://o3.network'
    },
    priority: 1
  },
  {
    name: 'ONTO',
    id: 'onto',
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,

    urls: {
      website: 'https://onto.app/'
    },
    priority: 1
  },
  {
    name: 'Ownbit',
    id: 'ownbit',
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,

    urls: {
      website: 'https://ownbit.io/'
    },
    priority: 1
  },
  {
    name: 'PEAKDEFI Wallet',
    id: 'peakdefi-wallet',
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,

    urls: {
      website: 'https://peakdefi.com/'
    },
    priority: 1
  },
  {
    name: 'Pillar',
    id: 'pillar',
    icon: pillar,
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,
    tags: [WalletTags.WALLET_CONNECT],
    urls: {
      website: 'https://pillarproject.io/'
    },
    priority: 1
  },
  {
    name: 'PlasmaPay',
    id: 'plasmapay',
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,

    urls: {
      website: 'https://plasmapay.com/'
    },
    priority: 1
  },
  {
    name: 'QuiverX',
    id: 'quiverx',
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,

    urls: {
      website: 'https://quiverx.io'
    },
    priority: 1
  },
  {
    name: 'Rainbow',
    id: 'rainbow',
    icon: rainbow,
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,
    tags: [WalletTags.WALLET_CONNECT, WalletTags.MOBILE],
    urls: {
      website: 'https://trustwallet.com/'
    },
    priority: 4
  },
  {
    name: 'RWallet',
    id: 'rwallet',
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,

    urls: {
      website: 'https://rsk.co/'
    },
    priority: 1
  },
  {
    name: 'SafePal',
    id: 'safepal',
    icon: safepal,
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,
    tags: [WalletTags.WALLET_CONNECT, WalletTags.HARDWARE],
    urls: {
      website: 'https://safepal.io/'
    },
    priority: 1
  },
  {
    name: 'SparkPoint',
    id: 'sparkpoint',
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,

    urls: {
      website: 'https://sparkpoint.io/'
    },
    priority: 1
  },
  {
    name: 'Spatium',
    id: 'spatium',
    icon: spatium,
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,
    tags: [WalletTags.WALLET_CONNECT],
    urls: {
      website: 'https://spatium.net/'
    },
    priority: 1
  },
  {
    name: 'Talken Wallet',
    id: 'talken-wallet',
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,

    urls: {
      website: 'https://talken.io'
    },
    priority: 1
  },
  {
    name: 'Tokenary',
    id: 'tokenary',
    icon: tokenary,
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,
    tags: [WalletTags.WALLET_CONNECT],
    urls: {
      website: 'https://tokenary.io'
    },
    priority: 1
  },
  {
    name: 'TokenPocket',
    id: 'token-pocket',
    icon: tokenPocket,
    desc: '',
    type: WalletTypes.INTERFACE,
    connectivity: WalletConnectivity.WALLET_CONNECT,
    tags: [WalletTags.WALLET_CONNECT],
    urls: {
      website: 'https://tokenpocket.pro/'
    },
    priority: 1
  },
  {
    name: 'Tongue Wallet',
    id: 'tongue-wallet',
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,

    urls: {
      website: 'https://www.tongue.fi'
    },
    priority: 1
  },
  {
    name: 'Torus',
    id: 'torus',
    icon: torus,
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,

    urls: {
      website: 'https://toruswallet.io/'
    },
    priority: 1
  },
  {
    name: 'Trustee Wallet',
    id: 'trustee-wallet',
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,

    urls: {
      website: 'https://trusteeglobal.com/'
    },
    priority: 1
  },
  {
    name: 'TrustVault',
    id: 'trustvault',
    icon: trust,
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,

    urls: {
      website: 'https://trustology.io/'
    },
    priority: 1
  },
  {
    name: 'Unstoppable Wallet',
    id: 'unstoppable-wallet',
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,

    urls: {
      website: 'https://unstoppable.money/'
    },
    priority: 1
  },
  {
    name: 'Valora',
    id: 'valora',
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,

    urls: {
      website: 'https://valoraapp.com'
    },
    priority: 1
  },
  {
    name: 'ViaWallet',
    id: 'viawallet',
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,

    urls: {
      website: 'https://viawallet.com/'
    },
    priority: 1
  },
  {
    name: 'Vision',
    id: 'vision',
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,

    urls: {
      website: 'https://vision-crypto.com/'
    },
    priority: 1
  },
  {
    name: 'wallet.io',
    id: 'walletio',
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,

    urls: {
      website: 'https://wallet.io/'
    },
    priority: 1
  },
  {
    name: WalletTags.WALLET_CONNECT,
    id: 'walletconnect',
    icon: walletConnect,
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,
    tags: [WalletTags.MOBILE],
    urls: {
      website: 'https://walletconnect.org'
    },
    priority: 4
  },
  {
    name: 'Walleth',
    id: 'walleth',
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,

    urls: {
      website: 'https://walleth.org/'
    },
    priority: 2
  },
  {
    name: 'XinFin XDC Network',
    id: 'xinfin',
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,

    urls: {
      website: 'https://www.xinfin.io/'
    },
    priority: 1
  },
  {
    name: 'ZelCore',
    id: 'zelcore',
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.WALLET_CONNECT,

    urls: {
      website: 'https://zel.network'
    },
    priority: 1
  },
  {
    name: 'MyEtherWallet',
    id: 'myetherwallet',
    icon: myEtherWallet,
    desc: '',
    connectivity: WalletConnectivity.INTERFACE,

    urls: {
      website: 'https://myetherwallet.com'
    },
    priority: 3
  },
  {
    name: 'Zerion',
    id: 'zerion',
    icon: zerion,
    desc: '',
    connectivity: WalletConnectivity.INTERFACE,
    urls: {
      website: 'https://zerion.io'
    },
    priority: 3
  },
  {
    name: 'InstaDapp',
    id: 'instadapp',
    desc: '',
    connectivity: WalletConnectivity.INTERFACE,
    urls: {
      website: 'https://instadapp.io'
    },
    priority: 2
  },
  {
    name: 'Zapper',
    id: 'zapper',
    icon: zapper,
    desc: '',
    connectivity: WalletConnectivity.INTERFACE,
    urls: {
      website: 'https://zapper.fi'
    },
    priority: 3
  },
  {
    name: 'DeFi Saver',
    id: 'defi-saver',
    icon: defiSaver,
    desc: '',
    connectivity: WalletConnectivity.INTERFACE,
    urls: {
      website: 'https://defisaver.com'
    },
    priority: 1
  },
  {
    name: 'Binance',
    id: 'binance',
    icon: binance,
    desc: '',
    connectivity: WalletConnectivity.MIGRATE_CUSTODIAL,
    tags: [WalletTags.EXCHANGE],
    urls: {
      website: 'https://binance.com'
    },
    priority: 3
  },
  {
    name: 'Coinbase Pro',
    id: 'coinbase-pro',
    desc: '',
    connectivity: WalletConnectivity.MIGRATE_CUSTODIAL,
    tags: [WalletTags.EXCHANGE],
    urls: {
      website: 'https://pro.coinbase.com'
    },
    priority: 3
  },
  {
    name: 'Coinbase.com',
    id: 'coinbase.com',
    icon: coinbase,
    desc: '',
    connectivity: WalletConnectivity.MIGRATE_CUSTODIAL,
    tags: [WalletTags.EXCHANGE],
    urls: {
      website: 'https://coinbase.com'
    },
    priority: 3
  },
  {
    name: 'Kraken',
    id: 'kraken',
    icon: kraken,
    desc: '',
    connectivity: WalletConnectivity.MIGRATE_CUSTODIAL,
    tags: [WalletTags.EXCHANGE],
    urls: {
      website: 'https://kraken.com',
      support:
        'https://support.kraken.com/hc/en-us/articles/360000672763-How-to-withdraw-cryptocurrencies-from-your-Kraken-account'
    },
    priority: 3
  },
  {
    name: 'Huobi Global',
    id: 'huobi-global',
    icon: huobiGlobal,
    desc: '',
    connectivity: WalletConnectivity.MIGRATE_CUSTODIAL,
    tags: [WalletTags.EXCHANGE],
    urls: {
      website: 'https://huobi.com'
    },
    priority: 2
  },
  {
    name: 'Bithumb',
    id: 'bithumb',
    icon: bithumb,
    desc: '',
    connectivity: WalletConnectivity.MIGRATE_CUSTODIAL,
    tags: [WalletTags.EXCHANGE],
    urls: {
      website: 'https://bithumb.com'
    },
    priority: 2
  },
  {
    name: 'Upbit',
    id: 'upbit',
    icon: upbit,
    desc: '',
    connectivity: WalletConnectivity.MIGRATE_CUSTODIAL,
    tags: [WalletTags.EXCHANGE],
    urls: {
      website: 'https://upbit.com'
    },
    priority: 2
  },
  {
    name: 'Bitfinex',
    id: 'bitfinex',
    icon: bitfinex,
    desc: '',
    connectivity: WalletConnectivity.MIGRATE_CUSTODIAL,
    tags: [WalletTags.EXCHANGE],
    urls: {
      website: 'https://bitfinex.com'
    },
    priority: 2
  },
  {
    name: 'FTX',
    id: 'ftx',
    icon: ftx,
    desc: '',
    connectivity: WalletConnectivity.MIGRATE_CUSTODIAL,
    tags: [WalletTags.EXCHANGE],
    urls: {
      website: 'https://ftx.com'
    },
    priority: 3
  },
  {
    name: 'KuCoin',
    id: 'kucoin',
    icon: kucoin,
    desc: '',
    connectivity: WalletConnectivity.MIGRATE_CUSTODIAL,
    tags: [WalletTags.EXCHANGE],
    urls: {
      website: 'https://kucoin.com'
    },
    priority: 2
  },
  {
    name: 'Bitstamp',
    id: 'bitstamp',
    icon: bitstamp,
    desc: '',
    connectivity: WalletConnectivity.MIGRATE_CUSTODIAL,
    tags: [WalletTags.EXCHANGE],
    urls: {
      website: 'https://bitstamp.net'
    },
    priority: 1
  },
  {
    name: 'OKEx',
    id: 'okex',
    icon: okex,
    desc: '',
    connectivity: WalletConnectivity.MIGRATE_CUSTODIAL,
    tags: [WalletTags.EXCHANGE],
    urls: {
      website: 'https://okex.com'
    },
    priority: 1
  },
  {
    name: 'Coinone',
    id: 'coinone',
    icon: coinone,
    desc: '',
    connectivity: WalletConnectivity.MIGRATE_CUSTODIAL,
    tags: [WalletTags.EXCHANGE],
    urls: {
      website: 'https://coinone.co.kr'
    },
    priority: 1
  },
  {
    name: 'Jaxx',
    id: 'jaxx',
    icon: jaxx,
    desc: '',
    connectivity: WalletConnectivity.MIGRATE_NONCUSTODIAL,
    tags: [WalletTags.DESKTOP, WalletTags.MOBILE],
    urls: {
      website: 'jaxx.io',
      support: 'https://support.mycrypto.com/how-to/migrating/access-your-jaxx-account-on-mycrypto'
    },
    priority: 2
  },
  {
    name: 'Exodus',
    id: 'exodus',
    icon: exodus,
    desc: '',
    connectivity: WalletConnectivity.MIGRATE_NONCUSTODIAL,
    tags: [WalletTags.DESKTOP, WalletTags.MOBILE],
    urls: {
      website: 'https://exodus.io'
    },
    priority: 2
  },
  {
    name: 'MEW Wallet',
    id: 'mew-wallet',
    desc: '',
    connectivity: WalletConnectivity.MIGRATE_NONCUSTODIAL,
    tags: [WalletTags.MOBILE],
    urls: {
      website: 'https://mewwallet.com'
    },
    priority: 2
  },
  {
    name: 'WalletLink',
    id: 'walletlink',
    icon: walletLink,
    desc: '',
    connectivity: WalletConnectivity.MIGRATE_NONCUSTODIAL,
    tags: [WalletTags.BRIDGE],
    urls: {
      website: 'https://walletlink.org'
    },
    priority: 3
  },

  {
    name: 'Portis',
    id: 'portis',
    icon: portis,
    desc: '',
    connectivity: WalletConnectivity.VIEW_ONLY,
    tags: [WalletTags.WALLET],
    urls: {
      website: 'https://portis.io'
    },
    priority: 1
  },
  {
    name: 'Fortmatic',
    id: 'fortmatic',
    icon: fortmatic,
    desc: '',
    connectivity: WalletConnectivity.VIEW_ONLY,
    tags: [WalletTags.WALLET],
    urls: {
      website: 'https://fortmatic.com'
    },
    priority: 1
  },
  {
    name: 'Authereum',
    id: 'authereum',
    icon: authereum,
    desc: '',
    connectivity: WalletConnectivity.VIEW_ONLY,
    tags: [WalletTags.WALLET],
    urls: {
      website: 'https://authereum.com'
    },
    priority: 1
  },
  {
    name: 'KeepKey',
    id: 'keepkey',
    icon: keepkey,
    desc: '',
    connectivity: WalletConnectivity.VIEW_ONLY,
    tags: [WalletTags.HARDWARE],
    urls: {
      website: 'https://shapeshift.com/keepkey'
    },
    priority: 1
  },
  {
    name: 'Dapper',
    id: 'dapper',
    icon: dapper,
    desc: '',
    connectivity: WalletConnectivity.VIEW_ONLY,
    tags: [WalletTags.WEB],
    urls: {
      website: 'https://meetdapper.com'
    },
    priority: 1
  },
  {
    name: 'ZenGo',
    id: 'zengo',
    icon: zengo,
    desc: '',
    connectivity: WalletConnectivity.VIEW_ONLY,
    tags: [WalletTags.MOBILE],
    urls: {
      website: 'https://zengo.com'
    },
    priority: 1
  },
  {
    name: 'XWallet',
    id: 'xwallet',
    icon: xWallet,
    desc: '',
    type: WalletTypes.EXCHANGE,
    connectivity: WalletConnectivity.VIEW_ONLY,
    tags: [WalletTags.HARDWARE],
    urls: {
      website: 'https://xwallet.pundix.com'
    },
    priority: 1
  },
  {
    name: 'Edge',
    id: 'edge',
    icon: edge,
    desc: '',
    type: WalletTypes.EXCHANGE,
    connectivity: WalletConnectivity.VIEW_ONLY,
    tags: [WalletTags.MOBILE],
    urls: {
      website: 'https://edge.app'
    },
    priority: 1
  },
  {
    name: 'Enjin',
    id: 'enjin',
    icon: enjin,
    desc: '',
    type: WalletTypes.EXCHANGE,
    connectivity: WalletConnectivity.VIEW_ONLY,
    tags: [WalletTags.MOBILE],
    urls: {
      website: 'https://enjinwallet.io'
    },
    priority: 1
  },
  {
    name: 'Guarda',
    id: 'guarda',
    icon: guarda,
    desc: '',
    type: WalletTypes.EXCHANGE,
    connectivity: WalletConnectivity.VIEW_ONLY,
    tags: [WalletTags.BROWSER_BASED, WalletTags.MOBILE],
    urls: {
      website: 'https://guarda.com'
    },
    priority: 1
  },
  {
    name: 'Bitbox',
    id: 'bitbox',
    icon: bitbox,
    desc: '',
    type: WalletTypes.EXCHANGE,
    connectivity: WalletConnectivity.VIEW_ONLY,
    tags: [WalletTags.HARDWARE],
    urls: {
      website: 'https://shiftcrypto.ch/'
    },
    priority: 1
  },
  {
    name: 'Secalot',
    id: 'secalot',
    icon: secalot,
    desc: '',
    type: WalletTypes.EXCHANGE,
    connectivity: WalletConnectivity.VIEW_ONLY,
    tags: [WalletTags.HARDWARE],
    urls: {
      website: 'https://secalot.com'
    },
    priority: 1
  },
  {
    name: 'Finney',
    id: 'finney',
    icon: finney,
    desc: '',
    type: WalletTypes.EXCHANGE,
    connectivity: WalletConnectivity.VIEW_ONLY,
    tags: [WalletTags.HARDWARE],
    urls: {
      website: 'https://sirinlabs.com'
    },
    priority: 1
  },
  {
    name: 'BC Vault',
    id: 'bc-vault',
    icon: bcVault,
    desc: '',
    type: WalletTypes.EXCHANGE,
    connectivity: WalletConnectivity.VIEW_ONLY,
    tags: [WalletTags.HARDWARE],
    urls: {
      website: 'https://bc-vault.com'
    },
    priority: 1
  },
  {
    name: 'AlphaWallet',
    id: 'alphawallet',
    icon: alphaWallet,
    desc: '',
    type: WalletTypes.EXCHANGE,
    connectivity: WalletConnectivity.VIEW_ONLY,
    tags: [WalletTags.MOBILE],
    urls: {
      website: 'https://alphawallet.com'
    },
    priority: 1
  },
  {
    name: 'Bitpie',
    id: 'bitpie',
    icon: bitpie,
    desc: '',
    connectivity: WalletConnectivity.VIEW_ONLY,
    tags: [WalletTags.MOBILE],
    urls: {
      website: 'https://bitpie.com'
    },
    priority: 1
  },
  {
    name: 'Button Wallet',
    id: 'button-wallet',
    icon: buttonWallet,
    desc: '',
    connectivity: WalletConnectivity.VIEW_ONLY,
    tags: [WalletTags.TELEGRAM],
    urls: {
      website: 'https://buttonwallet.com'
    },
    priority: 1
  },
  {
    name: 'Cobo Wallet',
    id: 'cobo-wallet',
    icon: coboWallet,
    desc: '',
    type: WalletTypes.WALLET,
    connectivity: WalletConnectivity.VIEW_ONLY,
    tags: [WalletTags.MOBILE],
    urls: {
      website: 'https://cobo.com'
    },
    priority: 1
  },
  {
    name: 'Dexwallet',
    id: 'dexwallet',
    icon: dexWallet,
    desc: '',
    connectivity: WalletConnectivity.VIEW_ONLY,
    tags: [WalletTags.MOBILE],
    urls: {
      website: 'https://dexwallet.io'
    },
    priority: 0
  },
  {
    name: 'Eidoo',
    id: 'eidoo',
    icon: eidoo,
    desc: '',
    connectivity: WalletConnectivity.VIEW_ONLY,
    tags: [WalletTags.MOBILE],
    urls: {
      website: 'https://eidoo.io'
    },
    priority: 0
  },
  {
    name: 'Huobi Wallet',
    id: 'huobi-wallet',
    icon: huobiWallet,
    desc: '',
    connectivity: WalletConnectivity.VIEW_ONLY,
    tags: [WalletTags.MOBILE],
    urls: {
      website: 'https://huobiwallet.com'
    },
    priority: 0
  },
  {
    name: 'Jwallet',
    id: 'jwallet',
    icon: jWallet,
    desc: '',
    connectivity: WalletConnectivity.VIEW_ONLY,
    tags: [WalletTags.MOBILE],
    urls: {
      website: 'https://jwallet.network'
    },
    priority: 0
  },
  {
    name: 'Multis',
    id: 'multis',
    icon: multis,
    desc: '',
    connectivity: WalletConnectivity.VIEW_ONLY,
    tags: [WalletTags.WEB3, WalletTags.ENTERPRISE],
    urls: {
      website: 'https://multis.co'
    },
    priority: 0
  },
  {
    name: 'Scatter',
    id: 'scatter',
    icon: scatter,
    desc: '',
    connectivity: WalletConnectivity.VIEW_ONLY,
    tags: [WalletTags.DESKTOP],
    urls: {
      website: 'https://get-scatter.com'
    },
    priority: 0
  },
  {
    name: 'Status',
    id: 'status',
    desc: '',
    connectivity: WalletConnectivity.VIEW_ONLY,
    tags: [WalletTags.MOBILE, WalletTags.DESKTOP],
    urls: {
      website: 'https://status.im/'
    },
    priority: 0
  },
  {
    name: 'Torus',
    id: 'torus',
    icon: torus,
    desc: '',
    connectivity: WalletConnectivity.VIEW_ONLY,
    tags: [WalletTags.WEB],
    urls: {
      website: 'https://toruswallet.io'
    },
    priority: 0
  }
];
