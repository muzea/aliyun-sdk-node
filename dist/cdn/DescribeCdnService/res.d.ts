export interface DescribeCdnServiceResponse {
    /**
     * 下次计费类型生效时间，GMT时间。
     * @example `2019-11-27T16:00:00Z`
     */
    ChangingAffectTime: string;
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
    /**
     * 下次生效的计费类型。
     * - **PayByTraffic**：流量。
     * - **PayByBandwidth**：带宽峰值。
     * @example `PayByTraffic`
     */
    ChangingChargeType: string;
    /**
     * 开通服务时间，ISO 8601时间格式。
     * @example `2019-02-28T13:11:49Z`
     */
    OpeningTime: string;
    /**
     * 当前计费类型。
     * - **PayByTraffic**：流量。
     * - **PayByBandwidth**：带宽峰值。
     * @example `PayByTraffic`
     */
    InternetChargeType: string;
    /**
     * 实例ID。
     * @example `aliuidxx`
     */
    InstanceId: string;
    OperationLocks: {
        /**
         * 业务锁定状态。
         */
        LockReason: {
            /**
             * 业务锁定的原因。financial：欠费。
             * @example `financial`
             */
            LockReason: string;
        }[];
    };
}
