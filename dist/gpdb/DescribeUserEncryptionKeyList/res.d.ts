export interface DescribeUserEncryptionKeyListResponse {
    /**
     * 请求ID。
     * @example `B4CAF581-2AC7-41AD-8940-D56DF7AADF5B`
     */
    RequestId: string;
    /**
     * KMS的key列表。
     */
    KmsKeys: {
        /**
         * KMS的ID。
         * @example `0b8b1825-fd99-418f-875e-e4dec1dd****`
         */
        KeyId: string;
    }[];
}
