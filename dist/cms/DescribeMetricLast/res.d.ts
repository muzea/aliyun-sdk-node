export interface DescribeMetricLastResponse {
    /**
     * 分页游标标识。
     * @example `xxxxxx`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `021472A6-25E3-4094-8D00-BA4B6A5486C3`
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
     * @example `[{"timestamp":1548777660000,"userId":"123456789876****","instanceId":"i-abcdefgh12****","Minimum":93.1,"Average":99.52,"Maximum":100}]`
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
     * 时间间隔。
     * 单位：秒。
     * @example `60`
     */
    Period: string;
}
