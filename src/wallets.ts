import {
  privateKey,
  keystoreFile,
  mnemonicPhrase,
  ledger,
  trezor,
  metamask,
  coinbase,
  coinbasePro,
  imtoken,
  trust,
  opera,
  alice,
  alphaWallet,
  instaDapp,
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
  scatter,
  oneInch,
  atWallet,
  aTokenWallet,
  bitKeep,
  bitPay,
  bridgeWallet,
  celoWallet,
  cmorq,
  coin98,
  coinus,
  cryptoCom,
  cybravo,
  dcentWallet,
  defiant,
  dharma,
  dokWallet,
  easyPocket,
  ellipal,
  flareWallet,
  haloDefi,
  hashkeyMe,
  jadeWallet,
  keyringPro,
  kyberSwap,
  ledgerLive,
  loopringWallet,
  midasWallet,
  nash,
  o3wallet,
  ownbit,
  peakDefi,
  plasmaPay,
  quiverX,
  rWallet,
  sparkpoint,
  talkenWallet,
  tongueWallet,
  trusteeWallet,
  unstoppable,
  valora,
  viaWallet,
  visionWallet,
  walletIo,
  walleth,
  xinfin,
  zelcore,
  mewWallet,
  onto
} from 'assets';

import { WalletTypes, WalletConnectivity, WalletTags } from './types';
import type { IWallet } from './types';

export const wallets: IWallet[] = [
  {
    name: 'MetaMask',
    id: 'metamask',
    icon: metamask,
    desc: 'Metamask is a thing.',
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.Web3,
    tags: [WalletTags.Web, WalletTags.Mobile],
    urls: {
      website: 'https://metamask.io',
      support: 'https://support.mycrypto.com/how-to/migrating/moving-from-mycrypto-to-metamask'
    },
    priority: 6,
    mostPopular: true
  },
  {
    name: 'Private Key',
    id: 'private-key',
    icon: privateKey,
    desc: '',
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.MyCrypto,
    urls: {},
    priority: 5
  },
  {
    name: 'Keystore File',
    id: 'keystore-file',
    icon: keystoreFile,
    desc: '',
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.MyCrypto,
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
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.MyCrypto,

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
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.Ledger,
    tags: [WalletTags.Hardware],
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
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.Trezor,
    tags: [WalletTags.Hardware],
    urls: {
      website: 'https://trezor.io',
      support: 'https://support.mycrypto.com/how-to/migrating/moving-from-mycrypto-to-trezor'
    },
    priority: 4
  },
  {
    name: 'Coinbase Wallet',
    id: 'coinbase-wallet',
    icon: coinbase,
    desc: '',
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.Web3,
    tags: [WalletTags.WalletConnect, WalletTags.Mobile],
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
    connectivity: WalletConnectivity.Web3,
    tags: [WalletTags.WalletConnect, WalletTags.Mobile],
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
    connectivity: WalletConnectivity.Web3,
    tags: [WalletTags.WalletConnect, WalletTags.Mobile],
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
    connectivity: WalletConnectivity.Web3,
    tags: [WalletTags.Mobile, WalletTags.Web],
    urls: {
      website: 'https://opera.com/crypto'
    },
    priority: 3
  },
  {
    name: '1inch Wallet',
    id: '1inch-wallet',
    icon: oneInch,
    desc: '',
    connectivity: WalletConnectivity.WalletConnect,
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
    connectivity: WalletConnectivity.WalletConnect,
    tags: [WalletTags.WalletConnect],
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
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,
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
    type: WalletTypes.Interface,
    connectivity: WalletConnectivity.WalletConnect,
    tags: [WalletTags.WalletConnect, WalletTags.Mobile],
    urls: {
      website: 'https://argent.xyz/'
    },
    priority: 3
  },
  {
    name: 'AT.Wallet',
    id: 'at-wallet',
    icon: atWallet,
    desc: '',
    connectivity: WalletConnectivity.WalletConnect,
    urls: {
      website: 'https://authentrend.com/at-wallet/'
    },
    priority: 1
  },
  {
    name: 'AToken Wallet',
    id: 'atoken-wallet',
    icon: aTokenWallet,
    desc: '',
    connectivity: WalletConnectivity.WalletConnect,
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
    connectivity: WalletConnectivity.WalletConnect,
    tags: [WalletTags.WalletConnect],
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
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,
    urls: {
      website: 'https://authereum.org'
    },
    priority: 3
  },
  {
    name: 'BitKeep',
    id: 'bitkeep',
    icon: bitKeep,
    desc: '',
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,
    urls: {
      website: 'https://bitkeep.com/'
    },
    priority: 2
  },
  {
    name: 'BitPay',
    id: 'bitpay',
    icon: bitPay,
    desc: '',
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,

    urls: {
      website: 'https://bitpay.com'
    },
    priority: 2
  },
  {
    name: 'Bridge Wallet',
    id: 'bridge-wallet',
    icon: bridgeWallet,
    desc: '',
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,

    urls: {
      website: 'https://mtpelerin.com/bridge-wallet'
    },
    priority: 2
  },
  {
    name: 'Celo Wallet',
    id: 'celo-wallet',
    icon: celoWallet,
    desc: '',
    connectivity: WalletConnectivity.WalletConnect,

    urls: {
      website: 'https://celowallet.app/'
    },
    priority: 2
  },
  {
    name: 'cmorq',
    id: 'cmorq',
    icon: cmorq,
    desc: '',
    connectivity: WalletConnectivity.WalletConnect,

    urls: {
      website: 'https://cmorq.com/'
    },
    priority: 2
  },
  {
    name: 'Coin98',
    id: 'coin98',
    icon: coin98,
    desc: '',
    connectivity: WalletConnectivity.WalletConnect,

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
    type: WalletTypes.Interface,
    connectivity: WalletConnectivity.WalletConnect,
    tags: [WalletTags.WalletConnect],
    urls: {
      website: 'https://coinomi.com/'
    },
    priority: 2
  },
  {
    name: 'CoinUs',
    id: 'coin-us',
    icon: coinus,
    desc: '',
    type: WalletTypes.Interface,
    connectivity: WalletConnectivity.WalletConnect,

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
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,
    tags: [WalletTags.WalletConnect, WalletTags.Hardware],
    urls: {
      website: 'https://coolwallet.io/'
    },
    priority: 2
  },
  {
    name: 'Crypto.com',
    id: 'crypto-com',
    icon: cryptoCom,
    desc: '',
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,
    tags: [WalletTags.WalletConnect],
    urls: {
      website: 'https://crypto.com'
    },
    priority: 3
  },
  {
    name: 'Cybavo Wallet',
    id: 'cybavo-wallet',
    icon: cybravo,
    desc: '',
    connectivity: WalletConnectivity.WalletConnect,
    urls: {
      website: 'https://cybavo.com/'
    },
    priority: 2
  },
  {
    name: "D'CENT Wallet",
    id: 'dcent-wallet',
    icon: dcentWallet,
    desc: '',
    connectivity: WalletConnectivity.WalletConnect,
    urls: {
      website: 'https://dcentwallet.com'
    },
    priority: 1
  },
  {
    name: 'Defiant',
    id: 'defiant',
    icon: defiant,
    desc: '',
    connectivity: WalletConnectivity.WalletConnect,
    urls: {
      website: 'https://defiantapp.tech/'
    },
    priority: 1
  },
  {
    name: 'Dharma',
    id: 'dharma',
    icon: dharma,
    desc: '',
    connectivity: WalletConnectivity.WalletConnect,
    urls: {
      website: 'https://www.dharma.io/'
    },
    priority: 3
  },
  {
    name: 'Dok Wallet',
    id: 'dok-wallet',
    icon: dokWallet,
    desc: '',
    connectivity: WalletConnectivity.WalletConnect,
    urls: {
      website: 'https://dokwallet.com/'
    },
    priority: 1
  },
  {
    name: 'EasyPocket',
    id: 'easy-pocket',
    icon: easyPocket,
    desc: '',
    connectivity: WalletConnectivity.WalletConnect,
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
    connectivity: WalletConnectivity.WalletConnect,
    urls: {
      website: 'https://eidoo.io/'
    },
    priority: 2
  },
  {
    name: 'Ellipal',
    id: 'ellipal',
    icon: ellipal,
    desc: '',
    connectivity: WalletConnectivity.WalletConnect,
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
    connectivity: WalletConnectivity.WalletConnect,
    tags: [WalletTags.WalletConnect],
    urls: {
      website: 'https://equal.tech'
    },
    priority: 1
  },
  {
    name: 'Flare Wallet',
    id: 'flare-wallet',
    icon: flareWallet,
    desc: '',
    connectivity: WalletConnectivity.WalletConnect,
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
    connectivity: WalletConnectivity.WalletConnect,
    tags: [WalletTags.WalletConnect],
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
    connectivity: WalletConnectivity.WalletConnect,
    tags: [WalletTags.WalletConnect, WalletTags.Hardware],
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
    connectivity: WalletConnectivity.WalletConnect,
    urls: {
      website: 'https://guarda.com/'
    },
    priority: 2
  },
  {
    name: 'HaloDeFi Wallet',
    id: 'halodefi-wallet',
    icon: haloDefi,
    desc: '',
    type: WalletTypes.Exchange,
    connectivity: WalletConnectivity.WalletConnect,
    urls: {
      website: 'https://halodefi.org/'
    },
    priority: 1
  },
  {
    name: 'HashKey Me',
    id: 'hashkey-me',
    icon: hashkeyMe,
    desc: '',
    type: WalletTypes.Exchange,
    connectivity: WalletConnectivity.WalletConnect,

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
    type: WalletTypes.Exchange,
    connectivity: WalletConnectivity.WalletConnect,

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
    connectivity: WalletConnectivity.WalletConnect,
    tags: [WalletTags.WalletConnect],
    urls: {
      website: 'https://infinitowallet.io/'
    },
    priority: 1
  },
  {
    name: 'Jade Wallet',
    id: 'jade-wallet',
    icon: jadeWallet,
    desc: '',
    type: WalletTypes.Interface,
    connectivity: WalletConnectivity.WalletConnect,

    urls: {
      website: 'https://jadewallet.io/'
    },
    priority: 1
  },
  {
    name: 'KEYRING PRO',
    id: 'keyring-pro',
    icon: keyringPro,
    desc: '',
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,
    urls: {
      website: 'https://keyring.app/'
    },
    priority: 1
  },
  {
    name: 'KyberSwap',
    id: 'kyber-swap',
    icon: kyberSwap,
    desc: '',
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,
    tags: [WalletTags.WalletConnect],
    urls: {
      website: 'https://kyberswap.com/'
    },
    priority: 1
  },
  {
    name: 'Ledger Live',
    id: 'ledger-live',
    icon: ledgerLive,
    desc: '',
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,

    urls: {
      website: 'https://www.ledger.com/'
    },
    priority: 3
  },
  {
    name: 'Loopring Wallet',
    id: 'loopring-wallet',
    icon: loopringWallet,
    desc: '',
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,

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
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,
    tags: [WalletTags.WalletConnect],
    urls: {
      website: 'https://mathwallet.org'
    },
    priority: 1
  },
  {
    name: 'Midas Wallet',
    id: 'midas-wallet',
    icon: midasWallet,
    desc: '',
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,
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
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,
    tags: [WalletTags.WalletConnect],
    urls: {
      website: 'https://mykey.org'
    },
    priority: 1
  },
  {
    name: 'Nash',
    id: 'nash',
    icon: nash,
    desc: '',
    connectivity: WalletConnectivity.WalletConnect,
    tags: [WalletTags.WalletConnect],
    urls: {
      website: 'https://nash.io/'
    },
    priority: 1
  },
  {
    name: 'O3Wallet',
    id: 'o3wallet',
    icon: o3wallet,
    desc: '',
    connectivity: WalletConnectivity.WalletConnect,

    urls: {
      website: 'https://o3.network'
    },
    priority: 1
  },
  {
    name: 'ONTO',
    id: 'onto',
    icon: onto,
    desc: '',
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,

    urls: {
      website: 'https://onto.app/'
    },
    priority: 1
  },
  {
    name: 'Ownbit',
    id: 'ownbit',
    icon: ownbit,
    desc: '',
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,

    urls: {
      website: 'https://ownbit.io/'
    },
    priority: 1
  },
  {
    name: 'PEAKDEFI Wallet',
    id: 'peakdefi-wallet',
    icon: peakDefi,
    desc: '',
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,

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
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,
    tags: [WalletTags.WalletConnect],
    urls: {
      website: 'https://pillarproject.io/'
    },
    priority: 1
  },
  {
    name: 'PlasmaPay',
    id: 'plasmapay',
    icon: plasmaPay,
    desc: '',
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,

    urls: {
      website: 'https://plasmapay.com/'
    },
    priority: 1
  },
  {
    name: 'QuiverX',
    id: 'quiverx',
    icon: quiverX,
    desc: '',
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,

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
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,
    tags: [WalletTags.WalletConnect, WalletTags.Mobile],
    urls: {
      website: 'https://trustwallet.com/'
    },
    priority: 4
  },
  {
    name: 'RWallet',
    id: 'rwallet',
    icon: rWallet,
    desc: '',
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,

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
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,
    tags: [WalletTags.WalletConnect, WalletTags.Hardware],
    urls: {
      website: 'https://safepal.io/'
    },
    priority: 1
  },
  {
    name: 'SparkPoint',
    id: 'sparkpoint',
    icon: sparkpoint,
    desc: '',
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,

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
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,
    tags: [WalletTags.WalletConnect],
    urls: {
      website: 'https://spatium.net/'
    },
    priority: 1
  },
  {
    name: 'Talken Wallet',
    id: 'talken-wallet',
    icon: talkenWallet,
    desc: '',
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,

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
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,
    tags: [WalletTags.WalletConnect],
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
    type: WalletTypes.Interface,
    connectivity: WalletConnectivity.WalletConnect,
    tags: [WalletTags.WalletConnect],
    urls: {
      website: 'https://tokenpocket.pro/'
    },
    priority: 1
  },
  {
    name: 'Tongue Wallet',
    id: 'tongue-wallet',
    icon: tongueWallet,
    desc: '',
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,

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
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,

    urls: {
      website: 'https://toruswallet.io/'
    },
    priority: 1
  },
  {
    name: 'Trustee Wallet',
    id: 'trustee-wallet',
    icon: trusteeWallet,
    desc: '',
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,

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
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,

    urls: {
      website: 'https://trustology.io/'
    },
    priority: 1
  },
  {
    name: 'Unstoppable Wallet',
    id: 'unstoppable-wallet',
    icon: unstoppable,
    desc: '',
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,

    urls: {
      website: 'https://unstoppable.money/'
    },
    priority: 1
  },
  {
    name: 'Valora',
    id: 'valora',
    icon: valora,
    desc: '',
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,

    urls: {
      website: 'https://valoraapp.com'
    },
    priority: 1
  },
  {
    name: 'ViaWallet',
    id: 'viawallet',
    icon: viaWallet,
    desc: '',
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,

    urls: {
      website: 'https://viawallet.com/'
    },
    priority: 1
  },
  {
    name: 'Vision',
    id: 'vision',
    icon: visionWallet,
    desc: '',
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,

    urls: {
      website: 'https://vision-crypto.com/'
    },
    priority: 1
  },
  {
    name: 'wallet.io',
    id: 'walletio',
    icon: walletIo,
    desc: '',
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,

    urls: {
      website: 'https://wallet.io/'
    },
    priority: 1
  },
  {
    name: WalletTags.WalletConnect,
    id: 'walletconnect',
    icon: walletConnect,
    desc: '',
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,
    tags: [WalletTags.Mobile],
    urls: {
      website: 'https://walletconnect.org'
    },
    priority: 4
  },
  {
    name: 'Walleth',
    id: 'walleth',
    icon: walleth,
    desc: '',
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,

    urls: {
      website: 'https://walleth.org/'
    },
    priority: 2
  },
  {
    name: 'XinFin XDC Network',
    id: 'xinfin',
    icon: xinfin,
    desc: '',
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,

    urls: {
      website: 'https://www.xinfin.io/'
    },
    priority: 1
  },
  {
    name: 'ZelCore',
    id: 'zelcore',
    icon: zelcore,
    desc: '',
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.WalletConnect,

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
    connectivity: WalletConnectivity.Interface,

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
    connectivity: WalletConnectivity.Interface,
    urls: {
      website: 'https://zerion.io'
    },
    priority: 3
  },
  {
    name: 'InstaDapp',
    id: 'instadapp',
    icon: instaDapp,
    desc: '',
    connectivity: WalletConnectivity.Interface,
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
    connectivity: WalletConnectivity.Interface,
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
    connectivity: WalletConnectivity.Interface,
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
    connectivity: WalletConnectivity.MigrateCustodial,
    tags: [WalletTags.Exchange],
    urls: {
      website: 'https://binance.com'
    },
    priority: 3
  },
  {
    name: 'Coinbase Pro',
    id: 'coinbase-pro',
    desc: '',
    icon: coinbasePro,
    connectivity: WalletConnectivity.MigrateCustodial,
    tags: [WalletTags.Exchange],
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
    connectivity: WalletConnectivity.MigrateCustodial,
    tags: [WalletTags.Exchange],
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
    connectivity: WalletConnectivity.MigrateCustodial,
    tags: [WalletTags.Exchange],
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
    connectivity: WalletConnectivity.MigrateCustodial,
    tags: [WalletTags.Exchange],
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
    connectivity: WalletConnectivity.MigrateCustodial,
    tags: [WalletTags.Exchange],
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
    connectivity: WalletConnectivity.MigrateCustodial,
    tags: [WalletTags.Exchange],
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
    connectivity: WalletConnectivity.MigrateCustodial,
    tags: [WalletTags.Exchange],
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
    connectivity: WalletConnectivity.MigrateCustodial,
    tags: [WalletTags.Exchange],
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
    connectivity: WalletConnectivity.MigrateCustodial,
    tags: [WalletTags.Exchange],
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
    connectivity: WalletConnectivity.MigrateCustodial,
    tags: [WalletTags.Exchange],
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
    connectivity: WalletConnectivity.MigrateCustodial,
    tags: [WalletTags.Exchange],
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
    connectivity: WalletConnectivity.MigrateCustodial,
    tags: [WalletTags.Exchange],
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
    connectivity: WalletConnectivity.MigrateNonCustodial,
    tags: [WalletTags.Desktop, WalletTags.Mobile],
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
    connectivity: WalletConnectivity.MigrateNonCustodial,
    tags: [WalletTags.Desktop, WalletTags.Mobile],
    urls: {
      website: 'https://exodus.io'
    },
    priority: 2
  },
  {
    name: 'MEW Wallet',
    id: 'mew-wallet',
    icon: mewWallet,
    desc: '',
    connectivity: WalletConnectivity.MigrateNonCustodial,
    tags: [WalletTags.Mobile],
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
    connectivity: WalletConnectivity.MigrateNonCustodial,
    tags: [WalletTags.Bridge],
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
    connectivity: WalletConnectivity.ViewOnly,
    tags: [WalletTags.Wallet],
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
    connectivity: WalletConnectivity.ViewOnly,
    tags: [WalletTags.Wallet],
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
    connectivity: WalletConnectivity.ViewOnly,
    tags: [WalletTags.Wallet],
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
    connectivity: WalletConnectivity.ViewOnly,
    tags: [WalletTags.Hardware],
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
    connectivity: WalletConnectivity.ViewOnly,
    tags: [WalletTags.Web],
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
    connectivity: WalletConnectivity.ViewOnly,
    tags: [WalletTags.Mobile],
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
    type: WalletTypes.Exchange,
    connectivity: WalletConnectivity.ViewOnly,
    tags: [WalletTags.Hardware],
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
    type: WalletTypes.Exchange,
    connectivity: WalletConnectivity.ViewOnly,
    tags: [WalletTags.Mobile],
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
    type: WalletTypes.Exchange,
    connectivity: WalletConnectivity.ViewOnly,
    tags: [WalletTags.Mobile],
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
    type: WalletTypes.Exchange,
    connectivity: WalletConnectivity.ViewOnly,
    tags: [WalletTags.BrowserBased, WalletTags.Mobile],
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
    type: WalletTypes.Exchange,
    connectivity: WalletConnectivity.ViewOnly,
    tags: [WalletTags.Hardware],
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
    type: WalletTypes.Exchange,
    connectivity: WalletConnectivity.ViewOnly,
    tags: [WalletTags.Hardware],
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
    type: WalletTypes.Exchange,
    connectivity: WalletConnectivity.ViewOnly,
    tags: [WalletTags.Hardware],
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
    type: WalletTypes.Exchange,
    connectivity: WalletConnectivity.ViewOnly,
    tags: [WalletTags.Hardware],
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
    type: WalletTypes.Exchange,
    connectivity: WalletConnectivity.ViewOnly,
    tags: [WalletTags.Mobile],
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
    connectivity: WalletConnectivity.ViewOnly,
    tags: [WalletTags.Mobile],
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
    connectivity: WalletConnectivity.ViewOnly,
    tags: [WalletTags.Telegram],
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
    type: WalletTypes.Wallet,
    connectivity: WalletConnectivity.ViewOnly,
    tags: [WalletTags.Mobile],
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
    connectivity: WalletConnectivity.ViewOnly,
    tags: [WalletTags.Mobile],
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
    connectivity: WalletConnectivity.ViewOnly,
    tags: [WalletTags.Mobile],
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
    connectivity: WalletConnectivity.ViewOnly,
    tags: [WalletTags.Mobile],
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
    connectivity: WalletConnectivity.ViewOnly,
    tags: [WalletTags.Mobile],
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
    connectivity: WalletConnectivity.ViewOnly,
    tags: [WalletTags.Web3, WalletTags.Enterprise],
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
    connectivity: WalletConnectivity.ViewOnly,
    tags: [WalletTags.Desktop],
    urls: {
      website: 'https://get-scatter.com'
    },
    priority: 0
  },
  {
    name: 'Status',
    id: 'status',
    icon: status,
    desc: '',
    connectivity: WalletConnectivity.ViewOnly,
    tags: [WalletTags.Mobile, WalletTags.Desktop],
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
    connectivity: WalletConnectivity.ViewOnly,
    tags: [WalletTags.Web],
    urls: {
      website: 'https://toruswallet.io'
    },
    priority: 0
  }
];
