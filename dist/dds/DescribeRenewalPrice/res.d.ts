export interface DescribeRenewalPriceResponse {
    /**
     * 订单信息列表。
     */
    Order: {
        Coupons: {
            /**
             * 优惠券信息列表。
             */
            Coupon: {
                /**
                 * 备注信息。
                 * @example `coupondemo`
                 */
                Description: string;
                /**
                 * 是否选中该优惠券。
                 * @example `true`
                 */
                IsSelected: string;
                /**
                 * 优惠券编码。
                 * @example `youhuiquan_promotion_option_id_for_blank`
                 */
                CouponNo: string;
                /**
                 * 优惠券名称。
                 * @example `youhuiquan111`
                 */
                Name: string;
            }[];
        };
        /**
         * 订单原价。
         * @example `1144.8`
         */
        OriginalAmount: number;
        /**
         * 订单优惠金额。
         * @example `1144.8`
         */
        DiscountAmount: number;
        RuleIds: {
            /**
             * 订单交易信息。
             */
            RuleId: string[];
        };
        /**
         * 订单实际交易价。
         * @example `0`
         */
        TradeAmount: number;
        /**
         * 币种。
         * @example `USD`
         */
        Currency: string;
    };
    /**
     * 请求ID。
     * @example `EFD65226-08CC-4C4D-B6A4-CB3C382F67B0`
     */
    RequestId: string;
    SubOrders: {
        /**
         * 优惠券对应的策略列表。
         */
        SubOrder: {
            /**
             * 订单原价。
             * @example `1144.8`
             */
            OriginalAmount: number;
            /**
             * 订单优惠金额。
             * @example `1144.8`
             */
            DiscountAmount: number;
            RuleIds: {
                /**
                 * 订单交易信息。
                 */
                RuleId: string[];
            };
            /**
             * 订单实际交易价格。
             * @example `0`
             */
            TradeAmount: number;
            /**
             * 实例ID。
             * @example `dds-bp12c5b040dc****`
             */
            InstanceId: string;
        }[];
    };
    Rules: {
        /**
         * 活动规则列表。
         */
        Rule: {
            /**
             * 策略ID。
             * @example `11111111`
             */
            RuleDescId: number;
            /**
             * 策略标题。
             * @example `demo`
             */
            Title: string;
            /**
             * 策略名称。
             * @example `demoname`
             */
            Name: string;
        }[];
    };
}
