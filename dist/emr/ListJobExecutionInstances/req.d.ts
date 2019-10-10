interface ListJobExecutionInstancesRequest {
    "RegionId": string;
    "ExecutionPlanInstanceId": string;
    "IsDesc"?: boolean;
    "PageNumber"?: number;
    "PageSize"?: number;
}
export { ListJobExecutionInstancesRequest };