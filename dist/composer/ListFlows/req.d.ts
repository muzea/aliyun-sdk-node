interface ListFlowsRequest {
    "RegionId"?: string;
    /**
    * 每页返回的数量
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 当前页码
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 过滤特定的流程名称
    * @example `test`
    */ "FlowName"?: string;
}
export { ListFlowsRequest };