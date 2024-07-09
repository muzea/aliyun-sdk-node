export interface DescribeDcdnUserBillTypeResponse {
    /**
     * 请求ID。
     * @example `C370DAF1-C838-4288-A1A0-9A87633D248E`
     */
    RequestId: string;
    BillTypeData: {
        /**
         * 用户计费数据列表。
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
             * @example `dcdn`
             */
            Product: string;
            /**
             * 计费模式。取值：
             * - **hour_flow**：小时流量。
             * - **day_bandwidth**：日带宽。
             * - **month_95**：月95。
             * - **month_avg_day_bandwidth**：月均日峰值。
             * - **month_4th_day_bandwidth**：月第四日峰值。
             * - **month_avg_day_95**：月均日95。
             * - **month_95_night_half**：夜间半价95。
             * - **hour_vas**：小时增值服务。
             * - **quic_hour_count**：小时QUIC请求数。
             * - **hour_count**：小时请求次数。
             * - **rtlog_count_day**：实时日志。
             * @example `month_avg_day_bandwidth_overseas`
             */
            BillType: string;
            /**
             * 维度。取值：
             * - **flow**：流量带宽。
             * - **vas**：增值服务（HTTPS、动态请求）。
             * - **websocket**：网络套接字。
             * - **quic**：QUIC请求数。
             * - **rtlog2sls**：实时日志推送SLS。
             * @example `flow`
             */
            Dimension: string;
        }[];
    };
}
