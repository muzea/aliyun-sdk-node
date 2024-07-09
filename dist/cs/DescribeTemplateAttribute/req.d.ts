export interface DescribeTemplateAttributeRequest {
    /**
     * 模板ID。
     * @example `874ec485-e7e6-4373-8a3b-47bde8a****`
     */
    "TemplateId": string;
    /**
     * 模板类型，其值可以是任意值。
     * - 当取值是`kubernetes`时将在控制台的编排模板页面展示该模板。
     * - 当取值是`compose`时将在控制台Swarm集群页面显示该模板（已废弃）。
     * - 当取值非`kubernetes`时在控制台的编排模板页面将不会展示该模板，推荐使用`kubernetes`。
     * 默认值：`kubernetes`。
     * @example `kubernetes`
     */
    "template_type"?: string;
}
