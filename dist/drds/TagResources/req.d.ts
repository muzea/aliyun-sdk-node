interface TagResourcesRequest {
    "RegionId": string;
    "ResourceType": string;
    "Tag": string[];
    "ResourceId": string[];
    "NoRole"?: boolean;
}
export { TagResourcesRequest };