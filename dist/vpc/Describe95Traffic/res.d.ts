export interface Describe95TrafficResponse {
    /**
     * 请求 ID。
     * @example `0ED8D006-F706-4D23-88ED-E11ED28DCAC0`
     */
    RequestId: string;
    /**
     * 增强型95计费共享带宽的带宽统计信息。
     */
    Traffic95Summary: {
        /**
         * 共享带宽实例在所查询时间当天的计费方式。取值
         * - **PayBy95**：按增强型 95 计费。
         * - **PayByBandwidth**：按带宽计费。
         * - **PayByDominantTraffic**：按主流量计费。
         * @example `PayBy95`
         */
        InternetChargeType: string;
        /**
         * 资源 ID。
         * @example `cbwp-wz9j19xrwf78fvz7*****
        `
         */
        InstanceId: string;
        /**
         * 共享带宽实例在所查询时间当天的峰值带宽。单位：Mbps。
         * @example `20000.0`
         */
        Bandwidth: number;
        /**
         * 日峰值带宽，单位为Mbps。
         * <props="china">更多信息，请参见[日峰值带宽](~~89729~~)。</props>
         * @example `1064.244837773641`
         */
        FifthPeakBandwidth: string;
        /**
         * 共享带宽实例在所查询时间当天的保底带宽。单位：Mbps。
         * @example `0.0`
         */
        MinimumConsumeBandwidth: string;
        Traffic95DetailList: {
            /**
             * 入方向和出方向当天每5分钟内的带宽平均值列表。
             */
            Traffic95Detail: {
                /**
                 * 统计时间（字符串）。
                 * @example `2024-01-01T00:00:00Z`
                 */
                Time: string;
                /**
                 * 采样点带宽值，为该时间区间内入方向和出方向中较大的带宽。单位：Mbps。
                 * @example `118.5090322113037`
                 */
                BillBandwidth: string;
                /**
                 * 出方向带宽。单位：Mbps。
                 * @example `96.41217480977376`
                 */
                OutBandwidth: string;
                /**
                 * 入方向带宽。单位：Mbps。
                 * @example `118.5090322113037`
                 */
                InBandwidth: string;
            }[];
        };
    };
}
