interface UpdateDegradeControlRequest {
    "RegionId"?: string;
    "AppId": string;
    "RuleId": string;
    "Duration": number;
    "RtThreshold": number;
    "RuleType": string;
    "MethodName"?: string;
    "ServiceName"?: string;
    "UrlVar"?: string;
}
export { UpdateDegradeControlRequest };