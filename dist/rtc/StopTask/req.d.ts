interface StopTaskRequest {
    "RegionId"?: string;
    "AppId": string;
    "ChannelId": string;
    "TaskId": number;
    "OwnerId"?: number;
}
export { StopTaskRequest };