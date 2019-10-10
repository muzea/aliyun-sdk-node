interface TagResourcesRequest {
    "RegionId": string;
    "ResourceType": string;
    "ResourceId": string[];
    "Tag": string[];
    "OwnerId"?: number;
}
export { TagResourcesRequest };