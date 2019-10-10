interface DescribeRecordListRequest {
    "RegionId"?: string;
    "AppId": string;
    "StartTime": string;
    "EndTime": string;
    "PageNo": number;
    "PageSize": number;
    "OwnerId"?: number;
    "IdType"?: string;
    "Id"?: string;
    "SortType"?: string;
    "ServiceArea"?: string;
}
export { DescribeRecordListRequest };