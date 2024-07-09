export interface DescribeKmsKeysResponse {
    /**
     * 请求ID。
     * @example `60EEBD77-227C-5B39-86EA-D89163C5****`
     */
    RequestId: string;
    /**
     * KMS的密钥列表。
     */
    KmsKeys: {
        /**
         * 密钥别名。
         * @example `key-shh656820f4mh9qxxxxx     alias/test1`
         */
        KeyAlias: string;
        /**
         * 密钥ID。
         * @example `37291352-xxxx-xxxx-adbf-fd0630a95583`
         */
        KeyId: string;
    }[];
}
