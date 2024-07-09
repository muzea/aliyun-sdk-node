export interface DescribeLogMonitorAttributeRequest {
    /**
     * 监控项的名称。支持精确匹配。
     * 详情请参见[云产品监控项](~~163515~~)。
     * @example `cpu_total`
     */
    "MetricName": string;
}
