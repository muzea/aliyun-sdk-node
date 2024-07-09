export type DescribeTemplateAttributeResponse = {
    /**
     * 编排模板ID，每次变更都会有一个模板ID。
     * @example `72d20cf8-a533-4ea9-a10d-e7630d3d****`
     */
    id: string;
    /**
     * 编排模板访问权限。
     * @example `private`
     */
    acl: string;
    /**
     * 编排模板名称。
     * @example `web`
     */
    name: string;
    /**
     * 编排模板YAML内容。
     * @example `apiVersion: V1\n***`
     */
    template: string;
    /**
     * 模板类型，其值可以是任意值。
     * - 当取值是`kubernetes`时将在控制台的编排模板页面展示该模板。
     * - 当取值是`compose`时将在控制台Swarm集群页面显示该模板（已废弃）。
     * - 当取值非`kubernetes`时在控制台的编排模板页面将不会展示该模板，推荐使用`kubernetes`。
     * 默认值：`kubernetes`。
     * @example `kubernetes`
     */
    template_type: string;
    /**
     * 编排模板描述信息。
     * @example `test template`
     */
    description: string;
    /**
     * 部署模板的标签。
     * @example `sa`
     */
    tags: string;
    /**
     * 编排模板唯一ID，不随模板更新而改变。
     * @example `874ec485-e7e6-4373-8a3b-47bde8ae****`
     */
    template_with_hist_id: string;
    /**
     * 编排模板创建时间。
     * @example `2020-09-16T19:21:29+08:00`
     */
    created: string;
    /**
     * 编排模板更新时间。
     * @example `2020-09-16T19:21:29+08:00`
     */
    updated: string;
}[];
