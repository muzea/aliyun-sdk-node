export interface ListJMeterReportsResponse {
    /**
     * 按条件查询到的报告总数。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `A8E16480-15C1-555A-922F-B736A005E52D`
     */
    RequestId: string;
    /**
     * 错误提示信息，若成功则为空。
     * @example `空`
     */
    Message: string;
    /**
     * 返回报告数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 返回第N页的报告信息。
     * @example `1`
     */
    PageNumber: number;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 报告信息。
     */
    Reports: {
        /**
         * 报告名称。
         * @example `test`
         */
        ReportName: string;
        /**
         * 压测持续时间。
         * @example `10分钟`
         */
        Duration: string;
        /**
         * 报告ID。
         * @example `7R4RE352`
         */
        ReportId: string;
        /**
         * 消耗的VUM。
         * @example `1000`
         */
        Vum: number;
        /**
         * 压测开始时间。
         * @example `1637157073000`
         */
        ActualStartTime: number;
    }[];
    /**
     * 系统状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
}
