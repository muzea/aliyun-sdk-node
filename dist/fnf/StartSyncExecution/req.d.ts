export interface StartSyncExecutionRequest {
    /**
     * 开始执行的流程名称。
     * @example `my_flow_name`
     */
    "FlowName": string;
    /**
     * 执行名称。取值说明如下：
     * - 支持英文字符（a~z）或（A~Z）、数字（0~9）、下划线（_）和短划线（-）。
     * - 首字母必须为英文字母（a~z）、（A~Z）或下划线（_）。
     * - 区分大小写。
     * - 长度为1~128个字符。
     * 不同于StartExecution接口，考虑到同步调用的特殊性，在同步执行模式下，不再要求执行名称在同一流程内唯一，调用侧可以选择提供执行名称，对本次执行进行标识，系统会在当前执行名称后添加UUID，具体形式如 {ExecutionName}:{UUID}，如果用户没有指定相关的执行名称信息，那么系统会自动生成标识本次执行的ExecutionName。
     * @example `my_exec_name`
     */
    "ExecutionName"?: string;
    /**
     * 执行的输入，为JSON对象格式。
     * @example `{"key":"value"}`
     */
    "Input"?: string;
}
