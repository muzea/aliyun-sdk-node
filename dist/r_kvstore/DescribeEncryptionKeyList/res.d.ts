export interface DescribeEncryptionKeyListResponse {
    /**
     * 请求ID。
     * @example `10E2160B-959C-5C3E-BFE6-86EC5925****`
     */
    RequestId: string;
    KeyIds: {
        /**
         * 该地域下可使用的自定义密钥的列表。
         */
        KeyId: string[];
    };
}
