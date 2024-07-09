export interface GetResourceRenewPriceResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 价格对象。
     */
    Data: {
        /**
         * 价格详情。
         */
        Price: {
            /**
             * 原价。
             * @example `11
            `
             */
            OriginalPrice: string;
            /**
             * 折减的价格，原价减去折减的价格即为实际价格。
             * @example `1`
             */
            DiscountPrice: string;
            /**
             * 实际价格，原价减去折减的价格即为实际价格。
             * @example `10`
             */
            TradePrice: string;
            /**
             * 币种。
             * @example `CNY`
             */
            Currency: string;
            /**
             * 优惠券描述。
             */
            Promotions: {
                /**
                 * 优惠券代号。
                 * @example `coupon****`
                 */
                OptionCode: string;
                /**
                 * 优惠券ID。
                 * @example `139965*****`
                 */
                PromotionId: string;
                /**
                 * 优惠券名称。
                 * @example `**活动`
                 */
                PromotionName: string;
                /**
                 * 优惠券描述。
                 * @example `**活动`
                 */
                PromotionDesc: string;
                /**
                 * 是否选用优惠券。
                 * @example `true`
                 */
                Selected: boolean;
            }[];
        };
        /**
         * 价格计算规则。
         */
        Rules: {
            /**
             * 价格计算规则ID。
             * @example `20002****`
             */
            RuleId: number;
            /**
             * 价格计算规则描述。
             * @example `**活动`
             */
            Description: string;
        }[];
    };
}
