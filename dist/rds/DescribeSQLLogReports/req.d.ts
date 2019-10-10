interface DescribeSQLLogReportsRequest {
    "RegionId"?: string;
    "DBInstanceId": string;
    "StartTime": string;
    "EndTime": string;
    "OwnerId"?: number;
    "PageSize"?: number;
    "PageNumber"?: number;
}
export { DescribeSQLLogReportsRequest };