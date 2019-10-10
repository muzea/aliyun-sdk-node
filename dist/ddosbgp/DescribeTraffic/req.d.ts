interface DescribeTrafficRequest {
    "RegionId"?: string;
    "StartTime": number;
    "EndTime": number;
    "Interval": number;
    "SourceIp"?: string;
    "InstanceId"?: string;
    "Ip"?: string;
    "ResourceGroupId"?: string;
}
export { DescribeTrafficRequest };