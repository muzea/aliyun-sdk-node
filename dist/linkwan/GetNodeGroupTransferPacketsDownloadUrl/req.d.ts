interface GetNodeGroupTransferPacketsDownloadUrlRequest {
    "RegionId"?: string;
    "NodeGroupId": string;
    "Category": string;
    "BeginMillis": number;
    "EndMillis": number;
    "DevEui"?: string;
    "SortingField"?: string;
    "Ascending"?: boolean;
}
export { GetNodeGroupTransferPacketsDownloadUrlRequest };