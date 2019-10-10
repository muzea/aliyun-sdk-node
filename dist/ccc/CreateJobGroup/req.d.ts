interface CreateJobGroupRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "Name": string;
    "Description"?: string;
    "ScenarioId"?: string;
    "StrategyJson"?: string;
    "CallingNumber"?: string[];
}
export { CreateJobGroupRequest };