export interface DescribeContainerGroupPriceResponse {
    /**
     * 请求ID，唯一标识。
     * @example `7A872585-33C7-4D69-AB8E-412E81EBA387`
     */
    RequestId: string;
    /**
     * 价格信息类型（Price），包括价格和优惠规则。
     */
    PriceInfo: {
        SpotPrices: {
            /**
             * 抢占式实例价格信息。
             */
            SpotPrice: {
                /**
                 * 可用区。
                 * @example `cn-hangzhou-i`
                 */
                ZoneId: string;
                /**
                 * 抢占式实例的价格。
                 * @example `0.056`
                 */
                SpotPrice: number;
                /**
                 * 实例规格。
                 * @example `ecs.c5.large`
                 */
                InstanceType: string;
                /**
                 * 原价。
                 * @example `0.622`
                 */
                OriginPrice: number;
            }[];
        };
        /**
         * 价格。
         */
        Price: {
            /**
             * 折扣价。
             * @example `0`
             */
            DiscountPrice: number;
            /**
             * 最终价，为原价减去折扣。
             * @example `0.00012252`
             */
            TradePrice: number;
            /**
             * 原价。
             * @example `0.00012252`
             */
            OriginalPrice: number;
            DetailInfos: {
                /**
                 * 价格的详细信息。
                 */
                DetailInfo: {
                    /**
                     * 资源名称。
                     * @example `cpu`
                     */
                    Resource: string;
                    /**
                     * 折扣价。
                     * @example `0`
                     */
                    DiscountPrice: number;
                    /**
                     * 成交价。
                     * @example `0.000098`
                     */
                    TradePrice: number;
                    /**
                     * 原价。
                     * @example `0.000098`
                     */
                    OriginalPrice: number;
                    Rules: {
                        /**
                         * 定价规则子集。
                         */
                        Rule: {
                            /**
                             * 规则描述。
                             * @example `买满1年，立享官网价格8.5折优惠`
                             */
                            Description: string;
                            /**
                             * 规则ID。
                             * @example `123456`
                             */
                            RuleId: number;
                        }[];
                    };
                }[];
            };
            /**
             * 货币单位。可能值：
             * - CNY：该值仅适用于中国站。
             * - USD：该值仅适用于国际站。
             * @example `CNY`
             */
            Currency: string;
        };
        Rules: {
            /**
             * 活动规则。
             */
            Rule: {
                /**
                 * 活动规则描述。
                 * @example `买满1年，立享官网价格8.5折优惠`
                 */
                Description: string;
                /**
                 * 活动ID。
                 * @example `123456`
                 */
                RuleId: number;
            }[];
        };
    };
}
