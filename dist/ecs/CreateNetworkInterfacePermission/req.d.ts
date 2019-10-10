interface CreateNetworkInterfacePermissionRequest {
    "RegionId": string;
    "AccountId": number;
    "NetworkInterfaceId": string;
    "Permission": string;
    "SourceRegionId"?: string;
    "OwnerId"?: number;
}
export { CreateNetworkInterfacePermissionRequest };