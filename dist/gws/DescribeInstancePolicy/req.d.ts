export interface DescribeInstancePolicyRequest {
    /**
     * 实例 id。
     * @example `i-xxx`
     */
    "InstanceId": string;
    /**
     * > 此值只在 `AsyncMode` 为 `true` 时有效
     * 非空时用来获得之前查询命令的执行状态。
     * @example `t-xxx`
     */
    "TaskId"?: string;
    /**
     * 异步模式调用：
     * * false（默认）：命令执行完成后，API才会返回。
     * * true：API**立即**返回。
     *     * 当`TaskId`为空：查询命令在后台异步执行。调用方需使用**返回值**中的TaskId，继续调用此API来获得查询命令的结果。
     *     * 当`TaskId`不为空：获得查询命令的结果。
     * @example `false`
     */
    "AsyncMode"?: boolean;
}
