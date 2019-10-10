interface DescribeDrdsSlowSqlsRequest {
    "RegionId"?: string;
    "StartTime": number;
    "EndTime": number;
    "DrdsInstanceId": string;
    "DbName": string;
    "ExeTime": number;
    "PageNumber"?: number;
    "PageSize"?: number;
}
export { DescribeDrdsSlowSqlsRequest };