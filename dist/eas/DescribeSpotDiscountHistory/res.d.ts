export interface DescribeSpotDiscountHistoryResponse {
    /**
     * 请求ID。
     * @example `40325405-579C-4D82***`
     */
    RequestId: string;
    /**
     * 抢占式实例折扣。
     */
    SpotDiscounts: {
        /**
         * 可用区ID。
         * @example `cn-hangzhou-i`
         */
        ZoneId: string;
        /**
         * 抢占式实例折扣。0.1代表一折。
         * @example `0.1`
         */
        SpotDiscount: string;
        /**
         * 此折扣的UTC时间。
         * @example `2024-04-10T10:00:00Z`
         */
        Timestamp: string;
        /**
         * 实例规格。
         * @example `ecs.c7.large`
         */
        InstanceType: string;
    }[];
}
