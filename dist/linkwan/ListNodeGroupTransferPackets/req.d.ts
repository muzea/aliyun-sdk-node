interface ListNodeGroupTransferPacketsRequest {
    "RegionId"?: string;
    "NodeGroupId": string;
    "Category": string;
    "PageNumber": number;
    "PageSize": number;
    "BeginMillis": number;
    "EndMillis": number;
    "SortingField"?: string;
    "DevEui"?: string;
    "Ascending"?: boolean;
}
export { ListNodeGroupTransferPacketsRequest };