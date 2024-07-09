export interface StartSyncExecutionResponse {
    /**
     * 请求ID。
     * @example `testRequestId`
     */
    RequestId: string;
    /**
     * 流程名称。
     * @example `my_flow_name`
     */
    FlowName: string;
    /**
     * 流程执行名称。
     * @example `my_exec_name:{UUID}`
     */
    Name: string;
    /**
     * 执行状态。取值说明如下：
     * - **Starting**
     * - **Running**
     * - **Stopped**
     * - **Succeeded**
     * - **Failed**
     * - **TimedOut**
     * @example `Succeeded`
     */
    Status: string;
    /**
     * 执行错误时的错误码。
     * @example `ActionNotSupported`
     */
    ErrorCode: string;
    /**
     * 执行超时。
     * @example `Standard execution is not supported`
     */
    ErrorMessage: string;
    /**
     * 执行的输出，为JSON对象格式。
     * @example `{"key":"value"}`
     */
    Output: string;
    /**
     * 执行开始时间。
     * @example `2019-01-01T01:01:01.001Z`
     */
    StartedTime: string;
    /**
     * 执行停止时间。
     * @example `2019-01-01T01:01:01.001Z`
     */
    StoppedTime: string;
}
