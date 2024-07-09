export interface GetDasSQLLogHotDataResponse {
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
     * 请求ID，阿里云为该请求生成的标识符。
     * @example `0A74B755-98B7-59DB-8724-1321B394****`
     */
    RequestId: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 返回信息列表。
         */
        List: {
            /**
             * 执行耗时，单位微秒。
             * @example `10000`
             */
            Latancy: number;
            /**
             * 扩展信息字段，备用参数。
             * @example `None`
             */
            Ext: string;
            /**
             * 执行时间，格式为UTC时间：`yyyy-MM-ddTHH:mm:ssZ`。
             * @example `2023-05-23 T12:11:20Z`
             */
            ExecuteTime: string;
            /**
             * 执行时间，格式为UTC时间：`yyyy-MM-ddTHH:mm:ss.SSSZ`。
             * @example `2023-05-23 T12:11:20.999Z`
             */
            OriginTime: string;
            /**
             * 客户端IP地址。
             * @example `47.100.XX.XX`
             */
            HostAddress: string;
            /**
             * 更新行数。
             * @example `30`
             */
            UpdateRows: number;
            /**
             * 逻辑读。
             * @example `12`
             */
            LogicRead: number;
            /**
             * SQL语句详情。
             * @example `select 1`
             */
            SQLText: string;
            /**
             * 锁等待时间，单位微秒。
             * @example `1`
             */
            LockTime: number;
            /**
             * 扫描行数。
             * @example `29`
             */
            ScanRows: number;
            /**
             * 线程ID。
             * @example `657`
             */
            ThreadID: number;
            /**
             * 状态。返回**0**时表示执行成功，否则返回错误码。
             * @example `0`
             */
            State: string;
            /**
             * 数据库名称。
             * @example `testDB`
             */
            DBName: string;
            /**
             * SQL的类型。取值：
             * - **SELECT**
             * - **UPDATE**
             * - **DELETE**
             * @example `SELECT`
             */
            SqlType: string;
            /**
             * 数据库账号。
             * @example `testuser`
             */
            AccountName: string;
            /**
             * 物理同步读。
             * @example `0`
             */
            PhysicSyncRead: number;
            /**
             * 物理异步读。
             * @example `0`
             */
            PhysicAsyncRead: number;
            /**
             * 开启的事务ID。
             * @example `0`
             */
            TransactionId: string;
            /**
             * 返回行数。
             * @example `1`
             */
            ReturnRows: number;
        }[];
        /**
         * 返回总记录数。
         * @example `20`
         */
        Total: number;
        /**
         * 分页页码。
         * @example `2`
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
        Extra: any;
    };
}
