interface CreateJobRequest {
    "RegionId": string;
    "Name": string;
    "Type": string;
    "RunParameter": string;
    "FailAct": string;
    "MaxRetry"?: number;
    "RetryInterval"?: number;
}
export { CreateJobRequest };