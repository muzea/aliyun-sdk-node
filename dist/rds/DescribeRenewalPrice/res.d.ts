export interface DescribeRenewalPriceResponse {
    /**
     * 请求ID。
     * @example `DC9F4EF6-D038-4405-B497-1F48E722C9F2`
     */
    RequestId: string;
    /**
     * 价格信息列表。
     */
    PriceInfo: {
        /**
         * 原价。
         * @example `138`
         */
        OriginalPrice: number;
        /**
         * 折扣。
         * @example `27`
         */
        DiscountPrice: number;
        /**
         * 货币单位。
         * @example `CNY`
         */
        Currency: string;
        /**
         * 最终价，为原价减去折扣。
         * @example `111`
         */
        TradePrice: number;
        Coupons: {
            /**
             * 优惠信息列表。
             */
            Coupon: {
                /**
                 * 是否已选择优惠券。
                 * @example `true`
                 */
                IsSelected: string;
                /**
                 * 优惠券编号。
                 * @example `123456`
                 */
                CouponNo: string;
                /**
                 * 优惠券名称。
                 * @example `test`
                 */
                Name: string;
                /**
                 * 优惠券描述。
                 * @example `test`
                 */
                Description: string;
            }[];
        };
        RuleIds: {
            /**
             * 活动ID列表。
             */
            RuleId: string[];
        };
        /**
         * 价格信息。
         */
        ActivityInfo: {
            /**
             * 错误描述。
             * @example `Error description`
             */
            CheckErrMsg: string;
            /**
             * 错误代码。
             * @example ` 123456`
             */
            ErrorCode: string;
            /**
             * 是否成功。
             * @example `Success`
             */
            Success: string;
        };
    };
    Rules: {
        /**
         * 活动规格列表。
         */
        Rule: {
            /**
             * 活动名称。
             * @example `test`
             */
            Name: string;
            /**
             * 活动描述。
             * @example `Activity Description`
             */
            Description: string;
            /**
             * 活动ID。
             * @example `1001199213`
             */
            RuleId: number;
        }[];
    };
}
