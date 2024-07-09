export interface DescribeInstanceModificationPriceResponse {
    /**
     * 请求ID。
     * @example `A3DC3196-379B-4F32-A2C5-B937134FAD8A`
     */
    RequestId: string;
    /**
     * 价格信息类型（PriceInfo）组成的数据类型，包括价格和优惠规则信息。
     */
    PriceInfo: {
        Rules: {
            /**
             * 活动规则。
             */
            Rule: {
                /**
                 * 活动规则描述。
                 * @example `升级优惠`
                 */
                Description: string;
                /**
                 * 活动ID。
                 * @example `1234567890`
                 */
                RuleId: number;
            }[];
        };
        /**
         * 价格。
         */
        Price: {
            /**
             * 原价。
             * @example `175.200`
             */
            OriginalPrice: number;
            /**
             * 折扣。
             * @example `61.320`
             */
            DiscountPrice: number;
            /**
             * 货币单位。
             * 中国站：CNY。
             * 国际站：USD。
             * @example `CNY`
             */
            Currency: string;
            /**
             * 最终价，为原价减去折扣。
             * @example `113.880`
             */
            TradePrice: number;
        };
    };
}
