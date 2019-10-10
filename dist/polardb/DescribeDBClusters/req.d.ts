interface DescribeDBClustersRequest {
    "RegionId": string;
    "OwnerId"?: number;
    "DBClusterIds"?: string;
    "DBClusterDescription"?: string;
    "DBClusterStatus"?: string;
    "DBType"?: string;
    "Tag"?: string[];
    "PageSize"?: number;
    "PageNumber"?: number;
}
export { DescribeDBClustersRequest };