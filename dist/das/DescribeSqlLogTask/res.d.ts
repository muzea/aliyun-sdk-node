export interface DescribeSqlLogTaskResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求返回消息。
     * >请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
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
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 任务名称。
         * @example `SQL审计导出1
        `
         */
        Name: string;
        /**
         * 任务ID。
         * @example `9a4f5c4494dbd6713185d87a97aa53e8
        `
         */
        TaskId: string;
        /**
         * 任务类型。
         * - **Export**：导出任务。
         * - **Query**：查询任务。
         * @example `Query`
         */
        TaskType: string;
        /**
         * 任务创建时间，格式为unix时间戳，单位为毫秒。
         * @example `1681363254423
        `
         */
        CreateTime: number;
        /**
         * 任务状态。
         * - **INIT**：待调度 。
         * - **RUNNING**：运行中。
         * - **FAILED**：失败。
         * - **CANCELED**：已取消。
         * - **COMPLETED**：完成。
         * > 当任务处于**COMPLETED**时，可以查看离线任务的结果。
         * @example `COMPLETED`
         */
        Status: string;
        /**
         * 任务是否过期。
         * - **true**：是。
         * - **false**：否。
         * @example `false
        `
         */
        Expire: boolean;
        /**
         * 查询开始时间，格式为unix时间戳，单位为毫秒。
         * @example `1596177993000
        `
         */
        Start: number;
        /**
         * 查询结束时间，格式为unix时间戳，单位为毫秒。
         * @example `1608888296000
        `
         */
        End: number;
        /**
         * 过滤条件。
         */
        Filters: {
            /**
             * 过滤参数的名称。
             * >支持的过滤参数及其取值请参考**返回参数补充说明**。
             * @example `keyWords
            `
             */
            Key: string;
            /**
             * 过滤参数的值。
             * @example `select`
             */
            Value: any;
        }[];
        /**
         * 任务总数。
         * @example `1`
         */
        Total: number;
        /**
         * 离线查询任务结果。
         */
        Queries: {
            /**
             * 查询链接的endpoint解析地址。
             * @example `10.146.XX.XX`
             */
            Vip: string;
            /**
             * 子节点ID。
             * @example `pi-bp1o58x3ib7e6****
            `
             */
            NodeId: string;
            /**
             * SQL语句详情。
             * @example `SELECT @@session.transaction_read_only`
             */
            SqlText: string;
            /**
             * 选择SQL的类型。取值：
             * - **SELECT**
             * - **UPDATE**
             * - **DELETE**
             * @example `SELECT`
             */
            SqlType: string;
            /**
             * 执行结果。
             * - **0**：执行成功。
             * - **1**：执行失败。
             * @example `0`
             */
            State: string;
            /**
             * 数据库名称。
             * @example `testdb01`
             */
            DBName: string;
            /**
             * SQL ID。
             * @example `a4111670e80596c5bf42cf5154438a91`
             */
            SqlId: string;
            /**
             * 执行时间，格式为UTC时间：`yyyy-MM-ddTHH:mm:ssZ`。
             * @example `2023-12-07T02:15:32Z`
             */
            ExecuteTime: string;
            /**
             * 执行时间戳，格式为Unix时间，单位为毫秒。
             * @example `1701886532000
            `
             */
            OriginTime: number;
            /**
             * 数据库账号。
             * @example `testname
            `
             */
            AccountName: string;
            /**
             * 客户端IP地址。
             * @example `11.197.XX.XX
            `
             */
            HostAddress: string;
            /**
             * 执行耗时，单位毫秒。
             * @example `58`
             */
            Consume: number;
            /**
             * 锁等待时间，单位毫秒。
             * @example `0`
             */
            LockTime: number;
            /**
             * 更新行数。
             * @example `0`
             */
            UpdateRows: number;
            /**
             * 扫描行数。
             * @example `0`
             */
            ScanRows: number;
            /**
             * 返回行数。
             * @example `0`
             */
            ReturnRows: number;
            /**
             * 逻辑读。
             * @example `0`
             */
            LogicRead: number;
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
             * 线程ID。
             * @example `None`
             */
            ThreadId: number;
            /**
             * 事务ID。
             * @example `200000
            `
             */
            TrxId: string;
            /**
             * 扩展信息字段，备用参数。
             * @example `None`
             */
            Ext: string;
            /**
             * PolarDB-X 2.0计算节点（CN）的DN请求数。
             * @example `10
            `
             */
            Scnt: number;
            /**
             * PolarDB-X 2.0数据库实例计算节点总更新或返回的行数。
             * @example `10`
             */
            Rows: number;
            /**
             * PolarDB-X 2.0计算节点（CN）的拉取行数。
             * @example `10`
             */
            Frows: number;
            /**
             * PolarDB-X 2.0的跟踪ID，即SQL在数据节点的执行ID。
             * @example `14c93b7c7bf00000 `
             */
            TraceId: string;
            /**
             * PolarDB MySQL版实例是否使用列存索引。
             * - **true**：是。
             * - **false**：否。
             * @example `true
            `
             */
            UseImciEngine: string;
            /**
             * PolarDB MySQL版实例的并行排队时间，单位为毫秒。
             * @example `10
            `
             */
            ParallelDegree: string;
            /**
             * PolarDB MySQL版实例的并行度。
             * @example `2`
             */
            ParallelQueueTime: string;
            /**
             * 物理读。
             * @example `0`
             */
            PhysicRead: number;
            /**
             * CPU执行时间，单位为微秒。
             * @example `100
            `
             */
            CpuTime: number;
            /**
             * RDS SQL Server引擎的写入数。
             * @example `10`
             */
            Writes: number;
            Collection: string;
        }[];
        /**
         * 导出任务的下载地址。
         * @example `"https://das-sqllog-download-cn-hongkong.oss-cn-hongkong.aliyuncs.com/****"`
         */
        Export: string;
    };
}
