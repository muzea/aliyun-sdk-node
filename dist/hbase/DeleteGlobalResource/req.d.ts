interface DeleteGlobalResourceRequest {
    "RegionId": string;
    "ClusterId": string;
    "ResourceName": string;
    "ResourceType": string;
    "OwnerId"?: number;
    "ZoneId"?: string;
}
export { DeleteGlobalResourceRequest };