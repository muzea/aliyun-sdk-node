export interface DescribePriceResponse {
    /**
     *
     * 订单信息列表。
     */
    Order: {
        Coupons: {
            /**
             * 优惠券信息列表。
             */
            Coupon: {
                /**
                 * 备注。
                 * @example `ceshi`
                 */
                Description: string;
                /**
                 * 是否选中该优惠券，取值说明：
                 * - **true**：选中优惠券。
                 * - **false**：不选中优惠券。
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
                PromotionRuleIdList: {
                    /**
                     * 优惠券对应的规则ID列表。
                     */
                    PromotionRuleId: number[];
                };
                /**
                 * 促销信息，促销选项代码。
                 * @example `youhui_quan`
                 */
                PromotionOptionCode: string;
                /**
                 * 优惠券代号。
                 * @example `youhui_quan`
                 */
                OptionCode: string;
                /**
                 * 优惠券的活动类型，取值说明：
                 * - **payondemand**：预付费。
                 * - **payasyougo**：后付费。
                 * @example `payondemand`
                 */
                ActivityCategory: string;
            }[];
        };
        /**
         * 订单原价。
         * @example `322.4`
         */
        OriginalAmount: string;
        /**
         * 订单优惠金额。
         * @example `322.4`
         */
        DiscountAmount: string;
        RuleIds: {
            /**
             * 订单规则信息。
             */
            RuleId: string[];
        };
        /**
         * 订单实际交易价。
         * @example `0`
         */
        TradeAmount: string;
        /**
         * 币种。
         * @example `USD`
         */
        Currency: string;
        /**
         * 是否展示折扣信息。
         * @example `true`
         */
        ShowDiscountInfo: boolean;
        /**
         * 优惠活动信息列表。
         * @example `"[{\"activityCategory\":\"discount\",\"activityExtInfo\":{\"noUseYouhuiquan\":\"true\",\"activityId\":\"191156098xxxx\",\"activityExtraAttr\":\"{\\\"forbiddenCpsProfit\\\":\\\"true\\\",\\\"forbiddenCouponsRestricted\\\":\\\"true\\\",\\\"forbiddenAmbassadorProfit\\\":\\\"true\\\"}\",\"isActivityIdFromWanHuaTong\":\"true\",\"isContractActivity\":\"false\"},\"canPromFee\":906130,\"optionCode\":\"wanhua_activity\",\"promotionName\":\"FY24--MongoDB 副本集--首购--1年*折--ft首购权益\",\"promotionOptionNo\":\"19115609882xxxx\",\"promotionRuleIdList\":[2091xxxx],\"selected\":true,\"targetArticleItemCodes\":[]},{\"activityCategory\":\"discount\",\"activityExtInfo\":{\"activityId\":\"1018040010xxxxx\",\"wanHuaOrderExpireSec\":\"604800\",\"isActivityIdFromWanHuaTong\":\"true\",\"isContractActivity\":\"false\"},\"canPromFee\":339799,\"optionCode\":\"wanhua_activity\",\"promotionName\":\"FY24--MongoDB年付折扣\",\"promotionOptionNo\":\"10180400107xxxxx\",\"promotionRuleIdList\":[xxxxx],\"selected\":false,\"targetArticleItemCodes\":[]}]"`
         */
        OptionalPromotions: string;
        /**
         * 命中的优惠活动。
         * @example `[{\"finalPromFee\":90xxx,\"optionCode\":\"wanhua_activity\",\"promType\":\"discount\",\"promotionId\":2091xxxx,\"promotionName\":\"新用户购买云数据库 MongoDB 副本集1年享*折优惠，限1台\"}]"`
         */
        PromDetailList: string;
        /**
         * 降价信息。
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
            IsShow: string;
            /**
             * 合同优惠。
             */
            ContractActivity: {
                /**
                 * 优惠总费用。
                 * @example `3621.6`
                 */
                FinalPromFee: number;
                /**
                 * 优惠后费用。
                 * @example `20522.4`
                 */
                FinalFee: number;
                /**
                 * 原价。
                 * @example `24144.0`
                 */
                ProdFee: number;
                /**
                 * 活动id。
                 * @example `41120065996xxxxx`
                 */
                ActivityId: number;
                /**
                 * 优惠id。
                 * @example `wanhua_activity`
                 */
                OptionCode: string;
                /**
                 * 活动名称。
                 * @example `合同优惠_整单_xxx折`
                 */
                ActivityName: string;
                OptionIds: {
                    /**
                     * 优惠id列表。
                     */
                    OptionId: number[];
                };
            };
        };
        /**
         * 折扣价格。
         * @example `0`
         */
        StandDiscountPrice: number;
        /**
         * 折扣价。
         * @example `0`
         */
        StandPrice: number;
        /**
         * 命中合同优惠。
         * @example `false`
         */
        ContractActivity: boolean;
        /**
         * 订单码
         * @example `""`
         */
        Code: string;
        /**
         * 订单信息
         * @example `""`
         */
        Message: string;
        /**
         * 命中合同优惠。
         * @example `false`
         */
        IsContractActivity: boolean;
    };
    /**
     * 请求ID。
     * @example `27227A3D-6B86-56F3-9E03-9E60F001CE12`
     */
    RequestId: string;
    SubOrders: {
        /**
         * 优惠券对应的规则列表。
         */
        SubOrder: {
            /**
             * 订单原价。
             * @example `322.4`
             */
            OriginalAmount: string;
            /**
             * 订单优惠金额。
             * @example `322.4`
             */
            DiscountAmount: string;
            RuleIds: {
                /**
                 * 活动规则列表。
                 */
                RuleId: string[];
            };
            /**
             * 订单实际交易价格。
             * @example `0`
             */
            TradeAmount: string;
            /**
             * 实例ID。
             * @example `dds-bp1b6e54e7cc****`
             */
            InstanceId: string;
            /**
             * 降价信息。
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
                IsShow: string;
                /**
                 * 活动信息。
                 */
                ContractActivity: {
                    /**
                     * 优惠总费用。
                     * @example `3621.6`
                     */
                    FinalPromFee: number;
                    /**
                     * 优惠后费用。
                     * @example `20522.4`
                     */
                    FinalFee: number;
                    /**
                     * 原价。
                     * @example `24144.0`
                     */
                    ProdFee: number;
                    /**
                     * 活动ID。
                     * @example `41120065996xxxxx
                    `
                     */
                    ActivityId: number;
                    /**
                     * 优惠ID。
                     * @example `wanhua_activity`
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
                /**
                 * 活动开始时间。
                 * @example `2024-02-29 10:30:00`
                 */
                StartTime: string;
            };
            /**
             * 命中降价优惠。
             * @example `命中降价优惠。`
             */
            IsNewOfficialActivity: string;
            ModuleInstance: {
                /**
                 * 订单行实例配置。
                 */
                ModuleInstance: {
                    /**
                     * 模块的周期费。
                     * @example `0.0`
                     */
                    CycleFee: string;
                    PromDetailList: {
                        /**
                         * 优惠明细信息。
                         */
                        PromDetail: {
                            /**
                             * 优惠金额。
                             * @example `0.0`
                             */
                            FinalPromFee: number;
                            /**
                             * 优惠详情额外信息。
                             * @example `{
                                "activityId": "1512010241743170"
                            }`
                             */
                            ActivityExtInfo: any;
                            /**
                             * 优惠券商品Code。
                             * @example `wanhua_activity`
                             */
                            OptionCode: string;
                            /**
                             * 优惠子类型。
                             * @example `discount`
                             */
                            PromType: string;
                            /**
                             * 优惠活动ID。
                             * @example `8105187xxxx`
                             */
                            PromotionId: number;
                            /**
                             * 促销活动名称。
                             * @example `【xxxx-x月降价项目】MongoDB全规格--xxxxx`
                             */
                            PromotionName: string;
                            /**
                             * 优惠码。
                             * @example `aliwood-xxx`
                             */
                            PromotionCode: string;
                            /**
                             * 优惠子类型。
                             * @example `subPrice`
                             */
                            DerivedPromType: string;
                        }[];
                    };
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
                        IsShow: string;
                    };
                    /**
                     * 折扣费用。
                     * @example `0.0`
                     */
                    DiscountFee: string;
                    ModuleAttrs: {
                        /**
                         * 模块属性。
                         */
                        moduleAttr: {
                            /**
                             * 属性代码。
                             * @example `dds_dbtype`
                             */
                            Code: string;
                            /**
                             * 属性名称。
                             * @example `MongoDB`
                             */
                            Name: string;
                            /**
                             * 属性类型。
                             * @example `3`
                             */
                            Type: string;
                            /**
                             * 属性值。
                             * @example `MongoDB`
                             */
                            Value: string;
                        }[];
                    };
                    /**
                     * 模块code。
                     * @example `dds_dbtype`
                     */
                    ModuleCode: string;
                    /**
                     * 模块Id。
                     * @example `1017110000415xxx`
                     */
                    ModuleId: number;
                    /**
                     * 模块名称。
                     * @example `数据库类型`
                     */
                    ModuleName: string;
                    /**
                     * 在订单中是否需要支付。
                     * @example `true`
                     */
                    NeedOrderPay: boolean;
                    /**
                     * 实付金额。
                     * @example `0.0`
                     */
                    PayFee: number;
                    /**
                     * 是否计价项
                     * @example `false`
                     */
                    PricingModule: boolean;
                    /**
                     * 折扣价。
                     * @example `0`
                     */
                    StandPrice: number;
                    /**
                     * 产品原价。
                     * @example `0.0`
                     */
                    TotalProductFee: number;
                    /**
                     * 命中合同优惠。
                     * @example `false`
                     */
                    ContractActivity: boolean;
                    /**
                     * 优惠价格。
                     * @example `451.00`
                     */
                    StandDiscountPrice: number;
                }[];
            };
            /**
             * 命中合同优惠。
             * @example `false`
             */
            ContractActivity: boolean;
            OptionalPromotions: {
                /**
                 * 可选择的优惠选项列表结果。
                 */
                OptionalPromotion: {
                    /**
                     * 活动类型。
                     * @example `discount`
                     */
                    ActivityCategory: string;
                    /**
                     * 活动额外信息。
                     * @example `{
                        "activityId": "1512010241743170"
                    }`
                     */
                    ActivityExtInfo: any;
                    /**
                     * 可优惠价格
                     * @example `4560789`
                     */
                    CanPromFee: number;
                    /**
                     * 优惠类型。
                     * @example `wanhua_activity`
                     */
                    OptionCode: string;
                    /**
                     * 优惠名称。
                     * @example `【xxx月降价项目】MongoDB全规格--xxx`
                     */
                    PromotionName: string;
                    /**
                     * 优惠号。
                     * @example `1512010241xxxxx`
                     */
                    PromotionOptionNo: string;
                    /**
                     * 是否外部选中。
                     * @example `false`
                     */
                    Selected: boolean;
                    /**
                     * 优惠是否展示。
                     * @example `true`
                     */
                    Show: boolean;
                    TargetArticleItemCodes: {
                        /**
                         * 目标商品规格code列表。
                         */
                        targetArticleItemCode: string[];
                    };
                    PromotionRuleIdList: {
                        /**
                         * 优惠id列表。
                         */
                        promotionRuleId: string[];
                    };
                }[];
            };
            PromDetailList: {
                /**
                 * 优惠明细信息。
                 */
                PromDetail: {
                    /**
                     * 优惠金额。
                     * @example `0.0`
                     */
                    FinalPromFee: number;
                    /**
                     * 活动额外信息。
                     * @example `{
                        "activityId": "1512010241743170"
                    }`
                     */
                    ActivityExtInfo: any;
                    /**
                     * 优惠券代号。
                     * @example `youhui_quan`
                     */
                    OptionCode: string;
                    /**
                     * 优惠子类型。
                     * @example `discount`
                     */
                    PromType: string;
                    /**
                     * 优惠ID。
                     * @example `233xxxxx`
                     */
                    PromotionId: number;
                    /**
                     * 优惠活动名称。
                     * @example `【xxxx-x月降价项目】MongoDB全规格--xxxxx`
                     */
                    PromotionName: string;
                    /**
                     * 优惠码。
                     * @example `ali-wood`
                     */
                    PromotionCode: string;
                    /**
                     * 优惠子类型。
                     * @example `subPrice`
                     */
                    DerivedPromType: string;
                }[];
            };
            /**
             * 折扣价。
             * @example `8687`
             */
            StandDiscountPrice: number;
            /**
             * 折扣价。
             * @example `62982`
             */
            StandPrice: number;
            /**
             * 命中合同优惠。
             * @example `false`
             */
            IsContractActivity: boolean;
        }[];
    };
    /**
     * 调用链ID。
     * @example `27227A3D-6B87-56F3-9E03-9E60F001****`
     */
    TraceId: string;
    /**
     * 订单参数。
     * >仅当**OrderParamOut**参数传入**true**时，返回该参数。
     * @example `{\"autoPay\":false}"`
     */
    OrderParams: string;
    Rules: {
        /**
         * 活动规则列表。
         */
        Rule: {
            /**
             * 策略ID。
             * @example `2075****`
             */
            RuleDescId: number;
            /**
             * 规则标题。
             * @example `demo`
             */
            Title: string;
            /**
             * 规则名称。
             * @example `demoname`
             */
            Name: string;
        }[];
    };
}
