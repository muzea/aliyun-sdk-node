interface ListTagResourcesRequest {
    "RegionId": string;
    "ResourceType": string;
    "OwnerId"?: number;
    "ResourceId"?: string[];
    "Tag"?: string[];
    "NextToken"?: string;
}
export { ListTagResourcesRequest };