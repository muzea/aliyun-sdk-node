interface DescribeRDSPerformanceRequest {
    "RegionId"?: string;
    "RdsInstanceId": string;
    "Keys": string;
    "DrdsInstanceId": string;
    "StartTime"?: number;
    "EndTime"?: number;
    "DbInstType"?: string;
}
export { DescribeRDSPerformanceRequest };