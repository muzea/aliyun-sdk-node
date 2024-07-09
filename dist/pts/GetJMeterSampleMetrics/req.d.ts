export interface GetJMeterSampleMetricsRequest {
    /**
     * 报告ID。
     * @example `7R4RE352`
     */
    "ReportId": string;
    /**
     * 开始时间。
     * @example `1637157070000`
     */
    "BeginTime"?: number;
    /**
     * 结束时间。
     * @example `1637157073000`
     */
    "EndTime"?: number;
    /**
     * 采样器索引。从0开始，-1返回全场景。
     * @example `0`
     */
    "SamplerId"?: number;
}
