export interface StopExecutionRequest {
    /**
     * 需要停止的流程名称，可以通过**ListFlows**的返回值获取。
     * @example `my_flow_name`
     */
    "FlowName": string;
    /**
     * 需要停止的执行名称，可以通过**ListExecutions**的返回值获取。
     * @example `my_exec_name`
     */
    "ExecutionName": string;
    /**
     * 停止错误原因。长度为1~4096个字符。
     * @example `for test`
     */
    "Cause"?: string;
    /**
     * 停止错误代码。长度为1~128个字符。
     * @example `nill`
     */
    "Error"?: string;
}
