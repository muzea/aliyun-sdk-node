export interface ListAliasesResponse {
    /**
     * id of request
     * @example `10D5E615-69F7-5F49-B850-00169ADE513C`
     */
    requestId: string;
    /**
     * List
     */
    result: {
        /**
         * 别名
         * @example `test`
         */
        alias: string;
        /**
         * 关联索引
         * @example `index`
         */
        index: string;
    }[];
}
