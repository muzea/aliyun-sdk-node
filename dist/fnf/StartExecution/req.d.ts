interface StartExecutionRequest {
    "RegionId"?: string;
    /**
    * 开始执行的流程名称。
    * @example `flow`
    */ "FlowName": string;
    /**
    * 自定义执行的名称，如需输入请保证该流程下唯一。
    * @example `exec`
    */ "ExecutionName"?: string;
    /**
    * 本次执行的输入信息。
    * @example `{}`
    */ "Input"?: string;
}
export { StartExecutionRequest };