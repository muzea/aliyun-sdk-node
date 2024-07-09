export interface GetFlowResponse {
    /**
     * 最后更新时间
     * @example `2019-07-19T05:43:16.783Z`
     */
    UpdateTime: string;
    /**
     * 工作流来源
     * @example `CloudConfig`
     */
    FlowSource: string;
    /**
     * 创建时间
     * @example `2019-07-19T05:43:16.783Z`
     */
    CreateTime: string;
    /**
     * 编辑模式
     * @example `Locked`
     */
    FlowEditMode: string;
    /**
     * 工作流的描述
     * @example `这是一个工作流`
     */
    FlowDescription: string;
    /**
     * 工作流编排实例的版本ID
     * @example `ve-uf6bwdtvid7o25`
     */
    CurrentVersionId: string;
    /**
     * 工作流编排实例的名称
     * @example `test`
     */
    FlowName: string;
    /**
     * 工作流编排实例的ID
     * @example `lc-uf6pvud38xl0ia`
     */
    FlowId: string;
    /**
     * 地域ID
     * @example `cn-shanghai`
     */
    RegionId: string;
    /**
     * 工作流定义
     * @example `{\"schemaVersion\":\"2018-12-12\",\"actions\":{},\"version\":\"1.0.0\",\"triggers\":{}}`
     */
    Definition: string;
    /**
     * 请求ID
     * @example `ADB97A33-50E7-48A5-963D-ACBAE36D0BEC`
     */
    RequestId: string;
    /**
     * 状态。
     * - **Enabled**：启用
     * - **Disabled**：已禁用
     * @example `Enabled`
     */
    FlowStatus: string;
    /**
     * 模板 ID
     * @example `tp-uf6tbvhheciyxl`
     */
    TemplateId: string;
    /**
     * 资源组ID
     * @example `rg-acfmzyxxxxxxx`
     */
    ResourceGroupId: string;
}
