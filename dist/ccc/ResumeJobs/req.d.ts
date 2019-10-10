interface ResumeJobsRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "All": boolean;
    "ScenarioId"?: string;
    "GroupId"?: string;
    "JobId"?: string[];
    "JobReferenceId"?: string[];
}
export { ResumeJobsRequest };