interface CreateFlowRequest {
    "RegionId"?: string;
    /**
    * 工作流编排实例的名称
    * @example `test`
    */ "FlowName": string;
    /**
    * 工作流编排实例的描述
    * @example `这是一个工作流`
    */ "FlowDescription"?: string;
    /**
    * 工作流定义，需要将 JSON 格式化为 string
    * @example `{\"schemaVersion\":\"2018-12-12\",\"actions\":{},\"version\":\"1.0.0\",\"triggers\":{}}`
    */ "Definition"?: string;
}
export { CreateFlowRequest };