export interface ListExecutionLogsRequest {
    /**
     * 地域ID
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 执行ID
     * @example `exec-xxx`
     */
    "ExecutionId": string;
    /**
     * 任务执行ID
     * @example `exec-1234567zxcvb.t0010`
     */
    "TaskExecutionId"?: string;
    /**
     * 日志类型
     * @example `System`
     */
    "LogType"?: string;
    /**
     * 分页大小
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 翻页标记的Token
     * @example `MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ3NjFENDdB`
     */
    "NextToken"?: string;
}
