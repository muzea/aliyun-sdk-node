export interface DescribeSlowLogRecordsResponse {
    /**
     *  总记录数。
     * @example `1`
     */
    TotalRecordCount: number;
    /**
     * 本页慢操作日志明细的个数。
     * @example `1`
     */
    PageRecordCount: number;
    /**
     * 请求ID。
     * @example `8076C4BA-DDBD-529C-BFF4-D8620C3F****`
     */
    RequestId: string;
    /**
     * 页码，取值为大于0且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    PageNumber: number;
    Items: {
        /**
         * 慢日志明细列表。
         */
        LogRecords: {
            /**
             * 操作执行的开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2019-02-25T 01:41:28Z`
             */
            ExecutionStartTime: string;
            /**
             * 连接数据库的主机地址。
             * @example `192.168.XX.XX`
             */
            HostAddress: string;
            /**
             * 该语句的执行时长，单位为毫秒。
             * @example `600`
             */
            QueryTimes: string;
            /**
             * MongoDB的集合名称。
             * @example `C1`
             */
            TableName: string;
            /**
             * 慢操作执行的语句。
             * @example `{\"op\":\"query\",\"ns\":\"mongodbtest.customer\",\"query\":{\"find\":\"customer\",\"filter\":{\"name\":\"jack\"}}}`
             */
            SQLText: string;
            /**
             * 返回行数。
             * @example `0`
             */
            ReturnRowCounts: number;
            /**
             * 索引扫描行数。
             * @example `0`
             */
            KeysExamined: number;
            /**
             * 数据库名。
             * @example `mongodbtest`
             */
            DBName: string;
            /**
             * 该操作执行时扫描的文档数。
             * @example `1000000`
             */
            DocsExamined: number;
            /**
             * 执行该操作的数据库用户名。
             * @example `test`
             */
            AccountName: string;
        }[];
    };
    /**
     * 当前数据库的引擎类型。
     * @example `MongoDB`
     */
    Engine: string;
}
