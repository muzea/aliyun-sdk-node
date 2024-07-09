export interface UpdateFlowRequest {
    /**
     * 需要更新的工作流ID
     * @example `lc-uf6axpwfcw4ubx`
     */
    "FlowId": string;
    /**
     * 更新后的工作流名称
     * @example `test`
     */
    "FlowName"?: string;
    /**
     * 更新后的工作流描述
     * @example `这是一个工作流的描述`
     */
    "FlowDescription"?: string;
    /**
     * 更新后的工作流定义
     * @example `{\"schemaVersion\":\"2018-12-12\",\"actions\":{},\"version\":\"1.0.0\",\"triggers\":{}}`
     */
    "Definition"?: string;
}
