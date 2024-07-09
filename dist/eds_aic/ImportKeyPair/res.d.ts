export interface ImportKeyPairResponse {
    /**
     * 返回结果对象。
     */
    Data: {
        /**
         * ADB密钥对的ID。
         * @example `kp-6v2q33ae4tw3*****`
         */
        KeyPairId: string;
        /**
         * ADB密钥对名称。
         * @example `TestKeyPairName`
         */
        KeyPairName: string;
        /**
         * 创建时间。
         * @example `2023-03-05T10:29:22Z`
         */
        GmtCreated: string;
    };
    /**
     * 请求ID。
     * @example `69BCBBE4-FCF2-59B8-AD9D-531EB422****`
     */
    RequestId: string;
}
