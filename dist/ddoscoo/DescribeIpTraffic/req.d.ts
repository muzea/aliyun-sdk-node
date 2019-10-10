interface DescribeIpTrafficRequest {
    "RegionId"?: string;
    "Interval": number;
    "EndTime": number;
    "Eip": string;
    "SourceIp"?: string;
    "StartTime": number;
    "ResourceGroupId"?: string;
    "Port"?: number;
    "QueryProtocol"?: string;
}
export { DescribeIpTrafficRequest };