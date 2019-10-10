interface ListTagResourcesRequest {
    "RegionId": string;
    "ResourceType": string;
    "Tag"?: string[];
    "ResourceId"?: string[];
    "NoRole"?: boolean;
    "NextToken"?: string;
}
export { ListTagResourcesRequest };