export interface ListJMeterReportsRequest {
    /**
     * 请求第N页的报告信息。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 请求报告数。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 需查看的报告的场景ID。
     * @example `10YPA8H`
     */
    "SceneId"?: string;
    /**
     * 报告ID。
     * @example `7R4RE352`
     */
    "ReportId"?: string;
    /**
     * 查询的起始时间，单位为ms。
     * @example `1637115303000`
     */
    "BeginTime"?: number;
    /**
     * 查询的结束时间。
     * @example `1637115306000`
     */
    "EndTime"?: number;
    /**
     * 报告关键字。
     * @example `test`
     */
    "Keyword"?: string;
}
