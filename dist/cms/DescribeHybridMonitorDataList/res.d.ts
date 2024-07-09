export interface DescribeHybridMonitorDataListResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `end timestamp must not be before start time.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `C240412F-3F5F-50E2-ACEC-DE808EF9C4BE`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: string;
    /**
     * 监控指标的时间线列表。
     */
    TimeSeries: {
        /**
         * 监控指标名称。
         * @example `AliyunEcs_cpu_total`
         */
        MetricName: string;
        /**
         * 时间维度的标签。
         */
        Labels: {
            /**
             * 标签键。
             * @example `instanceId`
             */
            K: string;
            /**
             * 标签值。
             * @example `i-rj99xc6cptkk64ml****`
             */
            V: string;
        }[];
        /**
         * 时间点的值。
         */
        Values: {
            /**
             * 监控指标的值。
             * @example `0.13`
             */
            V: string;
            /**
             * 监控指标值对应的时间戳。
             * 单位：秒。
             * @example `1653804865`
             */
            Ts: string;
        }[];
    }[];
}
