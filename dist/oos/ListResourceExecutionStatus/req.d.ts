export interface ListResourceExecutionStatusRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 执行ID。
     * @example `exec-xxxxxxxxxxxx`
     */
    "ExecutionId": string;
    /**
     * 分页大小。取值范围：10-100。默认为50。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 翻页标记的Token。
     * @example `MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ`
     */
    "NextToken"?: string;
}
