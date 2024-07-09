export interface DescribeOasSQLHistoryListResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-****-****-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * SQL 执行历史信息列表。
     */
    Data: {
        /**
         * SQL ID
         * @example `8D6E84****0B8FB1823D199E2CA1****`
         */
        SQLId: string;
        /**
         * 数据库名称。
         * @example `test_db`
         */
        DbName: string;
        /**
         * 期间内平均更新行数。
         * @example `9978.75`
         */
        AvgAffectedRows: number;
        /**
         * 期间内的平均 BlockCache 命中次数。
         * @example `0.0`
         */
        AvgBlockCacheHit: number;
        /**
         * 期间内的平均 BlockIndexCache 命中次数。
         * @example `0.0`
         */
        AvgBlockIndexCacheHit: number;
        /**
         * 期间内的平均 BloomFilterCache 命中次数。
         * @example `0.0`
         */
        AvgBloomFilterCacheHit: number;
        /**
         * 期间内的总执行次数。
         * @example `1`
         */
        Executions: number;
        /**
         * 期间内的总错误次数。
         * @example `0`
         */
        FailCount: number;
        /**
         * 期间内的平均发送 RPC 次数。
         * @example `8.0`
         */
        AvgRpcCount: number;
        /**
         * 远程计划数。
         * @example `0`
         */
        RemotePlans: number;
        /**
         * 未命中计划次数。
         * @example `0`
         */
        MissPlans: number;
        /**
         * 期间内平均返回行数。
         * @example `0.0`
         */
        AvgReturnRows: number;
        /**
         * 期间内平均逻辑读。
         * @example `0.0`
         */
        AvgLogicalReads: number;
        /**
         * 期间内的总计重试次数。
         * @example `0`
         */
        RetryCount: number;
        /**
         * 期间内的平均 RowCache 命中次数。
         * @example `0.0`
         */
        AvgRowCacheHit: number;
        /**
         * 期间内的平均物理读次数。
         * @example `0.0`
         */
        AvgDiskReads: number;
        /**
         * 期间内的平均 Memstore 读行数。
         * @example `0.0`
         */
        AvgMemstoreReadRows: number;
        /**
         * 期间内的平均SsStore读行数
         * @example `0.0`
         */
        AvgSsstoreReadRows: number;
        /**
         * 客户端等待期间内的平均 Application 事件等待时间（毫秒）。
         * @example `0.0`
         */
        AvgApplicationWaitTime: number;
        /**
         * 期间内的平均响应时间（毫秒）。
         * @example `1876.78`
         */
        AvgElapsedTime: number;
        /**
         * 期间内的平均计划执行时间（毫秒）。
         * @example `1895.7`
         */
        AvgExecuteTime: number;
        /**
         * 期间内的平均排队时间（毫秒）。
         * @example `0.01`
         */
        AvgQueueTime: number;
        /**
         * 期间内的平均 Concurrency 事件等待时间（毫秒）。
         * @example `0.0`
         */
        AvgConcurrencyWaitTime: number;
        /**
         * 期间内的平均 CPU 时间（毫秒）。
         * @example `1875.34`
         */
        AvgCpuTime: number;
        /**
         * 期间内的平均语法解析时间（毫秒）。
         * @example `0.0`
         */
        AvgDecodeTime: number;
        /**
         * 网络等待期间内的平均网络入队时间（毫秒）。
         * @example `0.0`
         */
        AvgNetWaitTime: number;
        /**
         * 期间内的平均 UserIO 事件等待时间（毫秒）。
         * @example `0.0`
         */
        AvgUserIoWaitTime: number;
        /**
         * 期间内的平均计划生成时间（毫秒）。
         * @example `0.0`
         */
        AvgGetPlanTime: number;
        /**
         * 最大响应时间。
         * @example `13643.3`
         */
        MaxElapsedTime: number;
        /**
         * 内部等待期间内的总等待时间（毫秒）。
         * @example `9421.73`
         */
        SumWaitTime: number;
        /**
         * 调度时间期间内的平均 Schedule 事件等待时间（毫秒）。
         * @example `0.0`
         */
        AvgScheduleTime: number;
        /**
         * 最大 CPU 时间。
         * @example `13641.9`
         */
        MaxCpuTime: number;
        /**
         * 期间内的总响应时间（毫秒）。
         * @example `11452126.36`
         */
        SumElapsedTime: number;
        /**
         * 采样时间点。
         * @example `2023-04-12T04:46:38Z`
         */
        Timestamp: string;
        /**
         * SQL 执行所在的 Server。
         * @example `i-bp1db1****8uemejio`
         */
        Server: string;
        /**
         * 用户名。
         * @example `test_user`
         */
        UserName: string;
        /**
         * 期间内平均访问分区数。
         * @example `1`
         */
        AvgPartitionCount: number;
        /**
         * 期间内的错误百分比。
         * @example `0`
         */
        FailPercentage: number;
        /**
         * 期间内结果码 4012 的发生次数。
         * @example `0`
         */
        RetCode4012Count: number;
        /**
         * 期间内结果码 4013 的发生次数。
         * @example `0`
         */
        RetCode4013Count: number;
        /**
         * 期间内结果码 5001 的发生次数。
         * @example `0`
         */
        RetCode5001Count: number;
        /**
         * 期间内结果码 5024 的发生次数。
         * @example `0`
         */
        RetCode5024Count: number;
        /**
         * 期间内结果码 5167 的发生次数。
         * @example `0`
         */
        RetCode5167Count: number;
        /**
         * 期间内结果码 5217 的发生次数。
         * @example `0`
         */
        RetCode5217Count: number;
        /**
         * 期间内结果码 6002 的发生次数。
         * @example `0`
         */
        RetCode6002Count: number;
        /**
         * 期间内的平均等待时间（毫秒）。
         * @example `1442.49`
         */
        AvgWaitTime: number;
        /**
         * 期间内的平均等待次数。
         * @example `0`
         */
        AvgWaitCount: number;
        /**
         * 期间内的本地计划百分比。
         * @example `0`
         */
        LocalPlanPercentage: number;
        /**
         * 期间内的远程计划百分比。
         * @example `0`
         */
        RemotePlanPercentage: number;
        /**
         * 期间内的分布式计划百分比。
         * @example `100`
         */
        DistPlanPercentage: number;
        /**
         * 期间内的平均网络传输时间（毫秒）。
         * @example `8`
         */
        AvgNetTime: number;
        /**
         * 期间内的平均执行 RPC 请求次数。
         * @example `0`
         */
        AvgExecutorRpcCount: number;
        /**
         * 期间内的计划命中率。
         * @example `0`
         */
        MissPlanPercentage: number;
        /**
         * 期间内的表扫描百分比。
         * @example `0`
         */
        TableScanPercentage: number;
        /**
         * 期间内的强一致性事务百分比。
         * @example `100`
         */
        StrongConsistencyPercentage: number;
        /**
         * 期间内的弱一致性事务百分比。
         * @example `0`
         */
        WeakConsistencyPercentage: number;
        /**
         * 期间内最大更新行数。
         * @example `10000`
         */
        MaxAffectedRows: number;
        /**
         * 期间内最大返回行数。
         * @example `0`
         */
        MaxReturnRows: number;
        /**
         * 期间内的最大等待时间（毫秒）。
         * @example `3.4`
         */
        MaxWaitTime: number;
        /**
         * 期间内的最大 Application 事件等待时间（毫秒）。
         * @example `0`
         */
        MaxApplicationWaitTime: number;
        /**
         * 期间内的最大 Concurrency 事件等待时间（毫秒）。
         * @example `0`
         */
        MaxConcurrencyWaitTime: number;
        /**
         * 期间内的最大 UserIO 事件等待时间（毫秒）。
         * @example `0`
         */
        MaxUserIoWaitTime: number;
        /**
         * 期间内的最大物理读次数。
         * @example `0`
         */
        MaxDiskReads: number;
        /**
         * 期间内平均并行度。
         * @example `3`
         */
        AvgExpectedWorkerCount: number;
        /**
         * 期间内 SQL 平均使用线程数。
         * @example `3`
         */
        AvgUsedWorkerCount: number;
        /**
         * 总逻辑读。
         * @example `0`
         */
        SumLogicalReads: number;
        /**
         * 期间的平均每秒执行次数。
         * @example `0.31`
         */
        ExecPs: number;
        AvgDbTime: number;
        SumDbTime: number;
    }[];
}
