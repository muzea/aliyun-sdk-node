interface SubmitAnalysisJobRequest {
    "RegionId"?: string;
    "PipelineId": string;
    "Input": string;
    "AnalysisConfig"?: string;
    "UserData"?: string;
    "Priority"?: string;
}
export { SubmitAnalysisJobRequest };