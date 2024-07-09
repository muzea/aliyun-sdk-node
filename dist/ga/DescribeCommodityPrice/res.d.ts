export interface DescribeCommodityPriceResponse {
    /**
     * 货币单位。
     * - 中国站：**CNY**。
     * - 国际站：**USD**。
     * @example `CNY`
     */
    Currency: string;
    /**
     * 原价。
     * @example `2099`
     */
    OriginalPrice: number;
    /**
     * 折扣金额。
     * @example `419.8`
     */
    DiscountPrice: number;
    /**
     * 最终价，为原价减去折扣。
     * @example `1679.2`
     */
    TradePrice: number;
    /**
     * 计价模块价格详情。
     */
    OrderDetails: {
        /**
         * 商品Code。
         * @example `ga_gapluspre_public_cn`
         */
        CommodityCode: string;
        /**
         * 商品名称。
         * @example `全球加速_实例规格（包年包月）`
         */
        CommodityName: string;
        /**
         * 原价。
         * @example `2099`
         */
        OriginalPrice: number;
        /**
         * 折扣金额。
         * @example `419.8`
         */
        DiscountPrice: number;
        /**
         * 最终价，为原价减去折扣。
         * @example `1679.2`
         */
        TradePrice: number;
        /**
         * 购买数量。
         * @example `1`
         */
        Quantity: number;
        /**
         * 模块价格信息。
         */
        ModuleDetails: {
            /**
             * 计价模块Code。
             * @example `spec`
             */
            ModuleCode: string;
            /**
             * 计价模块名称。
             * @example `规格`
             */
            ModuleName: string;
            /**
             * 原价。
             * @example `200000.0`
             */
            OriginalPrice: number;
            /**
             * 折扣金额。
             * @example `40000.0`
             */
            DiscountPrice: number;
            /**
             * 优惠金额。
             * @example `160000.0`
             */
            TradePrice: number;
        }[];
        /**
         * 优惠规则ID。
         */
        RuleIds: number[];
        /**
         * 优惠细则。
         * > 中国站不涉及该参数。
         */
        PromDetails: {
            /**
             * 优惠项ID。
             * > 中国站不涉及该参数。
             * @example `50003298014****`
             */
            PromotionId: string;
            /**
             * 优惠项名称。
             * > 中国站不涉及该参数。
             * @example `coupon`
             */
            PromotionName: string;
            /**
             * 优惠价格。
             * > 中国站不涉及该参数。
             * @example `0.01`
             */
            FinalPromFee: number;
            /**
             * 优惠子类型。
             * > 中国站不涉及该参数。
             * @example `deduct`
             */
            PromType: string;
            /**
             * 优惠选项Code。
             * > 中国站不涉及该参数。
             * @example `youhui_quan`
             */
            OptionCode: string;
        }[];
    }[];
    /**
     * 优惠规则详情。
     */
    RuleDetails: {
        /**
         * 优惠规则ID。
         * @example `102104100786****`
         */
        RuleId: string;
        /**
         * 优惠规则名称。
         * @example `GA新客户小型II规格月付-8折优惠`
         */
        RuleName: string;
    }[];
    /**
     * 优惠券列表。
     * > 中国站不涉及该参数。
     */
    Promotions: {
        /**
         * 优惠券号码。
         * >- `youhuiquan_promotion_option_id_for_blank`代表不适用优惠券。
         * >- 中国站不涉及该参数。
         * @example `50003298014****`
         */
        PromotionOptionNo: string;
        /**
         * 优惠券名称。
         * > 中国站不涉及该参数。
         * @example `youhuiquan_promotion_option_id_for_blank`
         */
        PromotionName: string;
        /**
         * 可优惠金额。
         * > 中国站不涉及该参数。
         * @example `0`
         */
        CanPromFee: number;
        /**
         * 是否被选中。
         * - **true**：是。
         * - **false**：否。
         * > 中国站不涉及该参数。
         * @example `false`
         */
        Selected: boolean;
        /**
         * 优惠券商品Code。
         * > 中国站不涉及该参数。
         * @example `youhui_quan`
         */
        OptionCode: string;
    }[];
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
}
