/// <reference types="react-scripts" />

declare module 'jazzicon' {
  export default function(diameter: number, seed: number): HTMLElement
}

declare module 'fortmatic'

interface Window {
  ethereum?: {
    isMetaMask?: true
    isSparrow?: true
    isWalletLink?: true
    on?: (...args: any[]) => void
    removeListener?: (...args: any[]) => void
  }
  web3?: {}
}

declare module 'content-hash' {
  declare function decode(x: string): string
  declare function getCodec(x: string): string
}

declare module 'multihashes' {
  declare function decode(buff: Uint8Array): { code: number; name: string; length: number; digest: Uint8Array }
  declare function toB58String(hash: Uint8Array): string
}

declare module '@octano/persona' {
  declare function getPersona(address: string): {
    version: number,
    name: {
      given: string,
      family: string
    },
    sex: string,
    zodiac: string
  }
}

declare module '@download/blockies' {
  declare function createIcon(options: { seed: string; size: number; scale: number })
}
