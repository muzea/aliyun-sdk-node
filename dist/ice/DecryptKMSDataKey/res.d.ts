export interface DecryptKMSDataKeyResponse {
    /**
     * 请求ID。
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 解密结果信息。
     */
    DataKey: {
        /**
         * 解密密文使用的主密钥ID。
         * @example `202b9877-5a25-46e3-a763-e20791b5****
        `
         */
        KeyId: string;
        /**
         * 解密后的明文。
         * @example `tRYXuCwgja12xxO1N/gZERDDCLw9doZEQiPDk/Bv****
        `
         */
        Plaintext: string;
    };
}
