export interface DescribeRenewalPriceResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
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
                 * @example `买满1年，立享官网价格8.5折优惠。`
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
             * @example `4368`
             */
            OriginalPrice: number;
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
                 * 资源定价详情。
                 */
                ResourcePriceModel: {
                    /**
                     * 价格对应的资源名称。
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
                             * 定价规则描述。
                             * @example `买满1年，立享官网价格8.5折优惠。`
                             */
                            Description: string;
                            /**
                             * 定价规则ID。
                             * @example `1234567890`
                             */
                            RuleId: number;
                        }[];
                    };
                }[];
            };
        };
    };
}
