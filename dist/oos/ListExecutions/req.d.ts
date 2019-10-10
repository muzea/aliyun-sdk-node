interface ListExecutionsRequest {
    "RegionId"?: string;
    "TemplateName"?: string;
    "Status"?: string;
    "ExecutionId"?: string;
    "StartDateBefore"?: string;
    "StartDateAfter"?: string;
    "EndDateBefore"?: string;
    "EndDateAfter"?: string;
    "Mode"?: string;
    "ExecutedBy"?: string;
    "ParentExecutionId"?: string;
    "RamRole"?: string;
    "IncludeChildExecution"?: boolean;
    "MaxResults"?: number;
    "NextToken"?: string;
    "SortField"?: string;
    "SortOrder"?: string;
}
export { ListExecutionsRequest };