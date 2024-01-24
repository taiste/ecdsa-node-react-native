declare module 'starkbank-ecdsa' {
  export module Ecdsa {
    export async function sign(message: string, privateKey: PrivateKey, hashfunc: (s: string) => string = null, randNum: string = null): Signature;
    export async function verify(message: string, signature: Signature, publicKey: PublicKey, hashfunc: (s: string) => string = null): bool;
  }
  export class PublicKey {
    static fromPem(publicKeyPem: string);
  }
  export class PrivateKey {
    static fromPem(publicKeyPem: string);
  }
  export class Signature {
    toDer();
    toBase64();
    static fromBase64(s: string);
  }
}
