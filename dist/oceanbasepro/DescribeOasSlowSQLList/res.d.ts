export interface DescribeOasSlowSQLListResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-****-****-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 慢 SQL 信息列表。
     */
    Data: {
        /**
         * SQL 执行次数。
         * @example `100`
         */
        Executions: number;
        /**
         * 期间的 RPC 次数。
         * @example `0`
         */
        RpcCount: number;
        /**
         * 期间的远程执行次数。
         * @example `0`
         */
        RemotePlans: number;
        /**
         * 期间未命中执行计划的次数。
         * @example `0`
         */
        MissPlans: number;
        /**
         * 期间最大响应时间。
         * @example `260.044`
         */
        MaxElapsedTime: number;
        /**
         * 期间总等待时间。
         * @example `10.966`
         */
        TotalWaitTime: number;
        /**
         * 期间的平均每秒执行次数。
         * @example `0.31`
         */
        ExecPs: number;
        /**
         * 最大 CPU 时间。
         * @example `257.967`
         */
        MaxCpuTime: number;
        /**
         * 客户端 IP。
         * @example `1*2.***.1*3.***`
         */
        ClientIp: string;
        /**
         * 用户名。
         * @example `test_user`
         */
        UserName: string;
        /**
         * 数据库名。
         * @example `test_db`
         */
        DbName: string;
        /**
         * 错误码 4012 出现次数。
         * @example `0`
         */
        RetCode4012Count: number;
        /**
         * 错误码 4013 出现次数。
         * @example `0`
         */
        RetCode4013Count: number;
        /**
         * 错误码 5001 出现次数。
         * @example `0`
         */
        RetCode5001Count: number;
        /**
         * 错误码 5024 出现次数。
         * @example `0`
         */
        RetCode5024Count: number;
        /**
         * 错误码 5167 出现次数。
         * @example `0`
         */
        RetCode5167Count: number;
        /**
         * 错误码 5217 出现次数。
         * @example `0`
         */
        RetCode5217Count: number;
        /**
         * 错误码 6002 出现次数。
         * @example `0`
         */
        RetCode6002Count: number;
        /**
         * SQL 执行错误率。
         * @example `0.0`
         */
        FailPercentage: number;
        /**
         * SQL 最大等待事件的等待时间（毫秒）。
         * @example `9421.73`
         */
        SumWaitTime: number;
        /**
         * SQL 平均等待次数。
         * @example `0.0`
         */
        AvgWaitCount: number;
        /**
         * SQL 平均 RPC 次数。
         * @example `8.0`
         */
        AvgRpcCount: number;
        /**
         * SQL Local 计划比例。
         * @example `0.0`
         */
        LocalPlanPercentage: number;
        /**
         * SQL Remote 计划比例。
         * @example `0.0`
         */
        RemotePlanPercentage: number;
        /**
         * SQLDistributed 计划比例。
         * @example `100.0`
         */
        DistPlanPercentage: number;
        /**
         * SQL 总响应时间（毫秒）。
         * @example `11452126.36`
         */
        SumElapsedTime: number;
        /**
         * SQL 平均网络 IO 时间（毫秒）。
         * @example `0.0`
         */
        AvgNetTime: number;
        /**
         * SQL 远程执行次数， 对应 v$sl_audit.executor_rpc。
         * @example `0.0`
         */
        AvgExecutorRpcCount: number;
        /**
         * SQL 未命中计划比例。
         * @example `0.0`
         */
        MissPlanPercentage: number;
        /**
         * SQL 全表扫描比率。
         * @example `0.0`
         */
        TableScanPercentage: number;
        /**
         * SQL 强读比例。
         * @example `100.0`
         */
        StrongConsistencyPercentage: number;
        /**
         * SQL 弱读比例。
         * @example `0.0`
         */
        WeakConsistencyPercentage: number;
        /**
         * SQL 最大影响行数。
         * @example `10000.0`
         */
        MaxAffectedRows: number;
        /**
         * SQL 最大返回行数。
         * @example `0.0`
         */
        MaxReturnRows: number;
        /**
         * SQL 最大等待时间（毫秒）。
         * @example `3.4`
         */
        MaxWaitTime: number;
        /**
         * SQL 最大应用等待时间（毫秒）。
         * @example `0.0`
         */
        MaxApplicationWaitTime: number;
        /**
         * SQL 最大并发等待时间（毫秒）。
         * @example `0.0`
         */
        MaxConcurrencyWaitTime: number;
        /**
         * SQL 最大 IO 等待时间（毫秒）。
         * @example `0.0`
         */
        MaxUserIoWaitTime: number;
        /**
         * 最大磁盘读次数。
         * @example `0.0`
         */
        MaxDiskReads: number;
        /**
         * 预期并发数。
         * @example `3`
         */
        AvgExpectedWorkerCount: number;
        /**
         * 平均使用线程数。
         * @example `3`
         */
        AvgUsedWorkerCount: number;
        /**
         * 总逻辑读。
         * @example `0.0`
         */
        SumLogicalReads: number;
        /**
         * OBServer
         * @example `i-bp1db1a**s038**mej**`
         */
        Server: string;
        /**
         * OBServerIp
         * @example `i-bp1db1a**s038**mej**`
         */
        ServerIp: string;
        /**
         * OBServer Port
         * @example `10110`
         */
        ServerPort: number;
        /**
         * SQL 文本（前 100 字符）。
         * @example `select a from b where`
         */
        SqlTextShort: string;
        /**
         * SQL 类型。
         * @example `select `
         */
        SqlType: string;
        /**
         * SQL ID。
         * @example `8D6E84****0B8FB1823D199E2CA1****`
         */
        SqlId: string;
        /**
         * 是否为内部 SQL。
         * @example `false`
         */
        Inner: boolean;
        /**
         * 最长等待事件。
         * @example `none`
         */
        WaitEvent: string;
        /**
         * 平均影响行数。
         * @example `9978.75`
         */
        AvgAffectedRows: number;
        /**
         * 平均返回行数。
         * @example `0.0`
         */
        AvgReturnRows: number;
        /**
         * 平均访问分区数。
         * @example `1.0`
         */
        AvgPartitionCount: number;
        /**
         * 执行出错次数。
         * @example `0`
         */
        FailCount: number;
        /**
         * 平均等待时间（毫秒）。
         * @example `1.42`
         */
        AvgWaitTime: number;
        /**
         * 平均响应时间（毫秒）。
         * @example `1876.78`
         */
        AvgElapsedTime: number;
        /**
         * 平均 CPU 时间（毫秒）。
         * @example `1875.34`
         */
        AvgCpuTime: number;
        /**
         * 平均网络时间（毫秒）。
         * @example `0.0`
         */
        AvgNetWaitTime: number;
        /**
         * 平均排队时间（毫秒）。
         * @example `0.01`
         */
        AvgQueueTime: number;
        /**
         * 平均解析时间（毫秒）。
         * @example `0.0`
         */
        AvgDecodeTime: number;
        /**
         * 获取执行计划的平均时间（毫秒）。
         * @example `0.0`
         */
        AvgGetPlanTime: number;
        /**
         * SQL 平均执行时间（毫秒）。
         * @example `1895.7`
         */
        AvgExecuteTime: number;
        /**
         * 平均应用等待时间（毫秒）。
         * @example `0.0`
         */
        AvgApplicationWaitTime: number;
        /**
         * 平均应用等待时间（毫秒）。
         * @example `0.0`
         */
        AvgConcurrencyWaitTime: number;
        /**
         * 平均用户 IO 时间（毫秒）。
         * @example `0.0`
         */
        AvgUserIoWaitTime: number;
        /**
         * 平均调度时间（毫秒）。
         * @example `0.0`
         */
        AvgScheduleTime: number;
        /**
         * 平均 Row Cache 命中数。
         * @example `0.0`
         */
        AvgRowCacheHit: number;
        /**
         * 平均 Bloom Filter Cache 命中数。
         * @example `0.0`
         */
        AvgBloomFilterCacheHit: number;
        /**
         * 平均 Block Cache 命中数。
         * @example `0.0`
         */
        AvgBlockCacheHit: number;
        /**
         * 平均 Block Index Cache 命中数。
         * @example `0.0`
         */
        AvgBlockIndexCacheHit: number;
        /**
         * 平均磁盘读次数。
         * @example `0.0`
         */
        AvgDiskReads: number;
        /**
         * 重试次数。
         * @example `5`
         */
        RetryCount: number;
        /**
         * 平均 Memstore 读行数。
         * @example `0.0`
         */
        AvgMemstoreReadRows: number;
        /**
         * 平均 SSTable读行数。
         * @example `0.0`
         */
        AvgSsstoreReadRows: number;
        /**
         * 平均逻辑读。
         * @example `0.0`
         */
        AvgLogicalReads: number;
        /**
         * 是否动态 SQL。
         * @example `false`
         */
        DynamicSql: boolean;
        /**
         * SQL 列表。
         */
        SqlList: {
            /**
             * 期间的总执行次数。
             * @example `100`
             */
            Executions: number;
            /**
             * SQL 总 RPC 次数。
             * @example `100`
             */
            RpcCount: number;
            /**
             * SQL 远程执行次数。
             * @example `100`
             */
            RemotePlans: number;
            /**
             * SQL 未命中计划缓存次数。
             * @example `100`
             */
            MissPlans: number;
            /**
             * SQL 最大响应时间。
             * @example `10000`
             */
            MaxElapsedTime: number;
            /**
             * SQL 执行时，总等待时间（单位：ms），对应 v$sql_audit.total_wait_time_micro（单位：us）。
             * @example `100000`
             */
            TotalWaitTime: number;
            /**
             * SQL 执行频率。
             * @example `0.31`
             */
            ExecPs: number;
            /**
             * SQL 最大 CPU 时间。
             * @example `257.967`
             */
            MaxCpuTime: number;
            /**
             * 客户端 IP。
             * @example `127.0.0.1`
             */
            ClientIp: string;
            /**
             * 用户名。
             * @example `admin`
             */
            UserName: string;
            /**
             * 数据库名。
             * @example `test`
             */
            DbName: string;
            /**
             * 错误码 4012 出现次数。
             * @example `0`
             */
            RetCode4012Count: number;
            /**
             * 错误码 4013 出现次数。
             * @example `0`
             */
            RetCode4013Count: number;
            /**
             * 错误码 5001 出现次数。
             * @example `0`
             */
            RetCode5001Count: number;
            /**
             * 错误码 5024 出现次数。
             * @example `0`
             */
            RetCode5024Count: number;
            /**
             * 错误码 5167 出现次数。
             * @example `0`
             */
            RetCode5167Count: number;
            /**
             * 错误码 5217 出现次数。
             * @example `0`
             */
            RetCode5217Count: number;
            /**
             * 错误码 6002 出现次数。
             * @example `0`
             */
            RetCode6002Count: number;
            /**
             * SQL 执行错误率。
             * @example `0`
             */
            FailPercentage: number;
            /**
             * SQL 最大等待事件的等待时间（毫秒）。
             * @example `9421.73`
             */
            SumWaitTime: number;
            /**
             * SQL 平均等待时间（毫秒）。
             * @example `0`
             */
            AvgWaitCount: number;
            /**
             * SQL 平均 RPC 次数。
             * @example `0`
             */
            AvgRpcCount: number;
            /**
             * SQL Local 计划比例。
             * @example `0`
             */
            LocalPlanPercentage: number;
            /**
             * SQL Remote 计划比例。
             * @example `0`
             */
            RemotePlanPercentage: number;
            /**
             * SQLDistributed 计划比例。
             * @example `100`
             */
            DistPlanPercentage: number;
            /**
             * SQL 总响应时间（毫秒）。
             * @example `11452126.36`
             */
            SumElapsedTime: number;
            /**
             * SQL 平均网络 IO 时间（毫秒）。
             * @example `0`
             */
            AvgNetTime: number;
            /**
             * SQL 远程执行次数， 对应 v$sl_audit.executor_rpc。
             * @example `0`
             */
            AvgExecutorRpcCount: number;
            /**
             * SQL 未命中计划比例。
             * @example `0`
             */
            MissPlanPercentage: number;
            /**
             * SQL 全表扫描比率。
             * @example `0`
             */
            TableScanPercentage: number;
            /**
             * SQL 强读比例。
             * @example `100`
             */
            StrongConsistencyPercentage: number;
            /**
             * SQL 弱读比例。
             * @example `0`
             */
            WeakConsistencyPercentage: number;
            /**
             * SQL 最大影响行数。
             * @example `10000`
             */
            MaxAffectedRows: number;
            /**
             * SQL 最大返回行数。
             * @example `0`
             */
            MaxReturnRows: number;
            /**
             * SQL 最大等待时间（毫秒）。
             * @example `3.4`
             */
            MaxWaitTime: number;
            /**
             * SQL 最大应用等待时间（毫秒）。
             * @example `0`
             */
            MaxApplicationWaitTime: number;
            /**
             * SQL 最大并发等待时间（毫秒）。
             * @example `0`
             */
            MaxConcurrencyWaitTime: number;
            /**
             * SQL 最大 IO 等待时间（毫秒）。
             * @example `0`
             */
            MaxUserIoWaitTime: number;
            /**
             * 最大磁盘读次数。
             * @example `0`
             */
            MaxDiskReads: number;
            /**
             * 预期并发数。
             * @example `3`
             */
            AvgExpectedWorkerCount: number;
            /**
             * 使用并发数。
             * @example `3`
             */
            AvgUsedWorkerCount: number;
            /**
             * 总逻辑读。
             * @example `0`
             */
            SumLogicalReads: number;
            /**
             * OBServer
             * @example `10.**.**.6`
             */
            Server: string;
            /**
             * OBServer IP
             * @example `11.***.**.69`
             */
            ServerIp: string;
            /**
             * OBServer port
             * @example `389`
             */
            ServerPort: number;
            /**
             * SQL 文本（前100字符）。
             * @example `select * from test`
             */
            SqlTextShort: string;
            /**
             * SQL 类型。
             * @example `SELECT`
             */
            SqlType: string;
            /**
             * SQL ID
             * @example `4CE89****8536A03374DD2****E76DE5`
             */
            SqlId: string;
            /**
             * 是否是内部 SQL。
             * @example `false`
             */
            Inner: boolean;
            /**
             * 最长等待事件。
             * @example `none`
             */
            WaitEvent: string;
            /**
             * 平均影响行数。
             * @example `9978.75`
             */
            AvgAffectedRows: number;
            /**
             * 平均返回行数。
             * @example `0`
             */
            AvgReturnRows: number;
            /**
             * 平均访问分区数。
             * @example `1`
             */
            AvgPartitionCount: number;
            /**
             * 执行出错次数。
             * @example `22`
             */
            FailCount: number;
            /**
             * 平均等待时间（毫秒）。
             * @example `1.42`
             */
            AvgWaitTime: number;
            /**
             * 平均响应时间（毫秒）。
             * @example `1876.78`
             */
            AvgElapsedTime: number;
            /**
             * 平均 CPU 时间（毫秒）。
             * @example `@avgCpuTime > 20 and @executions > 100`
             */
            AvgCpuTime: number;
            /**
             * 平均网络时间（毫秒）。
             * @example `0`
             */
            AvgNetWaitTime: number;
            /**
             * 平均排队时间（毫秒）。
             * @example `0.01`
             */
            AvgQueueTime: number;
            /**
             * 平均语法解析时间（毫秒）。
             * @example `0`
             */
            AvgDecodeTime: number;
            /**
             * 平均计划生成时间（毫秒）。
             * @example `0`
             */
            AvgGetPlanTime: number;
            /**
             * 平均计划执行时间（毫秒）。
             * @example `1895.7`
             */
            AvgExecuteTime: number;
            /**
             * 平均应用等待时间（毫秒）。
             * @example `0`
             */
            AvgApplicationWaitTime: number;
            /**
             * 平均并发等待时间（毫秒）
             * @example `0`
             */
            AvgConcurrencyWaitTime: number;
            /**
             * 平均用户 IO 时间（毫秒）。
             * @example `0`
             */
            AvgUserIoWaitTime: number;
            /**
             * 平均调度时间（毫秒）。
             * @example `0`
             */
            AvgScheduleTime: number;
            /**
             * 平均 Row Cache 命中次数。
             * @example `0`
             */
            AvgRowCacheHit: number;
            /**
             * 平均 Bloom Filter Cache 命中次数。
             * @example `0`
             */
            AvgBloomFilterCacheHit: number;
            /**
             * 平均 Block Cache 命中次数。
             * @example `0`
             */
            AvgBlockCacheHit: number;
            /**
             * 平均 Block Index Cache 命中次数。
             * @example `0`
             */
            AvgBlockIndexCacheHit: number;
            /**
             * 平均磁盘读次数。
             * @example `0`
             */
            AvgDiskReads: number;
            /**
             * 重试次数。
             * @example `2`
             */
            RetryCount: number;
            /**
             * 平均 Memstore 读行数。
             * @example `0`
             */
            AvgMemstoreReadRows: number;
            /**
             * 平均 SSTable 读行数。
             * @example `0`
             */
            AvgSsstoreReadRows: number;
            /**
             * 平均逻辑读。
             * @example `0`
             */
            AvgLogicalReads: number;
            /**
             * 平均数据库时间（毫秒）。
             * @example `100`
             */
            AvgDbTime: number;
            /**
             * 总数据库时间（毫秒）。
             * @example `100`
             */
            SumDbTime: number;
        }[];
        /**
         * 平均数据库时间（毫秒）。
         * @example `100`
         */
        AvgDbTime: number;
        /**
         * 总数据库时间（毫秒）。
         * @example `100`
         */
        SumDbTime: number;
    }[];
}
