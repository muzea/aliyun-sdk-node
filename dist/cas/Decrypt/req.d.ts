export interface DecryptRequest {
    /**
     * 证书唯一识别码。该参数可通过调用[ListCert](~~455806~~)获取。
     * - SSL证书识别码一般为{证书ID}-cn-hangzhou。
     * - PCA证书为对应私有证书的Identifier字段。
     * @example `1ef1da5f-38ed-69b3-****-037781890265`
     */
    "CertIdentifier": string;
    /**
     * 加密算法，取值：
     * - **RSAES_OAEP_SHA_1**
     * -  **RSAES_OAEP_SHA_256**
     * - **SM2PKE**
     * @example `RSAESOAEPSHA_1`
     */
    "Algorithm": string;
    /**
     * 待解密数据。使用Base64编码。
     * @example `ZOyIygCyaOW6Gj****MlNKiuyjfzw=`
     */
    "CiphertextBlob": string;
    /**
     * 消息类型。取值：
     * - RAW：返回结果为UTF-8编码的原文。
     * - Base64（默认值）：返回结果为Base64加密之后的结果。
     * @example `Base64`
     */
    "MessageType"?: string;
}
