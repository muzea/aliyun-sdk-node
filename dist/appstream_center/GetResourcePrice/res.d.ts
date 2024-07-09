export interface GetResourcePriceResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 出错时的错误码。
     * @example `InvalidParameter.ProductType`
     */
    Code: string;
    /**
     * 出错时的错误消息。
     * @example `The parameter ProductType is invalid.`
     */
    Message: string;
    /**
     * 价格对象。
     * 请求参数NodeInstanceType有值时返回此参数。
     */
    PriceModel: {
        /**
         * 价格详情。
         */
        Price: {
            /**
             * 原价。
             * @example `11.00`
             */
            OriginalPrice: string;
            /**
             * 折减的价格，原价减去折减的价格即为实际价格。
             * @example `1.00`
             */
            DiscountPrice: string;
            /**
             * 实际价格，原价减去折减的价格即为实际价格。
             * @example `10.00`
             */
            TradePrice: string;
            /**
             * 币种。
             * @example `CNY`
             */
            Currency: string;
            /**
             * 优惠券元数据。
             */
            Promotions: {
                /**
                 * 优惠券代号。
                 * @example `coupon****`
                 */
                OptionCode: string;
                /**
                 * 优惠券ID。
                 * @example `17440009****`
                 */
                PromotionId: string;
                /**
                 * 优惠券名称。
                 * @example `**优惠`
                 */
                PromotionName: string;
                /**
                 * 优惠券描述。
                 * @example `**活动期间的优惠`
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
             * @example `102002100393****`
             */
            RuleId: number;
            /**
             * 价格计算规则描述。
             * @example `用户优惠`
             */
            Description: string;
        }[];
    };
    /**
     * 价格对象列表。
     * 请求参数AppInstanceType有值时返回此参数。
     */
    PriceList: {
        /**
         * 价格类型。
         * @example `Standby`
         */
        PriceType: string;
        /**
         * 价格详情。
         */
        Price: {
            /**
             * 原价。
             * @example `6700`
             */
            OriginalPrice: string;
            /**
             * 折减的价格，原价减去折减的价格即为实际价格。
             * @example `999.0`
             */
            DiscountPrice: string;
            /**
             * 实际价格，原价减去折减的价格即为实际价格。
             * @example `5278.0`
             */
            TradePrice: string;
            /**
             * 币种。
             * @example `CNY`
             */
            Currency: string;
            /**
             * 优惠券元数据。
             */
            Promotions: {
                /**
                 * 优惠券代号。
                 * @example `coupon****`
                 */
                OptionCode: string;
                /**
                 * 优惠券ID。
                 * @example `1847709****`
                 */
                PromotionId: string;
                /**
                 * 优惠券名称。
                 * @example `**优惠`
                 */
                PromotionName: string;
                /**
                 * 优惠券描述。
                 * @example `**活动期间的优惠`
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
             * @example `260904273633****`
             */
            RuleId: number;
            /**
             * 价格计算规则描述。
             * @example `用户优惠。`
             */
            Description: string;
        }[];
    }[];
}
