export interface ListPtsReportsRequest {
    /**
     * 请求第N页的报告信息，N从1开始。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页请求的报告数。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 要查看的报告的场景ID。
     * @example `1PDAL8H`
     */
    "SceneId"?: string;
    /**
     * 报告ID。
     * @example `7RLPM3Y2`
     */
    "ReportId"?: string;
    /**
     * 报告的起始时间戳，单位为ms。
     * @example `1637115303000`
     */
    "BeginTime"?: number;
    /**
     * 报告的结束时间戳，单位为ms。
     * @example `1637115306000`
     */
    "EndTime"?: number;
    /**
     * 报告关键字。
     * @example `test`
     */
    "Keyword"?: string;
}
