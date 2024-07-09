export interface DescribeJobMetricDataResponse {
    /**
     * 请求 ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE7****
    `
     */
    RequestId: string;
    /**
     * 监控数据的统计周期。取值：15、60、900 和 3600。单位：秒。
     * @example `15`
     */
    Period: number;
    /**
     * 监控统计数据点。
     * @example `[{"timestamp":1709540685000,"Minimum":28.45,"Maximum":28.45,"Average":28.45}]
    `
     */
    DataPoints: string;
}
