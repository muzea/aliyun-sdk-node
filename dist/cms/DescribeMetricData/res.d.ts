export interface DescribeMetricDataResponse {
    /**
     * 状态码。
     * > 200表示成功。
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
     * @example `6A5F022D-AC7C-460E-94AE-B9E75083D027`
     */
    RequestId: string;
    /**
     * 监控数据列表。包括如下信息：
     * - `timestamp`：发生报警的时间戳。
     * - `userId`：发生报警的用户ID。
     * - `instanceId`：发生报警的实例ID。
     * - `Minimum`、`Average`、`Maximum`：报警规则。
     * @example `[{\"timestamp\":1618368900000,\"Average\":95.8291666666667,\"Minimum\":65.48,\"Maximum\":100.0},{\"timestamp\":1618368960000,\"Average\":95.8683333333333,\"Minimum\":67.84,\"Maximum\":100.0}]`
     */
    Datapoints: string;
    /**
     * 监控数据的统计周期。
     * 取值：15、60、900和3600。
     * 单位：秒。
     * @example `60`
     */
    Period: string;
}
