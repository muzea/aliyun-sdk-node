export interface DescribeSlowLogsResponse {
    /**
     * 总记录数。
     * @example `5`
     */
    TotalRecordCount: number;
    /**
     * 本页SQL语句个数。
     * @example `6`
     */
    PageRecordCount: number;
    /**
     * 查询结束日期。
     * @example `2021-05-30Z`
     */
    EndTime: string;
    /**
     * 请求ID。
     * @example `2553A660-E4EB-4AF4-A402-8AFF70A49143`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `3`
     */
    PageNumber: number;
    /**
     * 查询开始日期。
     * @example `2021-05-01Z`
     */
    StartTime: string;
    /**
     * 集群ID。
     * @example `pc-****************`
     */
    DBClusterId: string;
    Items: {
        /**
         * 慢日志信息列表。
         */
        SQLSlowLog: {
            /**
             * SQL语句。
             * @example `select id,name from tb_table`
             */
            SQLText: string;
            /**
             * 返回的SQL行数（最大值）。
             * @example `3`
             */
            ReturnMaxRowCount: number;
            /**
             * 数据生成日期。
             * @example `2021-05-30Z`
             */
            CreateTime: string;
            /**
             * 执行时长（最大值），单位：秒。
             * @example `60`
             */
            MaxExecutionTime: number;
            /**
             * 解析的SQL行数（总值）。
             * @example `2`
             */
            ParseTotalRowCounts: number;
            /**
             * 锁定时长（总值），单位：秒。
             * @example `1`
             */
            TotalLockTimes: number;
            /**
             * 执行时长（总值），单位：秒。
             * @example `2`
             */
            TotalExecutionTimes: number;
            /**
             * 节点ID。
             * @example `pi-***************`
             */
            DBNodeId: string;
            /**
             * 慢日志统计里的SQL语句唯一标识符，可用于获取该SQL语句的慢日志明细。
             * @example `U2FsdGVkxxxx`
             */
            SQLHASH: string;
            /**
             * 解析的SQL行数（最大值）。
             * @example `1`
             */
            ParseMaxRowCount: number;
            /**
             * 锁定时长（最大值），单位：秒。
             * @example `1`
             */
            MaxLockTime: number;
            /**
             * 返回的SQL行数（总值）。
             * @example `1`
             */
            ReturnTotalRowCounts: number;
            /**
             * 数据库名称。
             * @example `PolarDB_MySQL`
             */
            DBName: string;
            /**
             * 执行次数（总值）。
             * @example `2`
             */
            TotalExecutionCounts: number;
        }[];
    };
    /**
     * 数据库引擎。
     * @example `polardb_mysql`
     */
    Engine: string;
}
