interface DescribeNetworkInterfacePermissionsRequest {
    "RegionId": string;
    "SourceRegionId"?: string;
    "OwnerId"?: number;
    "NetworkInterfaceId"?: string;
    "NetworkInterfacePermissionId"?: string[];
    "PageNumber"?: number;
    "PageSize"?: number;
}
export { DescribeNetworkInterfacePermissionsRequest };