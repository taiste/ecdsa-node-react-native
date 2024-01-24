declare module "starkbank-ecdsa" {
  export module Ecdsa {
    export function sign(
      message: string | ArrayBuffer,
      privateKey: PrivateKey,
      hashfunc?: (s: string | ArrayBuffer) => Promise<string>,
      randNum?: string,
    ): Promise<Signature>;
    export function verify(
      message: string | ArrayBuffer,
      signature: Signature,
      publicKey: PublicKey,
      hashfunc?: (s: string | ArrayBuffer) => Promise<string>,
    ): Promise<boolean>;
  }
  export class PublicKey {
    static fromPem(publicKeyPem: string): PublicKey;
  }
  export class PrivateKey {
    static fromPem(publicKeyPem: string): Signature;
  }
  export class Signature {
    toDer(): string;
    toBase64(): string;
    static fromBase64(s: string): Signature;
  }
}
