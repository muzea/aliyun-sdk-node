export interface DescribeAlertHistoryListRequest {
    /**
     * 报警规则ID。
     * 关于如何查询报警规则ID，请参见[DescribeMetricRuleList](~~114941~~)。
     * @example `applyTemplate61dc81b5-d357-4cf6-a9b7-9f83c1d5****`
     */
    "RuleId"?: string;
    /**
     * 报警规则名称。
     * 关于如何查询报警规则名称，请参见[DescribeMetricRuleList](~~114941~~)。
     * @example `ECS_Rule`
     */
    "RuleName"?: string;
    /**
     * 云产品的数据命名空间。
     * 关于如何查询云产品的数据命名空间，请参见[云产品监控项](~~163515~~)。
     * @example `acs_ecs_dashboard`
     */
    "Namespace"?: string;
    /**
     * 云产品的监控项名称。
     * 关于如何查询云产品的监控项名称，请参见[云产品监控项](~~163515~~)。
     * @example `cpu_total`
     */
    "MetricName"?: string;
    /**
     * 应用分组ID。
     * 关于如何获取应用分组ID，请参见[DescribeMonitorGroups](~~115032~~)。
     * @example `7671****`
     */
    "GroupId"?: string;
    /**
     * 通道沉默状态。取值：
     * - 2（默认值）：通道沉默。
     * - 0：报警或恢复。
     * - 1：失效期。
     * @example `2`
     */
    "Status"?: string;
    /**
     * 报警状态。取值：
     * - ALARM（默认值）：报警状态。
     * - OK：正常状态。
     * @example `ALARM`
     */
    "State"?: string;
    /**
     * 时间排序。取值：
     * - true（默认值）：表示时间倒序。
     * - false：表示时间正序。
     * @example `true`
     */
    "Ascending"?: boolean;
    /**
     * 查询报警历史的开始时间戳。
     * 单位：毫秒。
     * @example `1640237400000`
     */
    "StartTime"?: string;
    /**
     * 查询报警历史的结束时间戳。
     * 单位：毫秒。
     * @example `1640608200000`
     */
    "EndTime"?: string;
    /**
     * 每页显示记录条数。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 页码。
     * 默认值：1。
     * @example `1`
     */
    "Page"?: number;
}
