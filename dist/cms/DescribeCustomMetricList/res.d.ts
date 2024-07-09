export interface DescribeCustomMetricListResponse {
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `1AF425E4-1DEA-54F2-910A-8117C9686140`
     */
    RequestId: string;
    /**
     * 自定义监控数据查询结果。
     * @example `{\"all\":0,\"size\":10,\"param\":{\"metric\":\"{\\\"metricName\\\":\\\"cpu_total\\\",\\\"groupId\\\":7378****,\\\"project\\\":\\\"acs_customMetric_120886317861****\\\",\\\"dimension\\\":\\\"sampleName1=value1&sampleName2=value2\\\",\\\"status\\\":1}\",\"service\":\"metric-center.aliyun-inc.com\"},\"page\":1,\"list\":[]}`
     */
    Result: string;
}
