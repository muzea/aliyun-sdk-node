interface ListVersionsRequest {
    "RegionId"?: string;
    /**
    * 需要查询的工作流编排实例的 ID
    * @example `lc-abcdefg`
    */ "FlowId": string;
    /**
    * 当前页码
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 每页返回的数量
    * @example `10`
    */ "PageSize"?: number;
}
export { ListVersionsRequest };