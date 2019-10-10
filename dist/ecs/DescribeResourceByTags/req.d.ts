interface DescribeResourceByTagsRequest {
    "RegionId": string;
    "SourceRegionId"?: string;
    "OwnerId"?: number;
    "PageSize"?: number;
    "PageNumber"?: number;
    "ResourceType"?: string;
    "Tag"?: string[];
}
export { DescribeResourceByTagsRequest };