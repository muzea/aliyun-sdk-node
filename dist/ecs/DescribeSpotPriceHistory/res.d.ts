export interface DescribeSpotPriceHistoryResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 价格的货币单位。
     * 中国站：CNY。
     * 国际站：USD。
     * @example `CNY`
     */
    Currency: string;
    /**
     * 下一页开始行，查询下一页的数据。参数`Offset`的指定值为该值。
     * @example `1000`
     */
    NextOffset: number;
    SpotPrices: {
        /**
         * 抢占价格详情。
         */
        SpotPriceType: {
            /**
             * 抢占式实例是否为I/O优化实例。
             * @example `optimized`
             */
            IoOptimized: string;
            /**
             * 抢占式实例所属的可用区ID。
             * @example `cn-hangzhou-c`
             */
            ZoneId: string;
            /**
             * 抢占式实例价格。
             * @example `0.036`
             */
            SpotPrice: number;
            /**
             * 时间格式为`yyyy-MM-ddTHH:mm:ssZ`的价格时间。
             * @example `2019-11-19T06:00:00Z`
             */
            Timestamp: string;
            /**
             * 抢占式实例的网络类型。
             * @example `vpc`
             */
            NetworkType: string;
            /**
             * 抢占式实例的实例规格。
             * @example `ecs.g5.large`
             */
            InstanceType: string;
            /**
             * 按量付费实例部分原价。
             * @example `0.354`
             */
            OriginPrice: number;
        }[];
    };
}
