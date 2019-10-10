interface DescribeDeployedApisRequest {
    "RegionId": string;
    "GroupId"?: string;
    "StageName"?: string;
    "ApiId"?: string;
    "ApiName"?: string;
    "PageNumber"?: number;
    "PageSize"?: number;
    "Tag"?: string[];
    "EnableTagAuth"?: boolean;
}
export { DescribeDeployedApisRequest };