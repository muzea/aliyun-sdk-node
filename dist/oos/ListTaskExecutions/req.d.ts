interface ListTaskExecutionsRequest {
    "RegionId"?: string;
    "ExecutionId"?: string;
    "Status"?: string;
    "StartDateBefore"?: string;
    "StartDateAfter"?: string;
    "EndDateBefore"?: string;
    "EndDateAfter"?: string;
    "TaskExecutionId"?: string;
    "TaskName"?: string;
    "TaskAction"?: string;
    "ParentTaskExecutionId"?: string;
    "IncludeChildTaskExecution"?: boolean;
    "MaxResults"?: number;
    "NextToken"?: string;
    "SortField"?: string;
    "SortOrder"?: string;
}
export { ListTaskExecutionsRequest };