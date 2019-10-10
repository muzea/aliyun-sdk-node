interface UpdateCensorPipelineRequest {
    "RegionId"?: string;
    "Name": string;
    "State": string;
    "Priority": number;
    "PipelineId": string;
    "OwnerId"?: number;
    "NotifyConfig"?: string;
}
export { UpdateCensorPipelineRequest };