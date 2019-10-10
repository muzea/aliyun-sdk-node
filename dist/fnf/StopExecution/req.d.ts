interface StopExecutionRequest {
    "RegionId"?: string;
    /**
    * 需要停止的流程名称。
    * @example `flow`
    */ "FlowName": string;
    /**
    * 需要停止的执行名称，可通过ListExecuiton、StartExecution的返回值获取。
    * @example `exec`
    */ "ExecutionName": string;
    /**
    * 停止错误原因。
    * @example `for test`
    */ "Cause"?: string;
    /**
    * 停止错误代码。
    * @example `nill`
    */ "Error"?: string;
}
export { StopExecutionRequest };