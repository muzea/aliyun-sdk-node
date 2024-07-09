export interface DescribeSqlLogRecordsResponse {
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
     * 请求ID。
     * @example `F43E7FB3-CE67-5FFD-A59C-EFD278BCD7BE`
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
         * 开始时间，格式为Unix时间戳，单位为毫秒。
         * @example `1596177993000`
         */
        StartTime: number;
        /**
         * 结束时间，格式为Unix时间戳，单位为毫秒。
         * @example `1608888296000`
         */
        EndTime: number;
        /**
         * 总记录数。
         * @example `1`
         */
        TotalRecords: number;
        /**
         * 列表数据
         */
        Items: {
            /**
             * SQL日志数据。
             */
            SQLLogRecord: {
                /**
                 * 扩展信息字段，备用参数。
                 * @example `None`
                 */
                Ext: string;
                /**
                 * 执行时间，格式为UTC时间：`yyyy-MM-ddTHH:mm:ssZ`。
                 * @example `2023-12-07T02:15:32Z`
                 */
                ExecuteTime: string;
                /**
                 * 执行时间戳，格式为Unix时间，单位为毫秒。
                 * @example `1701886532000`
                 */
                OriginTime: number;
                /**
                 * 客户端IP地址。
                 * @example `11.197.XX.XX`
                 */
                HostAddress: string;
                /**
                 * 更新行数。
                 * @example `0`
                 */
                UpdateRows: number;
                /**
                 * 逻辑读。
                 * @example `0`
                 */
                LogicRead: number;
                /**
                 * SQL语句。
                 * @example `select resource_id as cluster_id, tpl_name \n\tfrom dbfree_alert_resource_tpl_ref\n\twhere user_id=? and type='cluster' group by resource_id, tpl_name`
                 */
                SqlText: string;
                /**
                 * 锁等待时间，单位毫秒。
                 * @example `0`
                 */
                LockTime: number;
                /**
                 * 扫描行数。
                 * @example `0`
                 */
                ScanRows: number;
                /**
                 * 线程ID。
                 * @example `None`
                 */
                ThreadId: number;
                /**
                 * 执行状态。
                 * - **0**：执行成功。
                 * - **1**：执行失败。
                 * @example `0`
                 */
                State: string;
                /**
                 * 数据库名称。
                 * @example `testdb`
                 */
                DBName: string;
                /**
                 * SQL语句的类型。
                 * @example `select`
                 */
                SqlType: string;
                /**
                 * 数据库账号。
                 * @example `testname`
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
                 * 事务ID。
                 * @example `200000`
                 */
                TrxId: string;
                /**
                 * 返回行数。
                 * @example `0`
                 */
                ReturnRows: number;
                /**
                 * 执行耗时，单位毫秒。
                 * @example `58`
                 */
                Consume: number;
                /**
                 * 查询链接的endpoint解析地址。
                 * @example `100.115.XX.XX`
                 */
                Vip: string;
                /**
                 * 节点ID。
                 * @example `pi-uf6k5f6g3912i****`
                 */
                NodeId: string;
                /**
                 * SQL ID。
                 * @example `c67649d4a7fb62c4f8c7a447c52b5b17`
                 */
                SqlId: string;
                /**
                 * PolarDB MySQL版实例是否使用列存索引。
                 * - **true**：是。
                 * - **false**：否。
                 * @example `true`
                 */
                UseImciEngine: string;
                /**
                 * PolarDB MySQL版实例的并行度。
                 * @example `2`
                 */
                ParallelQueueTime: string;
                /**
                 * PolarDB MySQL版实例的并行排队时间，单位为毫秒。
                 * @example `10`
                 */
                ParallelDegree: string;
                /**
                 * PolarDB-X 2.0计算节点（CN）的DN请求数。
                 * @example `10`
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
                 * 物理读。
                 * @example `0`
                 */
                PhysicRead: number;
                /**
                 * CPU执行时间，单位为微秒。
                 * @example `100`
                 */
                CpuTime: number;
                /**
                 * RDS SQL Server引擎的写入数。
                 * @example `10`
                 */
                Writes: number;
                /**
                 * 预留参数。
                 * @example `None`
                 */
                Collection: string;
            }[];
        };
        /**
         * 任务是否完成。
         * - **0**：未完成
         * - **1**：已完成
         * > 当**Finish**返回为0，并且包含**JobId**字段时，说明当前请求为异步请求，无法直接获取返回结果，需要进一步根据**JobId**进行查询。查询时将**JobId**作为**Filters**的输入值，例如：`Filters=[{"Key": "JobId", "Value": "******"}]`。
         * @example `1`
         */
        Finish: string;
        /**
         * 异步任务ID。
         * @example `MzI4NTZfUUlOR0RBT19DTTlfTlUyMF9NWVNRTF9PREJTX0xWU18zMjg1Nl9teXNxbF9XZWQgTWFyIDA2IDE0OjUwOjQ3IENTVCAyMDI0XzBfMzBfRXhlY3V0ZVRpbWVfREVTQ19XZWQgTWFyIDA2IDE0OjM1OjQ3IENTVCAyMDI0Xw==_1709708406465`
         */
        JobId: string;
    };
}
