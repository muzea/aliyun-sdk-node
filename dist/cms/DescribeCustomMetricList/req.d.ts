export interface DescribeCustomMetricListRequest {
    /**
     * 应用分组ID。
     * 关于如何获取应用分组ID，请参见[DescribeMonitorGroups](~~115032~~)。
     * @example `7378****`
     */
    "GroupId"?: string;
    /**
     * 自定义监控项名称。
     * @example `cpu_total`
     */
    "MetricName"?: string;
    /**
     * 维度Map，用于查询指定资源的监控数据。
     *
     * @example `{sampleName1=value1&amp;sampleName2=value2}`
     */
    "Dimension"?: string;
    /**
     * 消息摘要算法，可以产生一个128位（16字节）的散列值，用来校验上报的自定义监控数据的唯一性。
     * @example `97c25982d9745a231276bff27469****`
     */
    "Md5"?: string;
    /**
     * 页码。
     * 起始值：1。默认值：1。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 分页时每页显示的数据行数。
     * 起始值：1。默认值：10。
     * @example `10`
     */
    "PageSize"?: string;
}
