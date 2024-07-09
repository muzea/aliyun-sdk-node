export interface GetExecutionHistoryRequest {
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
     * Event查询开始名称，根据本接口返回获取。
     * @example `flow_xxx`
     */
    "NextToken"?: string;
    /**
     * 查询数量。取值范围\[1,1000)，默认值为60。
     * @example `1`
     */
    "Limit"?: number;
}
