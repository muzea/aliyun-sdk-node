interface ListRecordingsRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "PageNumber": number;
    "PageSize": number;
    "StopTime"?: number;
    "StartTime"?: number;
    "PhoneNumber"?: string;
    "AgentId"?: string;
    "Criteria"?: string;
}
export { ListRecordingsRequest };