interface ListExecutionsRequest {
    "RegionId"?: string;
    /**
    * 流程名称。
    * @example `flow`
    */ "FlowName": string;
    /**
    * 执行查询开始名称，根据本接口返回获取。
    * @example `flow_xxx`
    */ "NextToken"?: string;
    /**
    * 查询数量。
    * @example `1`
    */ "Limit"?: number;
}
export { ListExecutionsRequest };