interface NotifyExecutionRequest {
    "RegionId"?: string;
    "NotifyType": string;
    "ExecutionId": string;
    "NotifyNote"?: string;
    "TaskName"?: string;
    "TaskExecutionId"?: string;
    "ExecutionStatus"?: string;
    "Parameters"?: string;
    "LoopItem"?: string;
}
export { NotifyExecutionRequest };