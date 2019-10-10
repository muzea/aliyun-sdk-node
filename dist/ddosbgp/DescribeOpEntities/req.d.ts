interface DescribeOpEntitiesRequest {
    "RegionId"?: string;
    "CurrentPage": number;
    "PageSize": number;
    "StartTime": number;
    "EndTime": number;
    "SourceIp"?: string;
    "Lang"?: string;
    "OrderBy"?: string;
    "OrderDir"?: string;
    "InstanceId"?: string;
    "ResourceRegionId"?: string;
    "ResourceGroupId"?: string;
}
export { DescribeOpEntitiesRequest };