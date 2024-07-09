export interface GetParametersForImportRequest {
    /**
     * 主密钥的全局唯一标识符。
     * > 密钥材料来源必须是外部，即Origin为EXTERNAL。
     * @example `202b9877-5a25-46e3-a763-e20791b5****`
     */
    "KeyId": string;
    /**
     * 用于加密密钥材料的算法。
     * @example `RSAES_PKCS1_V1_5`
     */
    "WrappingAlgorithm": string;
    /**
     * 用于加密密钥材料的公钥类型。
     * @example `RSA_2048`
     */
    "WrappingKeySpec": string;
}
