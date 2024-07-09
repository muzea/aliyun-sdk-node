export interface DescribeSlowSQLHistoryListResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 慢 SQL 历史列表信息。
     */
    SlowSQLHistoryList: {
        /**
         * 请求的返回结果。
         */
        List: {
            /**
             * SQLID。
             * @example `8D6E84****0B8FB1823D199E2CA1****`
             */
            SqlId: string;
            /**
             * SQL 类型。
             * @example `1`
             */
            SqlType: string;
            /**
             * 租户名称。
             * @example `pay_online`
             */
            TenantName: string;
            /**
             * 用户名。
             * @example `tester`
             */
            UserName: string;
            /**
             * 客户端 IP。
             * @example `1*2.***.1*3.***`
             */
            ClientIp: string;
            /**
             * 数据库名。
             * @example `testdb`
             */
            DbName: string;
            /**
             * 等待事件。
             * @example `mysql response wait client`
             */
            Event: string;
            /**
             * 节点 IP。
             * @example `i-bp18qljorblo8es*****`
             */
            NodeIp: string;
            /**
             * 影响行数。
             * @example `0`
             */
            AffectedRows: number;
            /**
             * BlockCache 命中次数。
             * @example `14`
             */
            BlockCacheHit: number;
            /**
             * BlockIndexCache 命中次数。
             * @example `4`
             */
            BlockIndexCacheHit: number;
            /**
             * BloomFilterCache 命中次数。
             * @example `0`
             */
            BloomFilterCacheHit: number;
            /**
             * 执行次数。
             * @example `89403`
             */
            Executions: number;
            /**
             * 失败次数。
             * @example `0`
             */
            FailTimes: number;
            /**
             * RPC 次数。
             * @example `0`
             */
            RPCCount: number;
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
             * 返回行数。
             * @example `1`
             */
            ReturnRows: number;
            /**
             * 逻辑读。
             * @example `19`
             */
            LogicalRead: number;
            /**
             * 重试次数。
             * @example `0`
             */
            RetryCount: number;
            /**
             * RowCache 命中次数。
             * @example `0`
             */
            RowCacheHit: number;
            /**
             * 物理读。
             * @example `0`
             */
            DiskRead: number;
            /**
             * 读内存行数。
             * @example `527`
             */
            MemstoreReadRowCount: number;
            /**
             * 读磁盘行数。
             * @example `43086`
             */
            SsstoreReadRowCount: number;
            /**
             * 每秒次数。
             * @example `163.0`
             */
            ExecPerSecond: number;
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
             * 内部执行时间。
             * @example `61.044`
             */
            ExecuteTime: number;
            /**
             * 队列等待。
             * @example `15.275`
             */
            QueueTime: number;
            /**
             * 并发等待。
             * @example `0.0`
             */
            ConcurrencyWaitTime: number;
            /**
             * 平均 CPU 时间。
             * @example `50.13`
             */
            CpuTime: number;
            /**
             * 解码等待。
             * @example `0.0`
             */
            DecodeTime: number;
            /**
             * 网络等待时间，单位 ms。
             * @example `0.0`
             */
            NetWaitTime: number;
            /**
             * IO 等待。
             * @example `0.0`
             */
            IOWaitTime: number;
            /**
             * 硬解析时间，单位 ms。
             * @example `0.052`
             */
            GetPlanTime: number;
            /**
             * 最大响应时间。
             * @example `260.044`
             */
            MaxElapsedTime: number;
            /**
             * 内部等待。
             * @example `10.966`
             */
            TotalWaitTime: number;
            /**
             * 调度时间。
             * @example `0.0`
             */
            ScheduleTime: number;
            /**
             * 最大 CPU 时间。
             * @example `257.967`
             */
            MaxCpuTime: number;
            /**
             * 结束时间。
             * @example `2021-12-28T02:08:18Z`
             */
            EndTimeUTCString: string;
        }[];
        /**
         * 数量。
         * @example `1`
         */
        Count: number;
    };
}
