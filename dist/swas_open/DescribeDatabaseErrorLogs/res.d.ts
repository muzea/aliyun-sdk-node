export interface DescribeDatabaseErrorLogsResponse {
    /**
     * 请求ID。
     * @example `30637AD6-D977-4833-A54C-CC89483E****`
     */
    RequestId: string;
    /**
     * 错误信息当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 错误信息每页行数。
     * @example `30`
     */
    PageSize: number;
    /**
     * 错误信息总条数。
     * @example `20`
     */
    TotalCount: number;
    /**
     * 错误日志信息集合。
     */
    ErrorLogs: {
        /**
         * 错误日志信息。
         * @example `spid52 DBCC TRACEON 3499, server process ID (SPID) 52. This is an informational message only; no user action is required`
         */
        ErrorInfo: string;
        /**
         * 错误日志生成时间。按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
         * > +8小时后是控制台上显示的到期时间。
         * @example `2022-09-08T12:11:04Z`
         */
        CreateTime: string;
    }[];
}
