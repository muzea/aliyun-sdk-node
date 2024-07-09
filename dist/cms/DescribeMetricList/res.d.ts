export interface DescribeMetricListResponse {
    /**
     * 分页游标标识。
     * @example `15761441850009dd70bb64cff1f0fff6d0b08ffff073be5fb1e785e2b020f7fed9b5e137bd810a6d6cff5ae****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `3121AE7D-4AFF-4C25-8F1D-C8226EBB1F42`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 监控数据列表。
     * @example `[{"timestamp":1548777660000,"userId":"120886317861****","instanceId":"i-abc","Minimum":9.92,"Average":9.92,"Maximum":9.92}]`
     */
    Datapoints: string;
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
     * 时间间隔。单位：秒。取值：60、300、900。
     * @example `60`
     */
    Period: string;
}
