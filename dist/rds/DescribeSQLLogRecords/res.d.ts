export interface DescribeSQLLogRecordsResponse {
    /**
     * 请求ID。
     * @example `08A3B71B-FE08-4B03-974F-CC7EA6DB1828`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 本页SQL审计日志个数。
     * @example `30`
     */
    PageRecordCount: number;
    /**
     * 总记录数。
     * @example `100`
     */
    TotalRecordCount: number;
    Items: {
        /**
         * SQL审计日志列表。
         */
        SQLRecord: {
            /**
             * 连接数据库的客户端IP地址。
             * @example `192.168.XX.XX`
             */
            HostAddress: string;
            /**
             * SQL语句。
             * @example `update test.zxb set id=0 limit 1`
             */
            SQLText: string;
            /**
             * 返回记录数。
             * @example `30`
             */
            ReturnRowCounts: number;
            /**
             * 数据库名称。
             * @example `testDB`
             */
            DBName: string;
            /**
             * 执行时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2011-06-11T15:00:23Z`
             */
            ExecuteTime: string;
            /**
             * 线程ID。
             * @example `1025865428`
             */
            ThreadID: string;
            /**
             * 执行耗时，单位：微秒。
             * @example `600`
             */
            TotalExecutionTimes: number;
            /**
             * 执行操作的账号名称。
             * @example `accounttest`
             */
            AccountName: string;
        }[];
    };
}
