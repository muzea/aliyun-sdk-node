interface UntagResourcesRequest {
    "RegionId"?: string;
    "ResourceId": string[];
    "ResourceType": string;
    "OwnerId"?: number;
    "TagKey"?: string[];
    "All"?: boolean;
}
export { UntagResourcesRequest };