interface CreateBatchJobsRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "Name": string;
    "ScenarioId": string;
    "Submitted": boolean;
    "Description"?: string;
    "StrategyJson"?: string;
    "CallingNumber"?: string[];
    "JobFilePath"?: string;
}
export { CreateBatchJobsRequest };