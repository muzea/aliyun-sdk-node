export interface ListKeysResponse {
    /**
     * 当前页数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页返回值的个数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `8252db58-2036-408c-a3d5-56e656dc2551`
     */
    RequestId: string;
    /**
     * 主密钥的总数。
     * @example `3`
     */
    TotalCount: number;
    Keys: {
        /**
         * 主密钥。
         */
        Key: {
            /**
             * 主密钥的全局唯一标识符。
             * @example `08c33a6f-4e0a-4a1b-a3fa-7ddfa1d4****`
             */
            KeyId: string;
            /**
             * 主密钥的ARN。
             * @example `acs:kms:cn-hangzhou:123456:key/80e9409f-78fa-42ab-84bd-83f40c81****`
             */
            KeyArn: string;
        }[];
    };
}
