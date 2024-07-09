export interface DescribeUserEncryptionKeyListResponse {
    /**
     * 请求ID。
     * @example `FEA5DC20-6D8A-5979-97AA-FC57546ADC20`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 密钥列表。
         */
        KeyIds: string[];
    };
}
