interface UpdateFlowRequest {
    "RegionId"?: string;
    /**
    * 需要更新的工作流编排实例的 ID
    * @example `lc-abcdefg`
    */ "FlowId": string;
    /**
    * 更新后的名称
    * @example `test`
    */ "FlowName"?: string;
    /**
    * 更新后的描述
    * @example `这是一个工作流的描述`
    */ "FlowDescription"?: string;
    /**
    * 更新后的工作流定义
    * @example `{\"schemaVersion\":\"2018-12-12\",\"actions\":{},\"version\":\"1.0.0\",\"triggers\":{}}`
    */ "Definition"?: string;
}
export { UpdateFlowRequest };