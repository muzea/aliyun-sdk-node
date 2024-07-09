export interface DescribeDcdnIpaServiceResponse {
    /**
     * GMT时间，变配生效时间，需要与当前时间比较，晚于当前时间才能在前端页面显示。
     * @example `2018-03-31T16:00:00Z`
     */
    ChangingAffectTime: string;
    /**
     * 请求ID。
     * @example `EF2AEBC2-EDBD-41CF-BF64-7E095D42D6EF`
     */
    RequestId: string;
    /**
     * 下次生效的计费类型：
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
     * 开通服务时间，ISO 8601时间格式。
     * @example `2018-03-19T11:16:11Z`
     */
    OpeningTime: string;
    /**
     * 计费类型：
     * - **PayByTraffic**：流量。
     * - **PayByBandwidth**：带宽。
     * - **PayByBandwidth95**：月95。
     * - **PayByBandwidth_monthavg**：月平均带宽。
     * - **PayByBandwidth_month4th**：月第四峰值。
     * - **PayByBandwidth_monthday95avg**：月平均95。
     * - **PayByBandwidth_nighthalf95**：月95夜间减半。
     * @example `PayByBandwidth`
     */
    InternetChargeType: string;
    /**
     * 实例ID。
     * @example `1883927335936173`
     */
    InstanceId: string;
    OperationLocks: {
        /**
         * 业务锁定状态。
         */
        LockReason: {
            /**
             * 锁定原因。例如：**financial**（欠费）。
             * @example `financial`
             */
            LockReason: string;
        }[];
    };
}
