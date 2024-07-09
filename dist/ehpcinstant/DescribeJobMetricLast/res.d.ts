export interface DescribeJobMetricLastResponse {
    /**
     * 请求 ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE7****
    `
     */
    RequestId: string;
    /**
     * JobMetric 信息详情列表。
     */
    Metrics: {
        /**
         * 数组作业索引。
         * @example `1`
         */
        ArrayIndex: number;
        /**
         * 数组作业索引对应的监控项信息。
         * @example `{"memory_utilization": 37.42,"cpu_utilization": 1.008, "disk_utilization": 3.562}
        `
         */
        Metric: string;
    }[];
}
