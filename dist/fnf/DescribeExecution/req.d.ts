interface DescribeExecutionRequest {
    "RegionId"?: string;
    /**
    * 流程名称。
    * @example `flow`
    */ "FlowName": string;
    /**
    * 执行名称。
    * @example `exec`
    */ "ExecutionName": string;
}
export { DescribeExecutionRequest };