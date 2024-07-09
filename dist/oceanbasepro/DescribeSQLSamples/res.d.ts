export interface DescribeSQLSamplesResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-****-****-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 慢 SQL 执行明细的采样信息列表。
     */
    Data: {
        /**
         * 请求 ID。
         * @example `EE205C00-30E4-****-****-87E3A8A2AA0C`
         */
        RequestId: string;
        /**
         * 跟踪 ID。
         * @example `YB42C****-0005E303D1****-0-0`
         */
        TraceId: string;
        /**
         * SQL 的请求时间。
         * @example `2023-04-12T04:46:38Z`
         */
        RequestTime: string;
        /**
         * SQL 执行所在的 Server。
         * @example `i-bp1db1****8uemejio`
         */
        Server: string;
        /**
         * 客户端 IP。
         * @example `i-bp1db****38uemejio`
         */
        ClientIp: string;
        /**
         * 客户端端口。
         * @example `4****`
         */
        ClientPort: string;
        /**
         * 数据库名称。
         * @example `test_db`
         */
        DbName: string;
        /**
         * 用户名。
         * @example `test_user`
         */
        UserName: string;
        /**
         * SQL 类型。
         * @example `select`
         */
        SqlType: string;
        /**
         * 执行计划 ID。
         * @example `590****`
         */
        PlanId: number;
        /**
         * 期间内平均更新行数。
         * @example `10000.0`
         */
        AffectedRows: number;
        /**
         * 期间内平均返回行数。
         * @example `0.0`
         */
        ReturnRows: number;
        /**
         * 期间内平均访问分区数。
         * @example `1.0`
         */
        PartitionCount: number;
        /**
         * 结果码。
         * @example `0`
         */
        RetCode: number;
        /**
         * 期间内的最长等待事件。
         * @example `none`
         */
        WaitEvent: string;
        /**
         * 等待时间（毫秒）。
         * @example `0.0`
         */
        WaitTime: number;
        /**
         * 等待次数。
         * @example `0.0`
         */
        WaitCount: number;
        /**
         * 发送 RPC 次数。
         * @example `8.0`
         */
        RpcCount: number;
        /**
         * 计划类型。
         * @example `LOCAL`
         */
        PlanType: string;
        /**
         * 是否内部 SQL。
         * @example `false`
         */
        Inner: boolean;
        /**
         * 是否发起 RPC。
         * @example `0.0`
         */
        ExecutorRpc: boolean;
        /**
         * 是否命中执行计划。
         * @example `true`
         */
        HitPlan: boolean;
        /**
         * 响应时间（毫秒）。
         * @example `2182.66`
         */
        ElapsedTime: number;
        /**
         * CPU 时间（毫秒）。
         * @example `3377.57`
         */
        CpuTime: number;
        /**
         * 网络传输时间（毫秒）。
         * @example `0.0`
         */
        NetTime: number;
        /**
         * 网络入队时间（毫秒）。
         * @example `0.0`
         */
        NetWaitTime: number;
        /**
         * 排队时间（毫秒）。
         * @example `0.02`
         */
        QueueTime: number;
        /**
         * 语法解析时间（毫秒）。
         * @example `0.0`
         */
        DecodeTime: number;
        /**
         * 计划生成时间（毫秒）。
         * @example `0.19`
         */
        GetPlanTime: number;
        /**
         * 计划执行时间（毫秒）。
         * @example `8262.01`
         */
        ExecuteTime: number;
        /**
         * Application 事件等待时间（毫秒）。
         * @example `0.0`
         */
        ApplicationWaitTime: number;
        /**
         * Concurrency 事件等待时间（毫秒）。
         * @example `0.0`
         */
        ConcurrencyWaitTime: number;
        /**
         * UserIO 事件等待时间（毫秒）。
         * @example `0.0`
         */
        UserIoWaitTime: number;
        /**
         * Schedule 事件等待时间（毫秒）。
         * @example `0.0`
         */
        ScheduleTime: number;
        /**
         * RowCache 命中次数。
         * @example `498.0`
         */
        RowCacheHit: number;
        /**
         * BloomFilterCache 命中次数。
         * @example `0.0`
         */
        BloomFilterCacheHit: number;
        /**
         * BlockCache 命中次数。
         * @example `99279.0`
         */
        BlockCacheHit: number;
        /**
         * BlockIndexCache 命中次数
         * 磁盘读次数。
         * @example `142514.0`
         */
        BlockIndexCacheHit: number;
        /**
         * 磁盘读次数。
         * @example `96972.0`
         */
        DiskReads: number;
        /**
         * 重试次数。
         * @example `0`
         */
        RetryCount: number;
        /**
         * 是否全表扫描。
         * @example `false`
         */
        TableScan: boolean;
        /**
         * 一致性级别。
         * @example `3`
         */
        ConsistencyLevel: string;
        /**
         * Memstore 读行数。
         * @example `0`
         */
        MemstoreReadRows: number;
        /**
         * 并行度。
         * @example `0`
         */
        ExpectedWorkerCount: number;
        /**
         * SQL 实际执行线程数。
         * @example `0`
         */
        UsedWorkerCount: number;
        /**
         * Ssstore 读行数。
         * @example `986190`
         */
        SsstoreReadRows: number;
        /**
         * server  ID。
         * @example `2`
         */
        ObServerId: number;
        /**
         * 用户 ID。
         * @example `100010`
         */
        ObUserId: number;
        /**
         * 数据库 ID。
         * @example `11006111****4828`
         */
        ObDbId: number;
        /**
         * 参数化 SQL 文本。
         * @example `select a from b`
         */
        Statement: string;
        /**
         * transaction hash。
         * @example `1219****927****73791`
         */
        TransHash: string;
        FullSqlText: string;
        SqlText: string;
    }[];
}
