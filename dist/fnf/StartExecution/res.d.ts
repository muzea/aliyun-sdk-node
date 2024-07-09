export interface StartExecutionResponse {
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
     * 执行停止时间。
     * @example `2019-01-01T01:01:01.001Z`
     */
    StoppedTime: string;
    /**
     * 请求ID。
     * @example `testRequestId`
     */
    RequestId: string;
    /**
     * 执行开始时间。
     * @example `2019-01-01T01:01:01.001Z`
     */
    StartedTime: string;
    /**
     * 执行的流程定义。
     * @example `旧版：
    "type: flow\nversion: v1\nname: my_flow_name\nsteps:\n  - type: pass\n    name: mypass"
    
    新版：
    "Type: StateMachine\nSpecVersion: v1\nName: my_flow_name\nStartAt: my_state\nStates:\n  - Type: Pass\n    Name: my_state\n    End: true"`
     */
    FlowDefinition: string;
    /**
     * 执行的输出，为JSON对象格式。
     * @example `{"key":"value"}`
     */
    Output: string;
    /**
     * 流程名称。
     * @example `my_flow_name`
     */
    FlowName: string;
    /**
     * 执行名称。
     * @example `my_exec_name`
     */
    Name: string;
    /**
     * 执行的输入，为JSON对象格式。
     * @example `{"key":"value"}`
     */
    Input: string;
}
