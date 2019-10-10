interface ListExecutionPlanInstancesRequest {
    "RegionId": string;
    "ExecutionPlanIdList": string[];
    "OnlyLastInstance"?: boolean;
    "StatusList"?: string[];
    "IsDesc"?: boolean;
    "PageNumber"?: number;
    "PageSize"?: number;
}
export { ListExecutionPlanInstancesRequest };