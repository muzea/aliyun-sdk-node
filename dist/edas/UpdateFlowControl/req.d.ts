interface UpdateFlowControlRequest {
    "RegionId"?: string;
    "AppId": string;
    "RuleId": string;
    "Granularity": string;
    "RuleType": string;
    "Threshold": number;
    "ConsumerAppId"?: string;
    "MethodName"?: string;
    "ServiceName"?: string;
    "Strategy"?: string;
    "UrlVar"?: string;
}
export { UpdateFlowControlRequest };