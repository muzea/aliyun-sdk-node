export interface GetBlockingDetailListResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求返回消息。
     * > 请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 返回的数据。
     */
    Data: {
        /**
         * 返回信息列表。
         */
        List: {
            /**
             * 采集批次。
             * @example `1683530096156`
             */
            BatchId: number;
            /**
             * 客户端名称。
             * @example `.Net SqlClient Data Provider`
             */
            ClientAppName: string;
            /**
             * 数据库名称。
             * @example `testdb1`
             */
            DataBase: string;
            /**
             * 客户端主机名称。
             * @example `ALLBNMGTAPPRD01`
             */
            HostName: string;
            /**
             * 登录用户名。
             * @example `Testuser`
             */
            LoginId: string;
            /**
             * SQL HASH值。
             * @example `DC08B955CAD25E7B`
             */
            QueryHash: string;
            /**
             * 会话ID。
             * @example `1717`
             */
            Spid: string;
            /**
             * SQL语句。
             * @example `select * from test1`
             */
            SqlText: string;
            /**
             * 开始执行的时间。格式为Unix时间戳，单位为毫秒。
             * @example `1608888296000`
             */
            StartTime: string;
            /**
             * 阻塞时长，单位毫秒。
             * @example `30000`
             */
            WaitTimeMs: number;
            /**
             * 等待类型。更多等待类型及说明，请参见[等待类型](https://learn.microsoft.com/en-us/sql/relational-databases/system-dynamic-management-views/sys-dm-os-wait-stats-transact-sql?view=sql-server-ver15)。
             * @example `MISCELLANEOUS`
             */
            WaitType: string;
            /**
             * 阻塞的采集时间。格式为Unix时间戳，单位为毫秒。
             * @example `1700065800000`
             */
            CurrentCollectionTime: number;
        }[];
        /**
         * 页码。
         * @example `1`
         */
        PageNo: number;
        /**
         * 分页大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总记录数。
         * @example `19`
         */
        Total: number;
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
