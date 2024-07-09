export interface UpdatePhoneEncryptionPublicKeyRequest {
    /**
     * 号码，输入国家/地区码+号码。
     * @example `861380007****`
     */
    "PhoneNumber": string;
    /**
     * 加密公钥。
     * @example `-----BEGIN PUBLIC KEY-----
    AAA
    BBB
    CCC
    DDD
    EEE
    FFF
    GGG
    -----END PUBLIC KEY-----`
     */
    "EncryptionPublicKey": string;
    /**
     * ISV子客户的SpaceId/instanceId。
     * @example `399382882`
     */
    "CustSpaceId"?: string;
}
