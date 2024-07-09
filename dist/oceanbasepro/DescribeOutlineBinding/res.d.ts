export interface DescribeOutlineBindingResponse {
    /**
     * 绑定信息。
     */
    OutlineBinding: {
        /**
         * 绑定计划。
         * @example `PHY_TABLE_SCAN | bmsql_order_line | 40 ******`
         */
        BindPlan: string;
        /**
         * OutlineID。
         * @example `-1`
         */
        OutlineId: number;
        /**
         * 绑定索引。
         * @example `PRIMARY`
         */
        BindIndex: string;
        /**
         * 最大并发。
         * @example `2`
         */
        MaxConcurrent: number;
        /**
         * 表名称
         */
        TableName: string;
    };
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C`
     */
    RequestId: string;
}
