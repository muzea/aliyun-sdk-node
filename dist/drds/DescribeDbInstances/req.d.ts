interface DescribeDbInstancesRequest {
    "RegionId": string;
    "DrdsInstanceId": string;
    "Search"?: string;
    "DbInstType"?: string;
    "PageNumber"?: number;
    "PageSize"?: number;
}
export { DescribeDbInstancesRequest };