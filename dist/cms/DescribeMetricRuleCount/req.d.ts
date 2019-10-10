interface DescribeMetricRuleCountRequest {
    "RegionId"?: string;
    /**
    * 产品的数据命名空间，可查询DescribeMetricMetaList接口或参考[预设监控项参考](~~28619~~)。
    * @example `acs_ecs_dashboard`
    */ "Namespace"?: string;
    /**
    * 监控项名称。可查询DescribeMetricMetaList接口或参考[预设监控项参考](~~28619~~)。
    * @example `cpu_total`
    */ "MetricName"?: string;
}
export { DescribeMetricRuleCountRequest };