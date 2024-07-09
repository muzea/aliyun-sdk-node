export interface DescribePriceResponse {
    /**
     * 订单参数，当OrderParamOut为`true`时返回。
     * @example `String`
     */
    OrderParams: string;
    /**
     * 请求ID。
     * @example `3A40BE4E-1890-4972-889C-FEFA37663635`
     */
    RequestId: string;
    /**
     * 订单信息。
     */
    Order: {
        /**
         * 订单原价。
         * @example `0.21`
         */
        OriginalAmount: string;
        /**
         * 手续费。
         * @example `0.1`
         */
        HandlingFeeAmount: string;
        /**
         * 币种，中国站为CNY（人民币）；国际站为USD（美元）。
         * @example `CNY`
         */
        Currency: string;
        /**
         * 订单优惠金额。
         * @example `0.21`
         */
        DiscountAmount: string;
        /**
         * 订单实际交易价。
         * @example `10`
         */
        TradeAmount: string;
        Coupons: {
            /**
             * 优惠券信息。
             */
            Coupon: {
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
                 * @example `test`
                 */
                Name: string;
                /**
                 * 优惠券描述。
                 * @example `coupondemo`
                 */
                Description: string;
            }[];
        };
        RuleIds: {
            /**
             * 活动ID。
             */
            RuleId: string[];
        };
        /**
         * 是否展示折扣信息。
         */
        ShowDiscountInfo: boolean;
        /**
         * 活动信息。
         */
        DepreciateInfo: {
            /**
             * 目录价。
             * @example `1*`
             */
            ListPrice: number;
            /**
             * 原始官网总价。
             * @example `12*`
             */
            OriginalStandAmount: number;
            /**
             * 降价后官网总价。
             * @example `9*`
             */
            CheapStandAmount: number;
            /**
             * 降价比例。
             * @example `30%`
             */
            CheapRate: number;
            /**
             * 差价优惠（订单总价展示）。
             * @example `**`
             */
            Differential: number;
            /**
             * 差价优惠名称。
             * @example `XXXXX`
             */
            DifferentialName: string;
            /**
             * 折合月价。
             * @example `**`
             */
            MonthPrice: number;
            /**
             * 命中合同优惠。
             * @example `false`
             */
            IsContractActivity: boolean;
            /**
             * 是否展示降价幅度。
             * @example `true`
             */
            IsShow: boolean;
            /**
             * 活动信息。
             */
            ContractActivity: {
                /**
                 * 优惠总费用。
                 * @example `
                `
                 */
                FinalPromFee: number;
                /**
                 * 优惠后费用。
                 * @example `
                `
                 */
                FinalFee: number;
                /**
                 * 原价。
                 */
                ProdFee: number;
                /**
                 * 活动ID。
                 */
                ActivityId: number;
                /**
                 * 优惠ID。
                 */
                OptionCode: string;
                /**
                 * 活动名称。
                 * @example `合同优惠_整单_xxx折`
                 */
                ActivityName: string;
                OptionIds: {
                    /**
                     * 优惠ID列表。
                     */
                    OptionId: number[];
                };
            };
        };
        /**
         * 折扣价格。
         */
        StandDiscountPrice: number;
        /**
         * 命中合同优惠。
         * @example `false
        `
         */
        IsContractActivity: boolean;
        /**
         * 折扣价。
         * @example `0
        `
         */
        StandPrice: number;
        /**
         * 订单码。
         * @example `""
        `
         */
        Code: string;
        /**
         * 订单信息。
         * @example `""`
         */
        Message: string;
    };
    Rules: {
        /**
         * 活动规格。
         */
        Rule: {
            /**
             * 策略ID。
             * @example `1111111111`
             */
            RuleDescId: number;
            /**
             * 策略标题。
             * @example `test`
             */
            Title: string;
            /**
             * 活动名称。
             * @example `test`
             */
            Name: string;
        }[];
    };
    SubOrders: {
        /**
         * 优惠券对应的策略。
         */
        SubOrder: {
            /**
             * 订单原价。
             * @example `0.21`
             */
            OriginalAmount: string;
            /**
             * 实例ID。
             * @example `r-bp1xxxxxxxxxxxxx`
             */
            InstanceId: string;
            /**
             * 订单优惠金额。
             * @example `0.21`
             */
            DiscountAmount: string;
            /**
             * 订单实际交易价。
             * @example `10`
             */
            TradeAmount: string;
            RuleIds: {
                /**
                 * 活动ID。
                 */
                RuleId: string[];
            };
            OptionalPromotions: {
                /**
                 * 可选择的优惠选项列表结果。
                 */
                OptionalPromotion: {
                    /**
                     * 是否外部选中。
                     * @example `false`
                     */
                    Selected: boolean;
                    /**
                     * 是否使用优惠券，取值说明：
                     * - default或null（默认）：使用优惠券。
                     * - youhuiquan_promotion_option_id_for_blank：不使用优惠券。
                     * @example `default`
                     */
                    CouponNo: string;
                    /**
                     * 优惠券名称。
                     */
                    Name: string;
                    /**
                     * 备注。
                     */
                    Description: string;
                    /**
                     * 优惠是否展示。
                     */
                    Show: boolean;
                    /**
                     * 活动额外信息。
                     */
                    ActivityExtInfo: any;
                    /**
                     * 活动额外信息。
                     */
                    OptionCode: string;
                    /**
                     * 优惠名称。
                     */
                    PromotionName: string;
                    /**
                     * 优惠号。
                     */
                    PromotionOptionNo: string;
                    /**
                     * 可优惠价格。
                     */
                    CanPromFee: string;
                }[];
            };
            /**
             * 降价信息。
             */
            DepreciateInfo: {
                /**
                 * 目录价。
                 */
                ListPrice: number;
                /**
                 * 原始官网总价。
                 */
                OriginalStandAmount: number;
                /**
                 * 降价后官网总价。
                 */
                CheapStandAmount: number;
                /**
                 * 降价比例。
                 */
                CheapRate: number;
                /**
                 * 差价优惠（订单总价展示）。
                 */
                Differential: number;
                /**
                 * 差价优惠名称。
                 */
                DifferentialName: string;
                /**
                 * 折合月价。
                 */
                MonthPrice: number;
                /**
                 * 命中合同优惠。
                 */
                IsContractActivity: boolean;
                /**
                 * 合同优惠。
                 */
                ContractActivity: {
                    /**
                     * 优惠总费用。
                     */
                    FinalPromFee: number;
                    /**
                     * 优惠后费用。
                     */
                    FinalFee: number;
                    /**
                     * 原价。
                     */
                    ProdFee: number;
                    /**
                     * 活动id。
                     */
                    ActivityId: number;
                    /**
                     * 优惠id。
                     */
                    OptionCode: string;
                    /**
                     * 活动名称。
                     */
                    ActivityName: string;
                    OptionIds: {
                        /**
                         * 优惠ID列表。
                         */
                        OptionId: number[];
                    };
                };
                /**
                 * 活动开始时间。
                 */
                StartTime: string;
            };
            /**
             * 折扣价格。
             */
            StandDiscountPrice: number;
            /**
             * 命中合同优惠。
             */
            IsContractActivity: boolean;
            /**
             * 折扣价。
             */
            StandPrice: number;
            ModuleInstance: {
                /**
                 * 订单行实例配置。
                 */
                ModuleInstance: {
                    /**
                     * 模块code。
                     */
                    ModuleCode: string;
                    /**
                     * 模块Id。
                     */
                    ModuleId: string;
                    /**
                     * 折扣价。
                     */
                    StandPrice: number;
                    /**
                     * 是否计价项。
                     */
                    PricingModule: boolean;
                    /**
                     * 模块名称。
                     */
                    ModuleName: string;
                    /**
                     * 折扣费用。
                     */
                    DiscountFee: number;
                    /**
                     * 产品原价。
                     * @example `0.0
                    `
                     */
                    TotalProductFee: number;
                    /**
                     * 在订单中是否需要支付。
                     * @example `true`
                     */
                    NeedOrderPay: boolean;
                    /**
                     * 实付金额。
                     * @example `0.0
                    `
                     */
                    PayFee: number;
                    ModuleAttrs: {
                        /**
                         * 模块属性。
                         */
                        moduleAttr: {
                            /**
                             * 属性类型。
                             */
                            Type: number;
                            /**
                             * 属性类型。
                             */
                            Value: string;
                            /**
                             * 属性代码。
                             */
                            Code: string;
                            /**
                             * 属性名称。
                             */
                            Name: string;
                        }[];
                    };
                    /**
                     * 命中合同优惠。
                     */
                    ContractActivity: boolean;
                    /**
                     * 降价信息。
                     */
                    DepreciateInfo: {
                        /**
                         * 目录价。
                         */
                        ListPrice: number;
                        /**
                         * 原始官网总价。
                         */
                        OriginalStandAmount: number;
                        /**
                         * 降价后官网总价。
                         */
                        CheapStandAmount: number;
                        /**
                         * 降价比例。
                         */
                        CheapRate: number;
                        /**
                         * 差价优惠（订单总价展示）。
                         */
                        Differential: number;
                        /**
                         * 差价优惠名称。
                         */
                        DifferentialName: string;
                        /**
                         * 折合月价。
                         */
                        MonthPrice: number;
                        /**
                         * 命中合同优惠。
                         */
                        IsContractActivity: boolean;
                        /**
                         * 是否展示降价幅度。
                         * @example `true`
                         */
                        IsShow: boolean;
                        /**
                         * 活动开始时间。
                         */
                        StartTime: string;
                    };
                }[];
            };
            PromDetailList: {
                /**
                 * 优惠明细信息。
                 */
                PromDetail: {
                    /**
                     * 优惠活动名称。
                     */
                    PromotionName: string;
                    /**
                     * 优惠ID。
                     */
                    PromotionId: number;
                    /**
                     * 优惠金额。
                     */
                    FinalPromFee: number;
                    /**
                     * 优惠券代号。
                     */
                    OptionCode: string;
                    /**
                     * 优惠子类型。
                     */
                    PromType: string;
                    /**
                     * 活动额外信息。
                     */
                    ActivityExtInfo: any;
                    /**
                     * 优惠子类型。
                     */
                    DerivedPromType: string;
                    /**
                     * 优惠码。
                     */
                    PromotionCode: string;
                }[];
            };
            /**
             * 命中合同优惠。
             */
            ContractActivity: boolean;
        }[];
    };
}
