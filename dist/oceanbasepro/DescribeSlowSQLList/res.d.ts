export interface DescribeSlowSQLListResponse {
    /**
     * 总数量。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 请求 ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 慢 SQL 列表信息。
     */
    SlowSQLList: {
        /**
         * 返回数据序号。
         * @example `1`
         */
        Key: number;
        /**
         * 每秒次数。
         * @example `163.0`
         */
        ExecPerSecond: number;
        /**
         * SQL 文本。
         * @example `SELECT  ****   FROM ****   WHERE **** = ? AND **** = ?   ORDER BY **** ASC`
         */
        SQLText: string;
        /**
         * 最大 CPU 时间。
         * @example `257.967`
         */
        MaxCpuTime: number;
        /**
         * BlockCache 命中次数。
         * @example `14`
         */
        BlockCacheHit: number;
        /**
         * 解码等待。
         * @example `0.0`
         */
        DecodeTime: number;
        /**
         * 远程计划数。
         * @example `0`
         */
        RemotePlans: number;
        /**
         * RPC 次数。
         * @example `0`
         */
        RPCCount: number;
        /**
         * 网络等待。
         * @example `0.0`
         */
        NetWaitTime: number;
        /**
         * 物理读。
         * @example `0`
         */
        DiskRead: number;
        /**
         * 节点 IP。
         * @example `i-bp18qljorblo8es*****`
         */
        NodeIp: string;
        /**
         * 并发等待。
         * @example `0.0`
         */
        ConcurrencyWaitTime: number;
        /**
         * 读内存行数。
         * @example `527`
         */
        MemstoreReadRowCount: number;
        /**
         * 数据库名。
         * @example `testdb`
         */
        DbName: string;
        /**
         * 客户端等待。
         * @example `0.0`
         */
        AppWaitTime: number;
        /**
         * 平均响应时间。
         * @example `76.382`
         */
        ElapsedTime: number;
        /**
         * 未命中计划次数。
         * @example `0`
         */
        MissPlans: number;
        /**
         * 影响行数。
         * @example `0`
         */
        AffectedRows: number;
        /**
         * 调度时间。
         * @example `0.0`
         */
        ScheduleTime: number;
        /**
         * 等待事件。
         * @example `mysql response wait client`
         */
        Event: string;
        /**
         * 内部等待。
         * @example `10.966`
         */
        TotalWaitTime: number;
        /**
         * 返回行数。
         * @example `1`
         */
        ReturnRows: number;
        /**
         * 内部执行时间。
         * @example `61.044`
         */
        ExecuteTime: number;
        /**
         * 用户名。
         * @example `tester`
         */
        UserName: string;
        /**
         * 执行次数。
         * @example `89403`
         */
        Executions: number;
        /**
         * 硬解析时间。
         * @example `0.052`
         */
        GetPlanTime: number;
        /**
         * 平均 CPU 时间。
         * @example `50.13`
         */
        CpuTime: number;
        /**
         * 最大响应时间。
         * @example `260.044`
         */
        MaxElapsedTime: number;
        /**
         * SQL 类型。
         * @example `1`
         */
        SQLType: number;
        /**
         * BlockIndexCache 命中次数。
         * @example `4`
         */
        BlockIndexCacheHit: number;
        /**
         * 重试次数。
         * @example `0`
         */
        RetryCount: number;
        /**
         * SQLID。
         * @example `8D6E84****0B8FB1823D199E2CA1****`
         */
        SQLId: string;
        /**
         * 客户端 IP。
         * @example `1*2.***.1*3.***`
         */
        ClientIp: string;
        /**
         * BloomFilterCache 命中次数。
         * @example `0`
         */
        BloomFilterCacheHit: number;
        /**
         * IO 等待。
         * @example `0.0`
         */
        IOWaitTime: number;
        /**
         * 失败次数。
         * @example `0`
         */
        FailTimes: number;
        /**
         * 队列等待。
         * @example `15.275`
         */
        QueueTime: number;
        /**
         * RowCache 命中次数。
         * @example `0`
         */
        RowCacheHit: number;
        /**
         * 逻辑读。
         * @example `19`
         */
        LogicalRead: number;
        /**
         * 读磁盘行数。
         * @example `43086`
         */
        SsstoreReadRowCount: number;
    }[];
}
