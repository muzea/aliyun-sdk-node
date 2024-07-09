export interface DescribeSlowLogRecordsResponse {
    /**
     * 本页SQL语句个数。
     * @example `1`
     */
    PageRecordCount: number;
    /**
     * 请求ID。
     * @example `4DBB1BB0-E5D8-4D41-B1C9-142364DB****`
     */
    RequestId: string;
    /**
     * 总记录数。
     * @example `1`
     */
    TotalRecordCount: number;
    /**
     * 实例ID。
     * @example `rm-uf6wjk5****`
     */
    DBInstanceId: string;
    /**
     * 数据库类型。
     * @example `MySQL`
     */
    Engine: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    Items: {
        /**
         * 慢日志明细列表。
         */
        SQLSlowRecord: {
            /**
             * 连接数据库的客户端名称及地址。
             * @example `****[****] @  [1XX.XX.XX.XX]`
             */
            HostAddress: string;
            /**
             * 影响行数。
             * >仅SQL Server实例支持。
             * @example `34`
             */
            RowsAffectedCount: number;
            /**
             * 执行时长。单位：秒（s）。
             * > 对于SQL Server，该参数的单位为毫秒（ms）。
             * @example `2`
             */
            QueryTimes: number;
            /**
             * SQL命令详情。
             * @example `select sleep(2)`
             */
            SQLText: string;
            /**
             * CPU处理时长。单位：毫秒（ms）。
             * >仅SQL Server实例支持。
             * @example `0.002`
             */
            CpuTime: number;
            /**
             * 执行时长。单位：毫秒（ms）。
             * > 对于SQL Server，该参数的单位为微秒（μs）。
             * @example `2001`
             */
            QueryTimeMS: number;
            /**
             * 连接的应用名称。
             * >仅SQL Server实例支持。
             * @example `example`
             */
            ApplicationName: string;
            /**
             * 锁定时长。单位：秒（s）。
             * @example `0`
             */
            LockTimes: number;
            /**
             * 执行开始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2020-06-18T01:40:44Z`
             */
            ExecutionStartTime: string;
            /**
             * 逻辑读次数。
             * >仅SQL Server实例支持。
             * @example `383`
             */
            LogicalIORead: number;
            /**
             * I/O写入次数。
             * >仅SQL Server实例支持。
             * @example `22`
             */
            WriteIOCount: number;
            /**
             * 物理读次数。
             * >仅SQL Server实例支持。
             * @example `200`
             */
            PhysicalIORead: number;
            /**
             * 返回行数。
             * @example `1`
             */
            ReturnRowCounts: number;
            /**
             * 解析行数。
             * @example `1`
             */
            ParseRowCounts: number;
            /**
             * 数据库名称。
             * @example `testDB`
             */
            DBName: string;
            /**
             * 客户端主机名。
             * >仅SQL Server实例支持。
             * @example `example`
             */
            ClientHostName: string;
            /**
             * 用户名。
             * >仅SQL Server实例支持。
             * @example `user`
             */
            UserName: string;
            /**
             * 最后一条语句的影响行数。
             * >仅SQL Server实例支持。
             * @example `2`
             */
            LastRowsAffectedCount: number;
            /**
             * 慢日志明细里的SQL语句唯一标识符。
             * @example `U2FsdGVk****`
             */
            SQLHash: string;
        }[];
    };
}
