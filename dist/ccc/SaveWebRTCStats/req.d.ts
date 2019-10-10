interface SaveWebRTCStatsRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "RecordTime": number;
    "CallId": string;
    "CallerNumber": string;
    "CalleeNumber": string;
    "CallStartTime": number;
    "Stats": string;
    "Uid": string;
    "TenantId": string;
}
export { SaveWebRTCStatsRequest };