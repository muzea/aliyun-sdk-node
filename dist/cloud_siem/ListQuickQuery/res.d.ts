export interface ListQuickQueryResponse {
    /**
     * 分页结构。
     */
    Data: {
        /**
         * 符合查询条件的快速查询总数。
         * @example `101`
         */
        Total: number;
        /**
         * 当前页返回的快速查询个数。
         * @example `10`
         */
        Count: number;
        /**
         * 快速查询的具体内容。
         */
        QuickQueryList: {
            /**
             * 快速查询对应的查询分析语句。
             * @example `* and SamplerAddress:\"172.18.1.1\" and OutIf:\"105\"`
             */
            Query: string;
            /**
             * 快速查询名称。
             * @example `data_analysis`
             */
            SearchName: string;
            /**
             * 快速查询别名。
             * @example `no_1_created_search_used_for_dispaly_ip`
             */
            DisplayName: string;
        }[];
    };
    /**
     * 请求消息ID。
     * @example `F375A043-4F5B-55F2-A564-CC47FFC6****`
     */
    RequestId: string;
}
