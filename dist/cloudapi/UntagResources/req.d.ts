interface UntagResourcesRequest {
    "RegionId"?: string;
    "ResourceId": string[];
    "ResourceType": string;
    "TagKey"?: string[];
    "All"?: boolean;
}
export { UntagResourcesRequest };