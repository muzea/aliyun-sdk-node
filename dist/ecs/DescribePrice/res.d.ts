export interface DescribePriceResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 价格信息类型（Price），包括价格和优惠规则。
     */
    PriceInfo: {
        Rules: {
            /**
             * 活动规则。
             */
            Rule: {
                /**
                 * 活动规则描述。
                 * @example `买满1年，立享官网价格8.5折优惠。`
                 */
                Description: string;
                /**
                 * 活动规则ID。
                 * @example `587`
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
             * @example `4368`
             */
            OriginalPrice: number;
            /**
             * 0预付或部分预付的预留实例券的小时价。
             * @example `1`
             */
            ReservedInstanceHourPrice: number;
            /**
             * 折扣。
             * @example `655.2`
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
             * @example `3712.8`
             */
            TradePrice: number;
            DetailInfos: {
                /**
                 * 价格的详细信息。
                 * > 该返回值正在邀测中，暂未开放使用。
                 */
                DetailInfo: {
                    /**
                     * 资源名称。
                     * @example `instance`
                     */
                    Resource: string;
                    /**
                     * 原价。
                     * @example `4368`
                     */
                    OriginalPrice: number;
                    /**
                     * 折扣价。
                     * @example `655.2`
                     */
                    DiscountPrice: number;
                    /**
                     * 成交价。
                     * @example `3712.8`
                     */
                    TradePrice: number;
                    SubRules: {
                        /**
                         * 定价规则子集。
                         */
                        Rule: {
                            /**
                             * 规则子集描述。
                             * @example `买满1年，立享官网价格8.5折优惠`
                             */
                            Description: string;
                            /**
                             * 活动规则ID。
                             * @example `587`
                             */
                            RuleId: number;
                        }[];
                    };
                }[];
            };
        };
        RelatedPrice: {
            MarketplaceImagePrice: {
                Currency: string;
                OriginalPrice: number;
                DiscountPrice: number;
                TradePrice: number;
            };
        };
    };
}
