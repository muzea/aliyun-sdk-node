export interface ListPtsReportsResponse {
    /**
     * 根据条件查询到的报告总数。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `A8E4LR80-15P1-555A-9ZZF-B736AZO5E5ID`
     */
    RequestId: string;
    /**
     * 错误提示信息，若成功则为空字符串。
     * @example `空`
     */
    Message: string;
    /**
     * 每一页返回的报告数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 返回的是第N页的报告信息，N从1开始。
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
         * @example `7RLPM3Y2`
         */
        ReportId: string;
        /**
         * 消耗的VUM。
         * @example `1000`
         */
        Vum: number;
        /**
         * 压测开始时间戳，单位为ms。
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
     * true: 成功。
     * false: 失败。
     * @example `true`
     */
    Success: boolean;
}
