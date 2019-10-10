interface DescribeClusterListRequest {
    "RegionId": string;
    "OwnerId"?: number;
    "ZoneId"?: string;
    "ClusterId"?: string;
    "ClusterName"?: string;
    "StatusList"?: string[];
    "PageSize"?: number;
    "PageNumber"?: number;
    "DbType"?: string;
    "Tag"?: string[];
}
export { DescribeClusterListRequest };