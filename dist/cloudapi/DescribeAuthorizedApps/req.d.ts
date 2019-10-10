interface DescribeAuthorizedAppsRequest {
    "RegionId": string;
    "ApiId": string;
    "GroupId"?: string;
    "StageName"?: string;
    "PageNumber"?: number;
    "PageSize"?: number;
    "AppId"?: number;
    "AppName"?: string;
    "AppOwnerId"?: number;
}
export { DescribeAuthorizedAppsRequest };