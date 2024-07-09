export interface DescribeBenchmarkTaskReportRequest {
    /**
     * 压测任务所在地域ID。
     * @example `cn-shanghai`
     */
    "ClusterId": string;
    /**
     * 压测任务名称。如何获取压测任务名称，请参见[ListBenchmarkTask](~~432976~~)。
     * @example `benchmark-larec-test-015d`
     */
    "TaskName": string;
    /**
     * 报告类型，支持配置RAW和Report。
     * @example `report`
     */
    "ReportType"?: string;
}
