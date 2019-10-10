interface OnsConsumerResetOffsetRequest {
    "RegionId"?: string;
    "Topic": string;
    "Type": number;
    "GroupId": string;
    "ResetTimestamp"?: number;
    "InstanceId"?: string;
}
export { OnsConsumerResetOffsetRequest };