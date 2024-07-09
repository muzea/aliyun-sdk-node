export interface GetQueryOptimizeExecErrorStatsResponse {
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
     * 详细信息列表，包括信息总数、错误码等。
     */
    Data: {
        /**
         * 总数据量。
         * @example `19`
         */
        Total: number;
        /**
         * 页码。
         * @example `1`
         */
        PageNo: number;
        /**
         * 每页数量。
         * @example `10`
         */
        PageSize: number;
        /**
         * 备用参数。
         * @example `None`
         */
        Extra: string;
        /**
         * 执行失败的模板数据列表。
         */
        List: {
            /**
             * 实例ID。
             * @example `rm-2ze8g2am97624****`
             */
            InstanceId: string;
            /**
             * 实例别名。
             * @example `test01`
             */
            InstanceName: string;
            /**
             * 数据库名。
             * @example `testdb01`
             */
            Dbname: string;
            /**
             * SQL模板ID。
             * @example `2e8147b5ca2dfc640dfd5e43d96a****`
             */
            SqlId: string;
            /**
             * 执行错误的SQL文本。
             * @example `select * from test1`
             */
            SqlText: string;
            /**
             * 错误码。
             * @example `1146`
             */
            ErrorCode: string;
            /**
             * 错误次数。
             * @example `10`
             */
            ErrorCount: number;
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
