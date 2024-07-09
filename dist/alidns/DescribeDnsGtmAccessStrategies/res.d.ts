export interface DescribeDnsGtmAccessStrategiesResponse {
    /**
     * 分页查询时设置的每页行数，最大值100，默认为20
     * @example `1`
     */
    PageSize: number;
    /**
     * 唯一请求识别码。
     * @example `0CCC9971-CEC9-4132-824B-4AE611C07623`
     */
    RequestId: string;
    /**
     * 当前页数，起始值为**1**，默认为**1**。
     * @example `1`
     */
    PageNumber: number;
    Strategies: {
        /**
         * 策略列表。
         */
        Strategy: {
            /**
             * 当前生效地址池集合均衡策略（StrategyMode为GEO有返回值）：
             * - ALL_RR: 返回全部地址
             * - RATIO：按权重返回地址
             * @example `ALL_RR`
             */
            EffectiveLbaStrategy: string;
            /**
             * 访问策略id。
             * @example `hrb5ju`
             */
            StrategyId: string;
            /**
             * 访问策略名称。
             * @example `strategname1`
             */
            StrategyName: string;
            /**
             * 当前生效地址池集合类型：
             * - DEFAULT：主地址池集合
             * - FAILOVER： 备地址池集合
             * @example `DEFAULT`
             */
            EffectiveAddrPoolGroupType: string;
            /**
             * 创建时间。
             * @example `2018-08-09T00:10Z`
             */
            CreateTime: string;
            EffectiveAddrPools: {
                /**
                 * 当前生效地址池集合列表。
                 */
                EffectiveAddrPool: {
                    /**
                     * 权重。
                     * @example `1`
                     */
                    LbaWeight: number;
                    /**
                     * 地址池名称。
                     * @example `test`
                     */
                    Name: string;
                    /**
                     * 地址数量。
                     * @example `3`
                     */
                    AddrCount: number;
                    /**
                     * 地址池id。
                     * @example `pool1`
                     */
                    Id: string;
                }[];
            };
            /**
             * 创建时间（时间戳）。
             * @example `1533773400000`
             */
            CreateTimestamp: number;
            /**
             * 当前生效地址池类型：
             * - IPV4
             * - IPV6
             * - DOMAIN
             * @example `IPV4`
             */
            EffectiveAddrPoolType: string;
            Lines: {
                /**
                 * 解析请求来源列表（StrategyMode为GEO有返回值）。
                 */
                Line: {
                    /**
                     * 解析请求来源分组名称。
                     * @example `Global`
                     */
                    GroupName: string;
                    /**
                     * 解析请求来源编码。
                     * @example `default`
                     */
                    LineCode: string;
                    /**
                     * 解析请求来源名称。
                     * @example `Global`
                     */
                    LineName: string;
                    /**
                     * 解析请求来源分组编码。
                     * @example `DEFAULT`
                     */
                    GroupCode: string;
                }[];
            };
        }[];
    };
    /**
     * 总页数。
     * @example `11`
     */
    TotalPages: number;
    /**
     * 总个数。
     * @example `11`
     */
    TotalItems: number;
}
