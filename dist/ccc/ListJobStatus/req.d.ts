interface ListJobStatusRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "PageNumber": number;
    "PageSize": number;
    "ScenarioId"?: string;
    "GroupId"?: string;
    "StartTime"?: number;
    "EndTime"?: number;
    "TimeAlignment"?: string;
    "ContactName"?: string;
    "PhoneNumber"?: string;
}
export { ListJobStatusRequest };