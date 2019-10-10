interface DescribeApiGroupsRequest {
    "RegionId": string;
    "GroupId"?: string;
    "GroupName"?: string;
    "PageNumber"?: number;
    "PageSize"?: number;
    "Tag"?: string[];
    "EnableTagAuth"?: boolean;
}
export { DescribeApiGroupsRequest };