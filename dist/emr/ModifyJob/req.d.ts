interface ModifyJobRequest {
    "RegionId": string;
    "Id": string;
    "Name"?: string;
    "Type"?: string;
    "RunParameter"?: string;
    "FailAct"?: string;
    "MaxRetry"?: number;
    "RetryInterval"?: number;
}
export { ModifyJobRequest };