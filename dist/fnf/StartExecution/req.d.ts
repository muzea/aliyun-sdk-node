export interface StartExecutionRequest {
    /**
     * 开始执行的流程名称。
     * @example `my_flow_name`
     */
    "FlowName": string;
    /**
     * 执行名称，在同一流程内唯一。取值说明如下：
     * - 首字母必须为英文字母（a~z）、（A~Z）或下划线（_）。
     * - 支持英文字符（a~z）或（A~Z）、数字（0~9）、下划线（_）和短划线（-）。
     * - 区分大小写。
     * - 长度为1~128个字符。
     * @example `my_exec_name`
     */
    "ExecutionName"?: string;
    /**
     * 执行的输入，为JSON对象格式。
     * @example `{"key":"value"}`
     */
    "Input"?: string;
    /**
     * 流程执行结束后回调**TaskToken**相关任务。
     * @example `12`
     */
    "CallbackFnFTaskToken"?: string;
}
