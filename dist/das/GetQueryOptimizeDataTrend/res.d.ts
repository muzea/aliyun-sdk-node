export interface GetQueryOptimizeDataTrendResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求返回消息。
     * @example `Successful`
     */
    Message: string;
    /**
     * 详细信息列表。
     */
    Data: {
        /**
         * 总数据量。
         * @example `10`
         */
        Total: number;
        /**
         * 备用参数。
         * @example `None`
         */
        PageNo: number;
        /**
         * 备用参数。
         * @example `None`
         */
        PageSize: number;
        /**
         * 备用参数。
         * @example `None`
         */
        Extra: string;
        /**
         * 趋势数据列表。
         */
        List: {
            /**
             * 指标名，指标名及其含义如下：
             * - **sqlExecuteCount**：慢SQL执行次数。
             * - **sqlExecuteCountDiff**：慢SQL执行次数相较于前一天的差值。
             * - **sqlCount**：慢SQL模板数据。
             * - **sqlCountDiff**：慢SQL模板数相较于前一天的差值。
             * - **optimizedSqlExecuteCount**：推荐优化的慢SQL执行次。
             * - **optimizedSqlExecuteCountDiff**：推荐优化的慢SQL执行次数相较于前一天的差值。
             * - **optimizedSqlCount**：推荐优化的慢SQL数。
             * - **optimizedSqlCountDiff**：推荐优化的慢SQL数相较于前一天的差值。
             * @example `sqlExecuteCount`
             */
            Kpi: string;
            /**
             * 数据日期，格式为Unix时间戳，单位为毫秒。
             * @example `1643040000000`
             */
            Timestamp: number;
            /**
             * 指标数据的值。
             * @example `1000`
             */
            Value: number;
        }[];
    };
    /**
     * 请求ID。
     * @example `B6D17591-B48B-4D31-9CD6-9B9796B2****`
     */
    RequestId: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: string;
}
