interface DescribeL4EventsSelectiveRequest {
    "RegionId"?: string;
    "BeginTime": number;
    "EndTime": number;
    "Page": number;
    "PageSize": number;
    "SourceIp"?: string;
    "Lang"?: string;
    "EsnAppId"?: string;
    "EsnBizId"?: string;
    "GroupId"?: string;
}
export { DescribeL4EventsSelectiveRequest };