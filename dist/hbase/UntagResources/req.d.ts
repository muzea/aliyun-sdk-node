interface UntagResourcesRequest {
    "RegionId": string;
    "ResourceType": string;
    "ResourceId": string[];
    "OwnerId"?: number;
    "TagKey"?: string[];
    "All"?: boolean;
}
export { UntagResourcesRequest };