export interface DescribeAlertingMetricRuleResourcesRequest {
    /**
     * 报警规则ID。关于如何查询报警规则ID，请参见[DescribeMetricRuleList](~~114941~~)。
     * @example `putNewAlarm_user_7e78d765-0e3e-4671-ba6d-7ce39108****`
     */
    "RuleId"?: string;
    /**
     * 应用分组ID。关于如何查询应用分组ID，请参见[DescribeMonitorGroups](~~115032~~)。
     * @example `7671****`
     */
    "GroupId"?: string;
    /**
     * 分页页码。
     * 默认值：1 。
     * @example `1`
     */
    "Page"?: number;
    /**
     * 分页大小。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 云产品的数据命名空间。
     * 关于如何获取云产品的数据命名空间，请参见[云产品监控项](~~163515~~)。
     * @example `acs_mns_new`
     */
    "Namespace"?: string;
    /**
     * 维度Map，用于查询指定资源的监控数据。
     * @example `{\"userId\":\"120886317861****\",\"region\":\"cn-huhehaote\",\"queue\":\"test-0128\"}`
     */
    "Dimensions"?: string;
    /**
     * 用于查询在这个时刻之前发生的报警。支持毫秒时间戳。
     * @example `1698827400000`
     */
    "AlertBeforeTime"?: string;
}
