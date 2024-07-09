export interface ListFlowsRequest {
    /**
     * 流程查询开始名称。
     * @example `flow_nextxxx`
     */
    "NextToken"?: string;
    /**
     * 查询数量。取值范围\[1,1000)，默认值为60。
     * @example `1`
     */
    "Limit"?: number;
}
