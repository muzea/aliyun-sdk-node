export interface CreateKeyPairResponse {
    /**
     * 返回结果对象。
     */
    Data: {
        /**
         * ADB密钥对ID。
         * @example `kp-6v2q33ae4tw3*****`
         */
        KeyPairId: string;
        /**
         * 密钥对名称。
         * @example `testKeyPairName`
         */
        KeyPairName: string;
        /**
         * 密钥对的私钥。符合ADB密钥对规范的PEM 编码的 PKCS#8 格式的私钥部分。
         * @example `MIIEpAIBAAKCAQEAtReyMzLIcBH78EV2zj****`
         */
        PrivateKeyBody: string;
        /**
         * 创建时间。
         * @example `2024-06-30 08:45:09.0`
         */
        GmtCreated: string;
    };
    /**
     * 接口请求ID。
     * @example `69BCBBE4-FCF2-59B8-AD9D-531EB422****`
     */
    RequestId: string;
}
