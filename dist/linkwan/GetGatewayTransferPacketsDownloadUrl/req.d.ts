interface GetGatewayTransferPacketsDownloadUrlRequest {
    "RegionId"?: string;
    "Category": string;
    "BeginMillis": number;
    "EndMillis": number;
    "GwEui": string;
    "DevEui"?: string;
    "SortingField"?: string;
    "Ascending"?: boolean;
}
export { GetGatewayTransferPacketsDownloadUrlRequest };