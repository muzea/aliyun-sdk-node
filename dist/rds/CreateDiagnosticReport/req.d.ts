export interface CreateDiagnosticReportRequest {
    /**
     * 实例ID。
     * @example `rm-uf6wjk521****`
     */
    "DBInstanceId": string;
    /**
     * 用于生成诊断报告的监控数据起始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2018-06-11T15:00Z`
     */
    "StartTime": string;
    /**
     * 用于生成诊断报告的监控数据结束时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2018-06-12T15:00Z`
     */
    "EndTime": string;
}
