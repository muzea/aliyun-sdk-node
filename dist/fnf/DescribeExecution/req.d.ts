export interface DescribeExecutionRequest {
    /**
     * 流程名称。
     * @example `my_flow_name`
     */
    "FlowName": string;
    /**
     * 执行名称。
     * @example `my_exec_name`
     */
    "ExecutionName": string;
    /**
     * 请求长轮询的最长等待时间。取值范围\[0,60]，单位为秒。取值说明如下：
     * - 取值等于0：请求立即返回当前执行状态。
     * - 取值大于0：请求在服务端长轮询等待执行结束，最长等待设定的秒数。
     * @example `20`
     */
    "WaitTimeSeconds"?: number;
}
