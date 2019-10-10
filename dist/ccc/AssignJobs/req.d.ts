interface AssignJobsRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "ScenarioId": string;
    "JobsJson": string[];
    "GroupId"?: string;
    "StrategyJson"?: string;
    "CallingNumber"?: string[];
}
export { AssignJobsRequest };