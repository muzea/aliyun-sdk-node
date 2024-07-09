export interface DescribeAuditRecordsResponse {
    /**
     * 查询结束时间。
     * @example `2019-03-25T12:10:00Z`
     */
    EndTime: string;
    /**
     * 查询开始时间。
     * @example `2019-03-24T12:10:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `9F5EB478-824E-4AC4-8D2B-58F31A02****`
     */
    RequestId: string;
    /**
     * 实例名称。
     * @example `r-bp1zxszhcgatnx****`
     */
    InstanceName: string;
    /**
     * 总记录数。
     * @example `22222`
     */
    TotalRecordCount: number;
    /**
     * 当前显示的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页显示的最大记录数。
     * @example `30`
     */
    PageSize: number;
    Items: {
        /**
         * 由审计日志组成的集合。
         */
        SQL: {
            /**
             * 客户端地址。
             * @example `127.0.0.1`
             */
            HostAddress: string;
            /**
             * 命令记录。
             * @example `CONFIG GET maxmemory`
             */
            SQLText: string;
            /**
             * 数据库名称。
             * @example `demo`
             */
            DatabaseName: string;
            /**
             * 命令类型。
             * @example `non_read_write`
             */
            SQLType: string;
            /**
             * 执行时间。
             * @example `2019-03-25T03:22:08Z`
             */
            ExecuteTime: string;
            /**
             * 执行消耗时间。
             * @example `0`
             */
            TotalExecutionTimes: string;
            /**
             * 节点ID。
             * > 实例为集群或读写分离架构时，本参数才会返回具体的节点ID。
             * @example `r-bp1zxszhcgatnx****-db-0`
             */
            NodeId: string;
            /**
             * 账号名称。
             * @example `demo`
             */
            AccountName: string;
            /**
             * IP地址。
             * @example `192.16.100.***`
             */
            IPAddress: string;
        }[];
    };
}
