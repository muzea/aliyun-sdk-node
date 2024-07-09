export interface DescribeMetricMetaListRequest {
    /**
     * 云产品的命名空间。
     * 关于云产品的命名空间，请参见[云产品监控项](~~163515~~)。
     * @example `acs_kvstore`
     */
    "Namespace"?: string;
    /**
     * 根据标签过滤资源。是一个JSON的字符串。
     * 格式：`[{"name":"标签键","value":"标签值"},{"name":"标签键","value":"标签值"}] `。已有标签说明如下：
     * - metricCategory：监控项分类描述。
     * - alertEnable：是否需要报警。
     * - alertUnit：建议的报警单位。
     * - unitFactor：单位转换系数。
     * - minAlertPeriod：最小报警周期。
     * - productCategory：产品类型分类。
     * @example `[{"name":"productCategory","value":"kvstore_old"}]`
     */
    "Labels"?: string;
    /**
     * 监控项名称。详情请参见[云产品监控项](~~163515~~)。
     * @example `CPUUtilization`
     */
    "MetricName"?: string;
    /**
     * 分页参数。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页最大数量。默认值：30。
     * @example `30`
     */
    "PageSize"?: number;
}
