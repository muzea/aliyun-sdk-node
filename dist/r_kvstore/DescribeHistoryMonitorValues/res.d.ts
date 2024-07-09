export interface DescribeHistoryMonitorValuesResponse {
    /**
     * 以JSON格式返回的监控信息，更多信息，请参见[监控参数说明](~~122091~~)。
     * > 为提高数据传输效率，只有非0的监控数据才会返回，其余未显示的监控数据均为默认值**0**。
     * @example `"{\"2022-11-06T00:00:00Z\":{\"memoryUsage\":\"6.67\"},\"2022-11-06T00:00:05Z\":{\"memoryUsage\":\"6.67\"},\"2022-11-06T00:00:10Z\":{\"memoryUsage\":\"6.67\"},\"2022-11-06T00:00:15Z\":{\"memoryUsage\":\"6.67\"},\"2022-11-06T00:00:20Z\":{\"memoryUsage\":\"6.67\"},\"2022-11-06T00:00:25Z\":{\"memoryUsage\":\"6.67\"}}"`
     */
    MonitorHistory: string;
    /**
     * 请求ID。
     * @example `F0997EE8-F4C2-4503-9168-85177ED7****`
     */
    RequestId: string;
}
