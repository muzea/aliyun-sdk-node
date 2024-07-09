export interface GetQueryOptimizeExecErrorSampleResponse {
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
         * @example `2`
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
         * 返回信息列表。
         */
        List: {
            /**
             * 执行SQL的客户端IP地址。
             * @example `100.104.XX.XX`
             */
            OrigHost: string;
            /**
             * 执行SQL的客户端用户名。
             * @example `test01`
             */
            User: string;
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
             * 错误SQL执行的时间，格式为Unix时间戳，单位为毫秒。
             * @example `1643020306739`
             */
            Timestamp: number;
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
