export interface DescribeCdnUserBillPredictionResponse {
    /**
     * 预测结束时间。
     * @example `2018-10-25T10:00:00Z`
     */
    EndTime: string;
    /**
     * 预测开始时间。
     * @example `2018-09-30T16:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `C370DAF1-C838-4288-A1A0-9A87633D248E`
     */
    RequestId: string;
    /**
     * 用户计费类型。
     * > 带**_overseas**后缀表示海外不分大区计费，例如： "BillType": "month_avg_day_bandwidth_overseas" 则表明该计费方式为月均日峰值海外不分区计费。
     * 计费模式取值如下所示：
     * - hour_flow：按小时流量计费。
     * - day_bandwidth：按日带宽计费。
     * - month_95：按月95峰值带宽计费。
     * - month_avg_day_bandwidth：按月均日峰值带宽计费。
     * - month_4th_day_bandwidth：按月第四日峰值带宽计费。
     * - month_avg_day_95：按月均日95峰值带宽计费。
     * - month_95_night_half： 按夜间半价95峰值带宽计费。
     * - hour_vas：按小时增值服务计费。
     * - day_count：按日请求次数计费。
     * @example `month_95_overseas`
     */
    BillType: string;
    BillPredictionData: {
        /**
         * 账单预测数据。
         */
        BillPredictionDataItem: {
            /**
             * 预测值。
             * @example `10000`
             */
            Value: number;
            /**
             * 预测值对应的时刻，仅95、夜间半价95和月第四日峰值有这个字段。
             * @example `2018-10-15T16:00:00Z`
             */
            TimeStp: string;
            /**
             * 计费大区。
             * @example `CN`
             */
            Area: string;
        }[];
    };
}
