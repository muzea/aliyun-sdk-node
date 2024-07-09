export interface DescribeBandwidthLimitationResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    Bandwidths: {
        /**
         * 公网带宽上限信息组成的集合。
         */
        Bandwidth: {
            /**
             * 公网带宽的计费方式。可能值：
             * - PayByBandwidth：按固定带宽计费。
             * - PayByTraffic：按使用流量计费。
             * @example `PayByTraffic`
             */
            InternetChargeType: string;
            /**
             * 公网带宽最大值。
             * @example `100`
             */
            Max: number;
            /**
             * 公网带宽最小值。
             * @example `0`
             */
            Min: number;
            /**
             * 公网带宽单位。
             * @example `Mbps`
             */
            Unit: string;
        }[];
    };
}
