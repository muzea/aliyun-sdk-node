interface CreateScenarioRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "Name": string;
    "Description"?: string;
    "StrategyJson"?: string;
    "Type"?: string;
    "SurveysJson"?: string[];
}
export { CreateScenarioRequest };