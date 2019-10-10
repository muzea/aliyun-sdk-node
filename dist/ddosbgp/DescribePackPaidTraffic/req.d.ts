interface DescribePackPaidTrafficRequest {
    "RegionId"?: string;
    "CurrentPage": number;
    "PageSize": number;
    "StartTime": number;
    "EndTime": number;
    "SourceIp"?: string;
    "InstanceId"?: string;
    "ResourceGroupId"?: string;
}
export { DescribePackPaidTrafficRequest };