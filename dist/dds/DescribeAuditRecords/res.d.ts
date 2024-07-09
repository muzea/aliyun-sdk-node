export interface DescribeAuditRecordsResponse {
    /**
     * 总记录数。
     * @example `40`
     */
    TotalRecordCount: number;
    /**
     * 当前页最大记录数。
     * @example `30`
     */
    PageRecordCount: number;
    /**
     * 请求ID。
     * @example `3278BEB8-503B-4E46-8F7E-D26E040C9769`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    Items: {
        /**
         * 审计日志详情列表。
         */
        SQLRecord: {
            /**
             * 客户端IP地址。
             * @example `11.xxx.xxx.xxx`
             */
            HostAddress: string;
            /**
             * MongoDB的集合名称。
             * @example `C1`
             */
            TableName: string;
            /**
             * 返回记录数。
             * @example `2`
             */
            ReturnRowCounts: number;
            /**
             * 数据库名。
             * @example `test123`
             */
            DBName: string;
            /**
             * 该语句执行的时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2019-03-11T03:30:27Z`
             */
            ExecuteTime: string;
            /**
             * 线程ID。
             * @example `140682188297984`
             */
            ThreadID: string;
            /**
             * 消耗时间，单位为微秒。
             * @example `700`
             */
            TotalExecutionTimes: number;
            /**
             * 执行语句。
             * @example `{ \"atype\" : \"createCollection\", \"param\" : { \"ns\" : \"123.test1\" }, \"result\": \"OK\" }`
             */
            Syntax: string;
            /**
             * 数据库账号名。
             * @example `test`
             */
            AccountName: string;
        }[];
    };
}
