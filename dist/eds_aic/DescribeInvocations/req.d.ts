export interface DescribeInvocationsRequest {
    /**
     * 云手机实例ID列表，一次请求最多查询50个实例的执行结果。
     */
    "InstanceIds": string[];
    /**
     * 命令执行ID，根据该ID和云手机实例ID可查询一次命令执行的结果。
     * @example `t-4e98eeb5****`
     */
    "InvocationId": string;
}
