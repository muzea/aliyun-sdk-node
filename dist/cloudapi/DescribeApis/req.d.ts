interface DescribeApisRequest {
    "RegionId": string;
    "GroupId"?: string;
    "ApiId"?: string;
    "ApiName"?: string;
    "CatalogId"?: string;
    "Visibility"?: string;
    "PageSize"?: number;
    "PageNumber"?: number;
    "EnableTagAuth"?: boolean;
    "Tag"?: string[];
}
export { DescribeApisRequest };