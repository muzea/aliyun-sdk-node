interface ListRecordingOfDualTrackRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "StartTime": number;
    "StopTime": number;
    "PageNumber": number;
    "PageSize": number;
    "ConnectId"?: string;
    "CallingNumber"?: string;
    "CalledNumber"?: string;
    "AgentId"?: string;
}
export { ListRecordingOfDualTrackRequest };