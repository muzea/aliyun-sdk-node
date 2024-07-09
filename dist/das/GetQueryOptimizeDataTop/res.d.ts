export interface GetQueryOptimizeDataTopResponse {
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
         * 榜单信息列表。
         */
        List: {
            /**
             * 实例ID。
             * @example `rm-2ze8g2am97624****`
             */
            InstanceId: string;
            /**
             * 指标名：
             * - **sqlExecuteCount**：慢SQL执行次数。
             * - **optimizedSqlExecuteCount**：推荐优化的慢SQL执行次数。
             * @example `sqlExecuteCount`
             */
            Type: string;
            /**
             * 指标的数值。
             * @example `100`
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
