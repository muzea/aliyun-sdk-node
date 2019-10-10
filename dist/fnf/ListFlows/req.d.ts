interface ListFlowsRequest {
    "RegionId"?: string;
    /**
    * 流程查询开始名称。
    * @example `flow_nextxxx`
    */ "NextToken"?: string;
    /**
    * 查询数量。
    * @example `1`
    */ "Limit"?: number;
}
export { ListFlowsRequest };