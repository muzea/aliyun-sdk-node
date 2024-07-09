export interface GetPhoneEncryptionPublicKeyResponse {
    /**
     * 请求ID。
     * @example `DAC72B08-3327-33EF-BEDC-8EC3E83A6575`
     */
    RequestId: string;
    /**
     * 结果返回OK为正常。
     * @example `OK`
     */
    Code: string;
    /**
     * 错误描述信息。
     * @example `无`
     */
    Message: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 号码。
         * @example `861526377****`
         */
        PhoneNumber: string;
        /**
         * 公钥。
         * @example `-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAt+PMrYw4zUDEk+VeTrp0\n8LZaoVpiVFErX7iuoDjUs4F9vkxMQuIABjcXw\/swzTMEopLORQV28uqN\/2\/x9hjU\****\/Zwa\/Vk5Svp4\niVY4e22FsJCCWUEMvayO8Q+3UGq0eXXQ+8SlUWEMq1VaJ4pwCLsMnmgybA+VmJxi\nkwIDAQAB\n-----END PUBLIC KEY-----"`
         */
        EncryptionPublicKey: string;
        /**
         * 公钥有效状态，取值：
         * - MISMATCH：无效
         * - VALID：有效
         * @example `VALID`
         */
        EncryptionPublicKeyStatus: string;
    };
}
