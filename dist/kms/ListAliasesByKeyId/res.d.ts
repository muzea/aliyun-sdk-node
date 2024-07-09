export interface ListAliasesByKeyIdResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `1b57992c-834b-4811-a889-f8bac1ba0353`
     */
    RequestId: string;
    /**
     * 当前页数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页的返回结果个数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 返回的密钥总数。
     * @example `1`
     */
    TotalCount: number;
    Aliases: {
        /**
         * 别名。
         */
        Alias: {
            /**
             * 密钥ID。如果请求中的KeyId参数使用的是密钥ARN，在响应中也会返回密钥ID。
             * @example `key-hzz630494463ejqjx****`
             */
            KeyId: string;
            /**
             * 别名的ARN。
             * @example `acs:kms:cn-hangzhou:123456:alias/ExampleAlias1`
             */
            AliasArn: string;
            /**
             * 别名的唯一标识符。
             * @example `alias/ExampleAlias1`
             */
            AliasName: string;
        }[];
    };
}
