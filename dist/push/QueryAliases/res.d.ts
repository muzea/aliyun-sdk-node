export interface QueryAliasesResponse {
    /**
     * 请求ID。
     * @example `159E4422-6624-4750-8943-DFD98D34858C`
     */
    RequestId: string;
    AliasInfos: {
        /**
         * 别名列表。
         */
        AliasInfo: {
            /**
             * 别名名称。
             * @example `test_alias1`
             */
            AliasName: string;
        }[];
    };
}
