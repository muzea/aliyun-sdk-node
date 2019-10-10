interface ListJobGroupsRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "PageNumber": number;
    "PageSize": number;
    "StartTime"?: number;
    "EndTime"?: number;
}
export { ListJobGroupsRequest };