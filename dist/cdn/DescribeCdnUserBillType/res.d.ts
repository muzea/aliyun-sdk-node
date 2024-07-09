export interface DescribeCdnUserBillTypeResponse {
    /**
     * 请求ID。
     * @example `C370DAF1-C838-4288-A1A0-9A87633D248E`
     */
    RequestId: string;
    BillTypeData: {
        /**
         * 用户计费类型返回数据。
         */
        BillTypeDataItem: {
            /**
             * 计费模式结束时间。
             * @example `2018-10-31T16:00:00Z`
             */
            EndTime: string;
            /**
             * 计费模式起始时间。
             * @example `2018-10-30T16:00:00Z`
             */
            StartTime: string;
            /**
             * 计费周期。
             * @example `month`
             */
            BillingCycle: string;
            /**
             * 产品。
             * @example `cdn`
             */
            Product: string;
            /**
             * 计费模式。
             * > 带**_overseas**后缀表示海外不分大区计费，例如："BillType": "month\_avg\_day\_bandwidth\_overseas" 则表明该计费方式为月均日峰值海外不分区计费。
             * 计费模式取值如下所示：
             * - hour_flow：按小时流量计费。
             * - day_bandwidth：按日带宽计费。
             * - month_95：按月结95峰值带宽计费。
             * - month_avg_day_bandwidth：按月均日峰值带宽计费。
             * - month_4th_day_bandwidth：按月第四日峰值带宽计费。
             * - month_avg_day_95：按月均日95峰值带宽计费。
             * - month_95_night_half：按夜间半价95峰值带宽计费。
             * - hour_vas：按小时增值服务计费。
             * - quic_hour_count：按小时QUIC请求数计费。
             * - day_count：按日请求次数计费。
             * - hour_count：按小时请求次数计费。
             * - day_95：按日95峰值带宽计费.
             * @example `month_avg_day_bandwidth_overseas`
             */
            BillType: string;
            /**
             * 维度。取值如下所示：
             * - flow：流量带宽。
             * - vas：增值服务（https、动态请求）。
             * - quic：QUIC 请求数。
             * - websocket：websocket通信协议。
             * - rtlog2sls：实时日志推送sls。
             * - stationflow：流量内网化计费。
             * @example `flow`
             */
            Dimension: string;
        }[];
    };
}
