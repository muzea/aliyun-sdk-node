interface ListTagResourcesRequest {
    "RegionId"?: string;
    "NextToken"?: string;
    "ResourceType": string;
    "ResourceId"?: string[];
    "Tag"?: string[];
}
export { ListTagResourcesRequest };