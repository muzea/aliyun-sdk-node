export interface DescribeDcdnsecServiceResponse {
    /**
     * 服务到期时间。
     * @example `2021-09-26T16:00:00Z`
     */
    EndTime: string;
    /**
     * 服务开通时间。
     * @example `2021-08-26T02:52:08Z`
     */
    StartTime: string;
    /**
     * 下次生效时间，GMT时间。
     * @example `2021-09-30T16:00:00Z`
     */
    ChangingAffectTime: string;
    /**
     * 用安全DCDN服务的加速域名数量。
     * @example `130`
     */
    DomainNum: string;
    /**
     * 下次生效的计费类型。
     * - **PayByTraffic**：流量。
     * - **PayByBandwidth**：带宽。
     * - **PayByBandwidth95**：月95。
     * - **PayByBandwidth_monthavg**：月平均带宽。
     * - **PayByBandwidth_month4th**：月第四峰值。
     * - **PayByBandwidth_monthday95avg**：月平均95。
     * - **PayByBandwidth_nighthalf95**：月95夜间减半。
     * @example `PayByBandwidth`
     */
    ChangingChargeType: string;
    /**
     * 请求ID。
     * @example `E20B46E1-9BCD-10E5-AAEF-6D7B737467A1`
     */
    RequestId: string;
    /**
     * 版本。
     * @example `enterprise`
     */
    Version: string;
    /**
     * 请求数计费模式。
     * @example `PayBySecRequest`
     */
    RequestType: string;
    /**
     * 流量计费模式。
     * @example `PayBySecTraffic`
     */
    FlowType: string;
    /**
     * 当前计费类型。
     * - **PayByTraffic**：流量。
     * - **PayByBandwidth**：带宽。
     * - **PayByBandwidth95**：月95。
     * - **PayByBandwidth_monthavg**：月平均带宽。
     * - **PayByBandwidth_month4th**：月第四峰值。
     * - **PayByBandwidth_monthday95avg**：月平均95。
     * - **PayByBandwidth_nighthalf95**：月95夜间减半。
     * @example `PayByTraffic`
     */
    InternetChargeType: string;
    /**
     * 实例ID。
     * @example `dcdn_dcdnsec_public_cn-123***`
     */
    InstanceId: string;
    OperationLocks: {
        /**
         * 业务锁定状态。
         */
        LockReason: {
            /**
             * 锁定原因。
             * @example ` financial`
             */
            LockReason: string;
        }[];
    };
}
