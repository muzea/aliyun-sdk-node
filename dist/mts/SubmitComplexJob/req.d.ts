interface SubmitComplexJobRequest {
    "RegionId"?: string;
    "ComplexConfigs": string;
    "TranscodeOutput": string;
    "OutputBucket": string;
    "PipelineId": string;
    "Inputs": string;
    "OwnerId"?: number;
    "OutputLocation"?: string;
    "UserData"?: string;
}
export { SubmitComplexJobRequest };