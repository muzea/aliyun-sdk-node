interface SubmitMcuJobRequest {
    "RegionId"?: string;
    "PipelineId": string;
    "Template": string;
    "Input": string;
    "OwnerId"?: number;
    "TemplateId"?: string;
    "UserData"?: string;
}
export { SubmitMcuJobRequest };