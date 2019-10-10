interface ListProductByTagsRequest {
    "RegionId"?: string;
    "CurrentPage"?: number;
    "PageSize"?: number;
    "IotInstanceId"?: string;
    "ProductTag": string[];
}
export { ListProductByTagsRequest };