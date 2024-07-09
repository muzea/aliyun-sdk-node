export interface DescribeUserEncryptionKeyListResponse {
    /**
     * 请求ID。
     * @example `7CD51DA4-A499-43CE-B9B5-20CD4FDC648E`
     */
    RequestId: string;
    KeyIds: {
        /**
         * 实例密钥列表。
         */
        KeyId: string[];
    };
}
