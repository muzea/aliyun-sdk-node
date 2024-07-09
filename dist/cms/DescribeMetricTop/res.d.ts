export interface DescribeMetricTopResponse {
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The specified resource is not found.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `3121AE7D-4AFF-4C25-8F1D-C8226EBB1F42`
     */
    RequestId: string;
    /**
     * 监控数据列表。
     * @example `[{\"order\":1,\"timestamp\":1620287520000,\"userId\":\"120886317861****\",\"instanceId\":\"i-j6ccf7d5fn335qpo****\",\"Average\":99.92,\"Minimum\":99.5,\"Maximum\":100.0,\"_count\":1.0},{\"order\":2,\"timestamp\":1620287520000,\"userId\":\"120886317861****\",\"instanceId\":\"i-0xii2bvf42iqvxbp****\",\"Average\":99.91,\"Minimum\":99.0,\"Maximum\":100.0,\"_count\":1.0}]`
     */
    Datapoints: string;
    /**
     * 监控数据的统计周期。单位：秒。取值：15、60、900和3600。
     * @example `60`
     */
    Period: string;
}
