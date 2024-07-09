export interface CreateFlowRequest {
    /**
     * 工作流编排实例的名称
     * @example `test`
     */
    "FlowName": string;
    /**
     * 工作流编排实例的描述
     * @example `这是一个工作流`
     */
    "FlowDescription"?: string;
    /**
     * 工作流定义，需要将JSON格式化为String
     * @example `{\"schemaVersion\":\"2018-12-12\",\"actions\":{},\"version\":\"1.0.0\",\"triggers\":{}}`
     */
    "Definition"?: string;
    /**
     * 模板 ID
     * @example `tp-uf6tbvhheciyxl`
     */
    "TemplateId"?: string;
    /**
     * 工作流来源，目前有以下取值：
     * - Default：默认来源，一般是控制台创建
     * - CloudConfig：通过配置审计产品创建
     * - Solution：通过逻辑编排解决方案中心创建
     * @example `Default`
     */
    "FlowSource"?: string;
    /**
     * 资源组ID
     * @example `rg-aekzmrjn4nsszna`
     */
    "ResourceGroupId"?: string;
}
