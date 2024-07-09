export interface DescribeSlowLogsResponse {
    /**
     * 查询结束日期。
     * @example `2011-05-30Z`
     */
    EndTime: string;
    /**
     * 查询开始日期。
     * @example `2011-05-01Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `2553A660-E4EB-4AF4-A402-8AFF70A49143`
     */
    RequestId: string;
    /**
     * 本页SQL语句个数。
     * @example `10`
     */
    PageRecordCount: number;
    /**
     * 总记录数。
     * @example `5`
     */
    TotalRecordCount: number;
    /**
     * 实例ID。
     * @example `rm-uf6wjk5****`
     */
    DBInstanceId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 数据库类型。
     * @example `MySQL`
     */
    Engine: string;
    Items: {
        /**
         * 慢日志信息列表。
         */
        SQLSlowLog: {
            /**
             * 最后一次受影响的行数（最大值）。
             * >仅SQL Server实例支持返回该参数。
             * @example `0`
             */
            MaxLastRowsAffectedCounts: number;
            /**
             * 返回的SQL行数（最大值）。
             * @example `1`
             */
            ReturnMaxRowCount: number;
            /**
             * SQL语句。
             * @example `select id,name from tb_table`
             */
            SQLText: string;
            /**
             * CPU查询时间（最大值），单位：秒。
             * >仅SQL Server实例支持返回该参数。
             * @example `0`
             */
            SQLServerMaxCpuTime: number;
            /**
             * 数据生成日期。
             * @example `2011-05-30Z`
             */
            CreateTime: string;
            /**
             * 最后一次受影响的行数（平均值）。
             * >仅SQL Server实例支持返回该参数。
             * @example `0`
             */
            AvgLastRowsAffectedCounts: number;
            /**
             * 最后一次受影响的行数（最小值）。
             * >仅SQL Server实例支持返回该参数。
             * @example `0`
             */
            MinLastRowsAffectedCounts: number;
            /**
             * 解析的SQL行数（总值）。
             * @example `1`
             */
            ParseTotalRowCounts: number;
            /**
             * 锁定时长（总值），单位：秒。
             * @example `0`
             */
            TotalLockTimes: number;
            /**
             * MySQL执行次数（总值）。
             * @example `1`
             */
            MySQLTotalExecutionCounts: number;
            /**
             * CPU查询时间（最小值），单位：秒。
             * >仅SQL Server实例支持返回该参数。
             * @example `0`
             */
            SQLServerMinCpuTime: number;
            /**
             * 慢日志统计里的SQL语句唯一标识符，可用于获取该SQL语句的慢日志明细。
             * @example `U2FsdGVk****`
             */
            SQLHASH: string;
            /**
             * I/O写次数（最小值）。
             * >仅SQL Server实例支持返回该参数。
             * @example `0`
             */
            MinIOWriteCounts: number;
            /**
             * 解析的SQL行数（最大值）。
             * @example `1`
             */
            ParseMaxRowCount: number;
            /**
             * 逻辑读次数（最大值）。
             * >仅SQL Server实例支持返回该参数。
             * @example `0`
             */
            MaxLogicalReadCounts: number;
            /**
             * MySQL执行时长（总值），单位：秒。
             * @example `1`
             */
            MySQLTotalExecutionTimes: number;
            /**
             * SQL Server执行次数（总值）。
             * @example `1`
             */
            SQLServerTotalExecutionCounts: number;
            /**
             * 返回的SQL行数（总值）。
             * @example `1`
             */
            ReturnTotalRowCounts: number;
            /**
             * 锁定时长（最大值），单位：秒。
             * @example `0`
             */
            MaxLockTime: number;
            /**
             * 锁定时长（最大值），单位：毫秒。
             * @example `1000`
             */
            MaxLockTimeMS: number;
            /**
             * 数据库名称。
             * @example `RDS_MySQL`
             */
            DBName: string;
            /**
             * 受影响的行数（最小值）。
             * >仅SQL Server实例支持返回该参数。
             * @example `0`
             */
            MinRowsAffectedCounts: number;
            /**
             * 逻辑读次数（总值）。
             * @example `1`
             */
            TotalLogicalReadCounts: number;
            /**
             * 物理读次数（总值）。
             * @example `1`
             */
            TotalPhysicalReadCounts: number;
            /**
             * 数据报表生成日期。
             * @example `2011-05-30Z`
             */
            ReportTime: string;
            /**
             * 物理读次数（最大值）。
             * >仅SQL Server实例支持返回该参数。
             * @example `0`
             */
            MaxPhysicalReadCounts: number;
            /**
             * CPU查询时间（总值），单位：秒。
             * >仅SQL Server实例支持返回该参数。
             * @example `0`
             */
            SQLServerTotalCpuTime: number;
            /**
             * I/O写次数（总值）。
             * >仅SQL Server实例支持返回该参数。
             * @example `0`
             */
            TotalIOWriteCounts: number;
            /**
             * 受影响的行数（最大值）。
             * >仅SQL Server实例支持返回该参数。
             * @example `0`
             */
            MaxRowsAffectedCounts: number;
            /**
             * I/O写次数（平均值）。
             * >仅SQL Server实例支持返回该参数。
             * @example `0`
             */
            AvgIOWriteCounts: number;
            /**
             * 物理读次数（最小值）。
             * >仅SQL Server实例支持返回该参数。
             * @example `0`
             */
            MinPhysicalReadCounts: number;
            /**
             * 慢查询汇总标识ID。
             * @example `26584213`
             */
            SlowLogId: number;
            /**
             * 执行时长（最大值），单位：秒。
             * @example `60`
             */
            MaxExecutionTime: number;
            /**
             * 执行时长（最大值），单位：毫秒。
             * @example `60000`
             */
            MaxExecutionTimeMS: number;
            /**
             * 执行时间（平均值），单位：秒。
             * >仅SQL Server实例支持返回该参数。
             * @example `1`
             */
            AvgExecutionTime: number;
            /**
             * 执行时间（平均值），单位：秒。
             * >仅SQL Server实例支持返回该参数。
             * @example `0`
             */
            SQLServerAvgExecutionTime: number;
            /**
             * I/O写次数（最大值）。
             * >仅SQL Server实例支持返回该参数。
             * @example `0`
             */
            MaxIOWriteCounts: number;
            /**
             * CPU查询时间（平均值），单位：秒。
             * >仅SQL Server实例支持返回该参数。
             * @example `0`
             */
            SQLServerAvgCpuTime: number;
            /**
             * 最后一次受影响的行数（总值）。
             * >仅SQL Server实例支持返回该参数。
             * @example `0`
             */
            TotalLastRowsAffectedCounts: number;
            /**
             * 逻辑读次数（平均值）。
             * >仅SQL Server实例支持返回该参数。
             * @example `0`
             */
            AvgLogicalReadCounts: number;
            /**
             * 执行时间（最小值），单位：秒。
             * >仅SQL Server实例支持返回该参数。
             * @example `0`
             */
            SQLServerMinExecutionTime: number;
            /**
             * 对应的是慢日志统计模版SQL的ID，现已废弃，请使用**SQLHASH**。
             * @example `521584`
             */
            SQLIdStr: string;
            /**
             * SQL Server执行时长（总值），单位：毫秒。
             * @example `1000`
             */
            SQLServerTotalExecutionTimes: number;
            /**
             * 受影响的行数（平均值）。
             * >仅SQL Server实例支持返回该参数。
             * @example `0`
             */
            AvgRowsAffectedCounts: number;
            /**
             * 影响的行数（总值）。
             * @example `0`
             */
            TotalRowsAffectedCounts: number;
            /**
             * 物理读次数（平均值）。
             * >仅SQL Server实例支持返回该参数。
             * @example `0`
             */
            AvgPhysicalReadCounts: number;
            /**
             * 逻辑读次数（最小值）。
             * >仅SQL Server实例支持返回该参数。
             * @example `0`
             */
            MinLogicalReadCounts: number;
        }[];
    };
}
