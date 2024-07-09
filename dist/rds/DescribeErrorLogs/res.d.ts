export interface DescribeErrorLogsResponse {
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `98504E07-BB0E-40FC-B152-E4882615812C`
     */
    RequestId: string;
    /**
     * 本页错误日志个数。
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
         * 错误日志明细列表。
         */
        ErrorLog: {
            /**
             * 错误日志生成时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2011-05-30T12:11:04Z`
             */
            CreateTime: string;
            /**
             * 错误日志信息。
             * @example `spid52 DBCC TRACEON 3499, server process ID (SPID) 52. This is an informational message only; no user action is required`
             */
            ErrorInfo: string;
        }[];
    };
}
