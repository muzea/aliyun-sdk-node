export interface CancelExecutionRequest {
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
}
