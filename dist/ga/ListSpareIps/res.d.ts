export interface ListSpareIpsResponse {
    /**
     * 请求ID。
     * @example `6FEA0CF3-D3B9-43E5-A304-D217037876A8`
     */
    RequestId: string;
    /**
     * CNAME备用IP列表。
     */
    SpareIps: {
        /**
         * CNAME备用IP，当加速区域异常时，流量切换到该IP。
         * @example `47.100.XX.XX`
         */
        SpareIp: string;
        /**
         * CNAME备用IP的状态。取值：
         * - **active**：可用。
         * - **inuse**：使用中。
         * @example `active`
         */
        State: string;
    }[];
}
