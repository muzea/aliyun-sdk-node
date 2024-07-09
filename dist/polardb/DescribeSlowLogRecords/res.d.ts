export interface DescribeSlowLogRecordsResponse {
    /**
     * 总SQL语句个数。
     * @example `1`
     */
    TotalRecordCount: number;
    /**
     * 本页记录数。
     * @example `1`
     */
    PageRecordCount: number;
    /**
     * 请求ID。
     * @example `A7E6A8FD-C50B-46B2-BA85-D8B8D3******`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 集群ID。
     * @example `pc-*****************`
     */
    DBClusterId: string;
    Items: {
        /**
         * 慢日志明细列表。
         */
        SQLSlowRecord: {
            /**
             * SQL开始执行的时间。格式为`YYYY-MM-DDThh:mmZ`（UTC时间）。
             * @example `2021-04-07T03:47Z`
             */
            ExecutionStartTime: string;
            /**
             * 连接数据库的客户端地址。
             * @example `testdb[testdb] @  [100.**.**.242]`
             */
            HostAddress: string;
            /**
             * SQL执行时长，单位为秒。
             * @example `20`
             */
            QueryTimes: number;
            /**
             * 查询语句。
             * @example `/* Query from *** by user 111 *​/ SELECT sleep(20)`
             */
            SQLText: string;
            /**
             * 返回行数。
             * @example `0`
             */
            ReturnRowCounts: number;
            /**
             * 解析行数。
             * @example `0`
             */
            ParseRowCounts: number;
            /**
             * 数据库名称。
             * @example `testdb`
             */
            DBName: string;
            /**
             * SQL锁定时长，单位为秒。
             * @example `0`
             */
            LockTimes: number;
            /**
             * 节点ID。
             * @example `pi-*****************`
             */
            DBNodeId: string;
            /**
             * 查询时间。单位毫秒。
             * @example `100`
             */
            QueryTimeMS: number;
        }[];
    };
    /**
     * 数据库引擎。
     * @example `polardb_mysql`
     */
    Engine: string;
}
