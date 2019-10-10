interface ListRecentCallRecordsRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "PageNumber": number;
    "PageSize": number;
    "StartTime"?: number;
    "StopTime"?: number;
    "Criteria"?: string;
}
export { ListRecentCallRecordsRequest };