interface SubmitRollbackTaskRequest {
    "RegionId"?: string;
    "DbName": string;
    "ParentJobId": string;
    "JobId": string;
    "ExpandType": string;
    "DrdsInstanceId": string;
}
export { SubmitRollbackTaskRequest };