export interface SetClusterPolicyResponse {
    /**
     * > 此值只在 `AsyncMode` 为 `true` 时有效
     * 调用方可使用此值，用 DescribeClusterPolicy 来查询命令的执行状态。
     * @example `t-xxx`
     */
    TaskId: string;
    /**
     * 请求 id
     * @example `XXXX`
     */
    RequestId: string;
}
