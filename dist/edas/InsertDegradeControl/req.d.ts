interface InsertDegradeControlRequest {
    "RegionId"?: string;
    "AppId": string;
    "Duration": number;
    "RtThreshold": number;
    "RuleType": string;
    "MethodName"?: string;
    "ServiceName"?: string;
    "UrlVar"?: string;
}
export { InsertDegradeControlRequest };