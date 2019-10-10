interface CreateVideoAbstractTaskRequest {
    "RegionId"?: string;
    "VideoUri": string;
    "AbstractLength": number;
    "Project": string;
    "NotifyTopicName"?: string;
    "NotifyEndpoint"?: string;
    "TargetVideoUri"?: string;
    "TargetClipsUri"?: string;
}
export { CreateVideoAbstractTaskRequest };