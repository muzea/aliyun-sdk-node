interface CreateVideoCompressTaskRequest {
    "RegionId"?: string;
    "VideoUri": string;
    "TargetList": string;
    "Project": string;
    "NotifyTopicName"?: string;
    "NotifyEndpoint"?: string;
}
export { CreateVideoCompressTaskRequest };