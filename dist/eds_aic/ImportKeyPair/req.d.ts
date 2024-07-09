export interface ImportKeyPairRequest {
    /**
     * ADB密钥对名称。
     * @example `TestKeyPairName`
     */
    "KeyPairName": string;
    /**
     * 密钥对的公钥。
     * @example `ABC1234567*****`
     */
    "PublicKeyBody": string;
}
