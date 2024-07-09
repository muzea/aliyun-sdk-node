export interface ModifyKeyPairNameRequest {
    /**
     * ADB密钥对的ID。
     * @example `kp-6v2q33ae4tw3a****`
     */
    "KeyPairId": string;
    /**
     * ADB密钥对名称。
     * @example `newKeyPairName`
     */
    "NewKeyPairName": string;
}
