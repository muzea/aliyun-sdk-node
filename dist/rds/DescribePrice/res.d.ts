export interface DescribePriceResponse {
    /**
     * 订单参数。
     * >仅当**OrderParamOut**参数传入**true**时，返回该参数。
     * @example `{\"autoPay\":false}"
    `
     */
    OrderParams: string;
    /**
     * 请求ID。
     * @example `CA0ADDDC-0BEB-4381-A3ED-73B4C79B8CC6`
     */
    RequestId: string;
    /**
     * 价格信息。
     */
    PriceInfo: {
        /**
         * 原价。
         * @example `10508`
         */
        OriginalPrice: number;
        /**
         * 折扣。
         * @example `0`
         */
        DiscountPrice: number;
        /**
         * 货币单位。
         * @example `CNY`
         */
        Currency: string;
        /**
         * 最终价，为原价减去折扣。
         * @example `10508`
         */
        TradePrice: number;
        /**
         * 根据用户所选择的最小RCU计算出的每小时费用预估。
         * @example `2**`
         */
        TradeMinRCUAmount: number;
        /**
         * 根据用户所选择的最大RCU计算出的每小时费用预估。
         * @example `1**`
         */
        TradeMaxRCUAmount: number;
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
        /**
         * 订单信息。
         * @example `Order Information`
         */
        OrderLines: string;
    };
    Rules: {
        /**
         * 活动规格列表。
         */
        Rule: {
            /**
             * 活动名称。
             * @example `Rule1`
             */
            Name: string;
            /**
             * 活动描述。
             * @example `Activity Description`
             */
            Description: string;
            /**
             * 活动ID。
             * @example `102002100393****`
             */
            RuleId: number;
        }[];
    };
    /**
     * 是否允许使用折扣。
     * @example `true`
     */
    ShowDiscount: boolean;
    /**
     * 根据用户所选择的最大RCU计算出的每小时费用预估。
     * @example `2**`
     */
    TradeMaxRCUAmount: number;
    /**
     * 根据用户所选择的最小RCU计算出的每小时费用预估。
     * @example `1**`
     */
    TradeMinRCUAmount: number;
    /**
     * Serverless价格信息。
     */
    ServerlessPrice: {
        /**
         * 优惠前总价最小值。
         * @example `2*.*`
         */
        TotalOriginalMinAmount: number;
        /**
         * 优惠前总价最大值。
         * @example `2**.*`
         */
        TotalOriginalMaxAmount: number;
        /**
         * minRCU价格。
         * @example `3*.*`
         */
        RCUOriginalMinAmount: number;
        /**
         * maxRCU价格。
         * @example `2**.*`
         */
        RCUOriginalMaxAmount: number;
        /**
         * minRCU优惠金额。
         * @example `1*.*`
         */
        RCUDiscountMinAmount: number;
        /**
         * maxRCU优惠金额。
         * @example `1**.*`
         */
        RCUDiscountMaxAmount: number;
        /**
         * minRCU交易价格。
         * @example `2*.*`
         */
        TradeMinRCUAmount: number;
        /**
         * maxRCU交易价格。
         * @example `1**.*`
         */
        TradeMaxRCUAmount: number;
        /**
         * 磁盘原始价格。
         * @example `1*`
         */
        StorageOriginalAmount: number;
        /**
         * 磁盘折扣价格。
         * @example `2.*`
         */
        storageDiscountAmount: number;
    };
}
