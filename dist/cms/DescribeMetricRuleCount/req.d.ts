export interface DescribeMetricRuleCountRequest {
    /**
     * 云服务的命名空间。详情请参见[云产品监控项](~~163515~~)。
     * @example `acs_ecs_dashboard`
     */
    "Namespace"?: string;
    /**
     * 监控项名称。详情请参见[云产品监控项](~~163515~~)。
     * @example `cpu_total`
     */
    "MetricName"?: string;
}
