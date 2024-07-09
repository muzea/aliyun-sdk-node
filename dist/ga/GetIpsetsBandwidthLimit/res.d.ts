export interface GetIpsetsBandwidthLimitResponse {
    /**
     * 加速区域的带宽峰值限额。单位为Mbps。
     * @example `20`
     */
    BandwidthLimit: number;
    /**
     * 带宽分配类型。
     * - **ShareBandwidth**：共享带宽。
     * - **ExclusiveBandwidth**：独享带宽。
     * @example `ShareBandwidth`
     */
    BandwidthAllocationType: string;
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
}
