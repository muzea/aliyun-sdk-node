interface ListAgentEventsRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "RamId": string[];
    "StartTime"?: number;
    "StopTime"?: number;
    "Event"?: string[];
}
export { ListAgentEventsRequest };