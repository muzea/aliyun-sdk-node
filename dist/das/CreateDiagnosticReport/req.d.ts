export interface CreateDiagnosticReportRequest {
    /**
     * 实例ID。
     * @example `rm-2ze8g2am97624****`
     */
    "DBInstanceId": string;
    /**
     * 创建任务开始时间，格式为Unix时间戳（UTC时间），单位为毫秒。
     * @example `1596177993000`
     */
    "StartTime": string;
    /**
     * 创建任务结束时间，格式为Unix时间戳（UTC时间），单位为毫秒。
     * >创建任务结束时间需晚于创建任务开始时间。
     * @example `1596177993001`
     */
    "EndTime": string;
}
