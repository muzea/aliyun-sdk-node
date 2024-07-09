export interface DescribeJobMetricDataRequest {
    /**
     * 作业 ID。
     * @example `job-xxxxx
    `
     */
    "JobId": string;
    /**
     * 任务名称。
     * @example `Task0
    `
     */
    "TaskName": string;
    /**
     * 作业监控项。
     * @example `cpu_utilization
    `
     */
    "MetricName": string;
    /**
     * 数组作业索引列表。
     */
    "ArrayIndex": number[];
}
