interface InsertFlowControlRequest {
    "RegionId"?: string;
    "AppId": string;
    "Granularity": string;
    "RuleType": string;
    "Threshold": number;
    "ConsumerAppId"?: string;
    "MethodName"?: string;
    "ServiceName"?: string;
    "Strategy"?: string;
    "UrlVar"?: string;
}
export { InsertFlowControlRequest };