export interface ListAliasesResponse {
    /**
     * 请求ID。
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
     * 返回的别名总数。
     * @example `1`
     */
    TotalCount: number;
    Aliases: {
        /**
         * 用户别名。
         */
        Alias: {
            /**
             * 别名对应的主密钥（CMK）。
             * @example `08c33a6f-4e0a-4a1b-a3fa-7ddfa1d****`
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
