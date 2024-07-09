export interface DescribeDBInstanceErrorLogResponse {
    /**
     * 请求ID。
     * @example `B4CAF581-2AC7-41AD-8940-D56DF7AADF5B`
     */
    RequestId: string;
    /**
     * 总记录数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 当前页码.
     * @example `1`
     */
    PageNumber: number;
    /**
     * 错误日志列表。
     */
    Items: {
        /**
         * 日志发生的时间点（UTC时间）。
         * @example `2022-04-24 11:28:14`
         */
        Time: number;
        /**
         * 采集到的日志的级别。
         * @example `FATAL`
         */
        LogLevel: string;
        /**
         * 用户名。
         * @example `adbpguser`
         */
        User: string;
        /**
         * 数据库名称。
         * @example `adbtest`
         */
        Database: string;
        /**
         * 暂不支持该参数。
         * @example `null`
         */
        Host: string;
        /**
         * 错误日志内容。
         * @example `unsupported frontend protocol 2689.28208: server supports 1.0 to 3.0`
         */
        LogContext: string;
    }[];
}
