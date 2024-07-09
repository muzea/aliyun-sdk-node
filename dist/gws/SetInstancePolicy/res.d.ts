export interface SetInstancePolicyResponse {
    /**
     * > 此值只在 `AsyncMode` 为 `true` 时有效
     * 调用方可使用此值，用 DescribeInstancePolicy 来查询设置运作的执行状态。
     * @example `t-xxx`
     */
    TaskId: string;
    /**
     * Request id。
     * @example `XXX-XXX`
     */
    RequestId: string;
}
