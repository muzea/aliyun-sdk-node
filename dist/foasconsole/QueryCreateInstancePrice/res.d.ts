export interface QueryCreateInstancePriceResponse {
    /**
     * 请求id
     * @example `67F33190-946B-1105-B6A1-E2DF0426DD51`
     */
    RequestId: string;
    /**
     * 是否成功
     */
    Success: boolean;
    /**
     * 价格信息，包括价格和优惠规则。
     */
    PriceInfo: {
        /**
         * 货币单位。
         * @example `CNY`
         */
        Currency: string;
        /**
         * 折扣
         * @example `655.2`
         */
        DiscountAmount: number;
        /**
         * 原价
         * @example `4368`
         */
        OriginalAmount: number;
        /**
         * 最终价，为原价减去折扣。
         * @example `3712.8`
         */
        TradeAmount: number;
        /**
         * 错误码
         * @example `ORDER.INST_HAS_UNPAID_ORDER`
         */
        Code: string;
        /**
         * 错误信息
         * @example `存在未支付订单，请先支付或取消原有订单`
         */
        Message: string;
        /**
         * 优惠券组信息。
         */
        OptionalPromotions: {
            /**
             * 优惠券描述
             * @example `￥1,391.5 优惠券（有效期至 03/23/2022）`
             */
            PromotionDesc: string;
            /**
             * 优惠券名称
             * @example `￥1,391.5 优惠券`
             */
            PromotionName: string;
            /**
             * 优惠券编号
             * @example `500011220010099`
             */
            PromotionOptionNo: string;
            /**
             * 是否选中优惠券。取值如下：
             * - true：选中。
             * - false：未选中。
             * @example `true`
             */
            Selected: boolean;
        }[];
        /**
         * 活动规则。
         */
        Rules: {
            /**
             * 活动规则描述。
             * @example `买满1年，立享官网价格8.5折优惠。`
             */
            Description: string;
            /**
             * 活动ID。
             * @example `587`
             */
            RuleId: number;
        }[];
        /**
         * 官网折扣价/直销合同折扣价
         */
        StandPrice: string;
        /**
         * 基于官网折扣的优惠价格
         */
        StandDiscountPrice: string;
        /**
         * 是否命中大客优惠
         */
        IsContractActivity: boolean;
        /**
         * 降价信息
         */
        DepreciateInfo: {
            /**
             * 原始官网价总价
             */
            OriginalStandAmount: string;
            /**
             * 降价后官网价总价
             */
            CheapStandAmount: string;
            /**
             * 降价比例
             */
            CheapRate: string;
            /**
             * 折合月价
             */
            MonthPrice: string;
            /**
             * 降价开始时间
             */
            StartTime: string;
            /**
             * 是否展示降价幅度
             */
            IsShow: boolean;
        };
    };
}
