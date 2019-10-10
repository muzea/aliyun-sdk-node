interface StartJobRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "ScenarioId": string;
    "JobJson": string;
    "GroupId"?: string;
    "CallingNumber"?: string[];
    "SelfHostedCallCenter"?: boolean;
}
export { StartJobRequest };