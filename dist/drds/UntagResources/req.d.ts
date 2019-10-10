interface UntagResourcesRequest {
    "RegionId": string;
    "ResourceType": string;
    "ResourceId": string[];
    "All"?: boolean;
    "NoRole"?: boolean;
    "TagKey"?: string[];
}
export { UntagResourcesRequest };