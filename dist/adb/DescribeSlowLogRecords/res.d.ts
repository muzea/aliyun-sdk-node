export interface DescribeSlowLogRecordsResponse {
    /**
     * 总记录数。
     * @example `100`
     */
    TotalCount: string;
    /**
     * 本页记录数。
     * @example `30`
     */
    PageSize: string;
    /**
     * 请求ID。
     * @example `D7559209-7EC3-41E1-8F78-156990******`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: string;
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * @example `am-bp1rqvm70uh2****`
     */
    DBClusterId: string;
    Items: {
        /**
         * 慢日志明细列表。
         */
        SlowLogRecord: {
            /**
             * 连接数据库的客户端地址。
             * @example `172.16.**.**`
             */
            HostAddress: string;
            /**
             * 扫描数据总耗时，是多个TableScanNode在多个节点上的累加值，单位：毫秒（ms）。
             * @example `10`
             */
            ScanTime: number;
            /**
             * SQL语句详情。
             * @example `INSERT OVERWRITE INTO hdfs_import_external\nSELECT *\nFROM adb_hdfs_import_source`
             */
            SQLText: string;
            /**
             * 任务的输出数据量。单位：Byte。
             * @example `0.009`
             */
            OutputSize: string;
            /**
             * 执行目标SQL语句时的峰值内存，单位：KB。
             * @example `431.447`
             */
            PeakMemoryUsage: string;
            /**
             * SQL语句的执行状态。
             * @example `SUCCESSED`
             */
            State: string;
            /**
             * 查询中的所有算子在各个节点CPU Time的累加值，单位：毫秒（ms）。
             * @example `6100`
             */
            WallTime: number;
            /**
             * 扫描的数据量，单位：KB。
             * @example `0.035`
             */
            ScanSize: string;
            /**
             * 执行开始时间。格式：<i>yyyy-MM-ddTHH:mm:ssZ</i>（UTC时间）。
             * @example `2021-05-27T08:04:43Z`
             */
            ExecutionStartTime: string;
            /**
             * SQL语句执行时长，单位：毫秒（ms）。
             * @example `2344`
             */
            QueryTime: number;
            /**
             * 返回行数。
             * @example `1`
             */
            ReturnRowCounts: number;
            /**
             * 带数据源的任务的扫描数据行数。
             * @example `3`
             */
            ScanRows: number;
            /**
             * 解析行数。
             * @example `0`
             */
            ParseRowCounts: number;
            /**
             * 数据库名称。
             * @example `adb_demo`
             */
            DBName: string;
            /**
             * 执行计划生成耗时，单位：毫秒（ms）。
             * @example `12`
             */
            PlanningTime: number;
            /**
             * 查询执行前的排队时间，单位：毫秒（ms）。
             * @example `0`
             */
            QueueTime: number;
            /**
             * 用户名。
             * @example `test`
             */
            UserName: string;
            /**
             * 进程ID。
             * @example `2021052716044317201616624903453******`
             */
            ProcessID: string;
        }[];
    };
}
