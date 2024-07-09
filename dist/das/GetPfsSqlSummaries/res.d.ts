export interface GetPfsSqlSummariesResponse {
    /**
     * 请求返回消息。
     * >请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `54F3DBAE-9420-511A-9C29-265E8C04****`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 总数据量。
         * @example `264`
         */
        Total: number;
        /**
         * 详细信息列表。
         */
        List: {
            /**
             * 用户ID。
             * @example `196278346919****`
             */
            UserId: string;
            /**
             * SQL模板。
             * @example `select ?`
             */
            Psql: string;
            /**
             * 实例ID。
             * @example `rm-2ze8g2am97624****`
             */
            InstanceId: string;
            /**
             * 节点ID。
             * > 对于RDS MySQL集群系列或PolarDB MySQL版数据库实例，返回此参数。
             * @example `r-x****-db-0`
             */
            NodeId: string;
            /**
             * SQL的类型。取值：
             * - **SELECT**
             * - **UPDATE**
             * - **DELETE**
             * @example `SELECT`
             */
            SqlType: string;
            /**
             * 逻辑库ID。
             * @example `58275984`
             */
            LogicId: number;
            /**
             * SQL模板ID。
             * @example `2e8147b5ca2dfc640dfd5e43d96a****`
             */
            SqlId: string;
            /**
             * 数据日期，格式为Unix时间戳，单位为毫秒。
             * @example `1643040000000`
             */
            Timestamp: number;
            /**
             * 耗时占比。
             * @example `0.1384`
             */
            RtRate: number;
            /**
             * 执行次数占比。
             * @example `0.0586`
             */
            CountRate: number;
            /**
             * 是否全表扫描。取值：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            FullScan: boolean;
            /**
             * 总执行次数。
             * @example `100000`
             */
            Count: number;
            /**
             * 错误次数。
             * @example `0`
             */
            ErrCount: number;
            /**
             * 警告次数。
             * @example `0`
             */
            WarnCount: number;
            /**
             * 总执行耗时，单位毫秒。
             * @example `60913.256`
             */
            TotalLatency: number;
            /**
             * 最大执行耗时，单位毫秒。
             * @example `36.233`
             */
            MaxLatency: number;
            /**
             * SQL平均执行耗时，单位毫秒。
             * @example `0.1717`
             */
            AvgLatency: number;
            /**
             * 返回行数。
             * @example `0`
             */
            RowsSent: number;
            /**
             * 平均发送行数。
             * @example `0`
             */
            RowsSendAvg: number;
            /**
             * 总扫描行数。
             * @example `100`
             */
            RowsExamined: number;
            /**
             * 平均扫描行数。
             * @example `0`
             */
            RowsExaminedAvg: number;
            /**
             * 影响行数。
             * @example `0`
             */
            RowsAffected: number;
            /**
             * 平均影响行数。
             * @example `0`
             */
            RowsAffectedAvg: number;
            /**
             * 临时表数量。
             * @example `0`
             */
            TmpTables: number;
            /**
             * 临时磁盘表数量。
             * @example `0`
             */
            TmpDiskTables: number;
            /**
             * 排序行数。
             * @example `0`
             */
            RowsSorted: number;
            /**
             * 排序算法必须执行的合并次数。
             * @example `0`
             */
            SortMergePasses: number;
            /**
             * 物理节点数量。
             * @example `0`
             */
            PhysicalReads: number;
            /**
             * 物理异步节点数量。
             * @example `0`
             */
            PhysicalAsyncReads: number;
            /**
             * 半同步延迟时间，单位毫秒。
             * @example `0.12`
             */
            SemisyncDelayTime: number;
            /**
             * 返回SQL句的平均行数。
             * @example `0.52`
             */
            RowsSentAvg: number;
            /**
             * 逻辑节点数。
             * @example `0`
             */
            LogicReads: number;
            /**
             * 重做节点数。
             * @example `0`
             */
            RedoWrites: number;
            /**
             * 数据写入时间，单位毫秒。
             * @example `0`
             */
            DataWriteTime: number;
            /**
             * 可写数据节点数量。
             * @example `0`
             */
            DataWrites: number;
            /**
             * 可读数据时间，单位毫秒。
             * @example `0`
             */
            DataReadTime: number;
            /**
             * 可读数据节点数量。
             * @example `0`
             */
            DataReads: number;
            /**
             * 是否开启了读写分离。取值：
             * - **0**：未开启。
             * - **1**：开启。
             * @example `0`
             */
            RwlockOsWaits: number;
            /**
             * 读写分离参数。
             * @example `0`
             */
            RwlockSpinRounds: number;
            /**
             * 是否开启多重索引扫描。取值：
             * - **0**：未开启。
             * - **1**：开启。
             * @example `0`
             */
            RwlockSpinWaits: number;
            /**
             * 互斥等待次数。
             * @example `1`
             */
            MutexWaits: number;
            /**
             * 互斥旋转次数。
             * @example `1`
             */
            MutexSpins: number;
            /**
             * 存储事务锁定时间，单位毫秒。
             * @example `0`
             */
            TransactionLockTime: number;
            /**
             * 服务器锁定时间，单位毫秒。
             * @example `0`
             */
            ServerLockTime: number;
            /**
             * CPU运行时间，单位为毫秒。
             * @example `0`
             */
            CpuTime: number;
            /**
             * 实际运行时间，单位毫秒。
             * @example `0`
             */
            ElapsedTime: number;
            /**
             * 主键ID。
             * @example `26186357`
             */
            Id: number;
            /**
             * 平均扫描数。
             * @example `0`
             */
            SelectScanAvg: number;
            /**
             * 平均选取范围。
             * @example `0`
             */
            SelectRangeAvg: number;
            /**
             * 不使用索引而执行表扫描的平均连接数。
             * ><notice>如果该参数值不为0，则应仔细检查表的索引。
             * ></notice>
             * @example `0`
             */
            SelectFullJoinAvg: number;
            /**
             * 平均范围连接数。
             * @example `0`
             */
            SelectFullRangeJoinAvg: number;
            /**
             * 平均扫描排序数。
             * @example `0`
             */
            SortScanAvg: number;
            /**
             * 平均排序行数。
             * @example `0`
             */
            SortRowsAvg: number;
            /**
             * 临时表平均数。
             * @example `0`
             */
            TmpTablesAvg: number;
            /**
             * 临时磁盘表平均数。
             * @example `0`
             */
            TmpDiskTablesAvg: number;
            /**
             * 首次执行时间，格式为unix时间戳，单位为毫秒。
             * @example `1659308149000`
             */
            FirstTime: number;
            /**
             * 最后变更时间，格式为unix时间戳，单位为毫秒。
             * @example `1661306520000`
             */
            LastTime: number;
            /**
             * 平均锁等待时间，单位毫秒。
             * @example `0`
             */
            LockLatencyAvg: number;
            /**
             * 备用参数。
             * @example `None`
             */
            TimerWaitAvg: number;
            /**
             * 使用范围排序平均次数。
             * @example `0`
             */
            SortRangeAvg: number;
            /**
             * CPU执行时间与SQL总执行时间的比值。
             * @example `0`
             */
            CpuRate: number;
            /**
             * 数据库名称。
             * @example `testDB`
             */
            Db: string;
            /**
             * 数据库表名。
             */
            Tables: string[];
        }[];
        /**
         * 页码。
         * @example `1`
         */
        PageNo: number;
        /**
         * 每页最大记录数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 备用参数。
         * @example `None`
         */
        Extra: any;
    };
    /**
     * 返回状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: boolean;
}
