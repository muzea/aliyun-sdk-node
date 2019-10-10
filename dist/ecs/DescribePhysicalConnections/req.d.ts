interface DescribePhysicalConnectionsRequest {
    "RegionId": string;
    "PageNumber"?: number;
    "PageSize"?: number;
    "Filter"?: string[];
    "OwnerId"?: number;
    "ClientToken"?: string;
    "UserCidr"?: string;
}
export { DescribePhysicalConnectionsRequest };