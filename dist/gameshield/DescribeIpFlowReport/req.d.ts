interface DescribeIpFlowReportRequest {
    "RegionId"?: string;
    "Ip": string;
    "EndTime": number;
    "Interval": number;
    "StartTime": number;
    "SourceIp"?: string;
    "FPort"?: number;
    "ProtocolEx"?: number;
}
export { DescribeIpFlowReportRequest };