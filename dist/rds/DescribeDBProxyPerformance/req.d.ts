interface DescribeDBProxyPerformanceRequest {
    "RegionId": string;
    "StartTime": string;
    "EndTime": string;
    "DBInstanceId": string;
    "MetricsName": string;
    "OwnerId"?: number;
    "DBProxyInstanceType"?: string;
}
export { DescribeDBProxyPerformanceRequest };