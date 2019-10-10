interface ListExecutionLogsRequest {
    "RegionId"?: string;
    "ExecutionId": string;
    "TaskExecutionId"?: string;
    "LogType"?: string;
    "MaxResults"?: number;
    "NextToken"?: string;
}
export { ListExecutionLogsRequest };