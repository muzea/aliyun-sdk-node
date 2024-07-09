export interface DescribeParameterModificationHistoriesResponse {
    /**
     * 请求ID。
     * @example `0CD8CFEE-879B-42FF-BCE5-A339C36E77DF`
     */
    RequestId: string;
    /**
     * 参数修改历史列表页码。
     * 取值：大于0且不超过Integer的最大值。
     * 默认值：1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 参数修改历史的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总记录数。
     * @example `18`
     */
    TotalCount: number;
    Histories: {
        /**
         * 参数修改历史集合。
         */
        History: {
            /**
             * 参数变更时间。
             * @example `1576758805000`
             */
            Time: number;
            /**
             *
             * 旧参数值。
             * @example `1000`
             */
            OldValue: string;
            /**
             * 参数名。
             * @example `cas_contention_timeout_in_ms`
             */
            Name: string;
            /**
             *
             * 新参数值。
             * @example `2000`
             */
            NewValue: string;
        }[];
    };
}
