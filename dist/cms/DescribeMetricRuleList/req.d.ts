export interface DescribeMetricRuleListRequest {
    /**
     * 监控项名称。
     * 关于如何获取监控项名称，请参见[DescribeMetricMetaList](~~98846~~)或[云产品监控项](~~163515~~)。
     * @example `cpu_total`
     */
    "MetricName"?: string;
    /**
     * 报警规则的启用状态。取值：
     * - true：启用。
     * - false：禁用。
     * @example `true`
     */
    "EnableState"?: boolean;
    /**
     * 云产品的命名空间。
     * 关于如何获取云产品的命名空间，请参见[DescribeMetricMetaList](~~98846~~)或[云产品监控项](~~163515~~)。
     * @example `acs_ecs_dashboard`
     */
    "Namespace"?: string;
    /**
     * 页码。
     * 起始值：1。默认值：1。
     * @example `1`
     */
    "Page"?: number;
    /**
     * 分页时每页显示的数据行数。
     * 起始值：1。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 报警规则状态。取值：
     * - OK：正常。
     * - ALARM：报警。
     * - INSUFFICIENT_DATA：无数据。
     * @example `OK`
     */
    "AlertState"?: string;
    /**
     * 指定资源的监控维度。
     * 格式：`key:value`键值对形式的集合，例如：`{"userId":"120886317861****"}`和`{"instanceId":"i-2ze2d6j5uhg20x47****"}`。
     * @example `{"instanceId":"i-2ze2d6j5uhg20x47****"}`
     */
    "Dimensions"?: string;
    /**
     * 报警规则名称。
     * 该参数支持模糊查询。
     * @example `Rule_01`
     */
    "RuleName"?: string;
    /**
     * 应用分组ID。
     * 关于如何获取应用分组ID，请参见[DescribeMonitorGroups](~~115032~~)。
     * @example `7301****`
     */
    "GroupId"?: string;
    /**
     * 报警规则ID。多个报警规则ID之间用半角逗号（,）分隔，一次最多可查询20条。
     * @example `applyTemplate344cfd42-0f32-4fd6-805a-88d7908a****`
     */
    "RuleIds"?: string;
}
