export interface CertificatePrivateKeyDecryptRequest {
    /**
     * 证书ID。证书管家中证书的全局唯一标识符。
     * @example `12345678-1234-1234-1234-12345678****`
     */
    "CertificateId": string;
    /**
     * 加密算法，取值：
     * - RSAES_OAEP_SHA_1
     * - RSAES_OAEP_SHA_256
     * - SM2PKE
     *
     * > SM2PKE加密算法仅在中国内地使用托管密码机的地域支持。更多信息，请参见[托管密码机概述](~~125803~~)。
     * @example `RSAES_OAEP_SHA_256`
     */
    "Algorithm": string;
    /**
     * 待解密数据。
     * 使用Base64编码。
     * @example `ZOyIygCyaOW6Gj****MlNKiuyjfzw=`
     */
    "CiphertextBlob": string;
}
