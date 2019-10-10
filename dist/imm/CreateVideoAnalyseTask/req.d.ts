interface CreateVideoAnalyseTaskRequest {
    "RegionId"?: string;
    "VideoUri": string;
    "Project": string;
    "GrabType"?: string;
    "StartTime"?: string;
    "EndTime"?: string;
    "SaveType"?: boolean;
    "Interval"?: string;
    "TgtUri"?: string;
    "NotifyTopicName"?: string;
    "NotifyEndpoint"?: string;
}
export { CreateVideoAnalyseTaskRequest };