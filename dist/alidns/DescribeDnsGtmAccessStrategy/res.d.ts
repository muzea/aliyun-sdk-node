export interface DescribeDnsGtmAccessStrategyResponse {
    /**
     * 备地址池集合最小可用地址数量。
     * @example `1`
     */
    FailoverMinAvailableAddrNum: number;
    /**
     * 主地址池类型：
     * - IPV4
     * - IPV6
     * - DOMAIN
     * @example `IPV4`
     */
    DefaultAddrPoolType: string;
    /**
     * 主地址池当前可用地址数量。
     * @example `1`
     */
    DefaultAvailableAddrNum: number;
    /**
     * 访问策略id。
     * @example `hrb5ju`
     */
    StrategyId: string;
    /**
     * 备地址池集合状态：
     * - AVAILABLE：可用
     * - NOT_AVAILABLE：不可用
     * @example `AVAILABLE`
     */
    FailoverAddrPoolGroupStatus: string;
    /**
     * 备地址池当前可用地址数量。
     * @example `1`
     */
    FailoverAvailableAddrNum: number;
    /**
     * 备地址池集合均衡策略：
     * - ALL_RR: 返回全部地址
     * - RATIO：按权重返回地址
     * @example `ALL_RR`
     */
    FailoverLbaStrategy: string;
    /**
     * 主地址池集合最多返回地址数量。
     * @example `1`
     */
    DefaultMaxReturnAddrNum: number;
    /**
     * 访问策略类型：
     * - GEO：基于地理位置的访问策略
     * - LATENCY：基于访问延时的访问策略
     * @example `GEO`
     */
    StrategyMode: string;
    /**
     * 创建时间（时间戳）。
     * @example `1533773400000`
     */
    CreateTimestamp: number;
    /**
     * 主地址池集合均衡策略：
     * - ALL_RR: 返回全部地址
     * - RATIO：按权重返回地址
     * @example `ALL_RR`
     */
    DefaultLbaStrategy: string;
    /**
     * 主地址池集合状态：
     * - AVAILABLE：可用
     * - NOT_AVAILABLE：不可用
     * @example `AVAILABLE`
     */
    DefaultAddrPoolGroupStatus: string;
    /**
     * 备地址池类型：
     * - IPV4
     * - IPV6
     * - DOMAIN
     * @example `IPV4`
     */
    FailoverAddrPoolType: string;
    /**
     * 唯一请求识别码。
     * @example `BA1608CA-834C-4E63-8682-8AF0B11ED72D`
     */
    RequestId: string;
    /**
     * 关联的GTM实例Id。
     * @example `gtm-cn-wwo3a3hbz**`
     */
    InstanceId: string;
    FailoverAddrPools: {
        /**
         * 备地址池集合列表。
         */
        FailoverAddrPool: {
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
             * @example `1`
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
     * 主地址池集合延时解析调度优化：
     * - OPEN：开启
     * - CLOSE：关闭
     * @example `OPEN`
     */
    DefaultLatencyOptimization: string;
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
    DefaultAddrPools: {
        /**
         * 主地址池集合列表。
         */
        DefaultAddrPool: {
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
             * @example `1`
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
     * 主地址池集合最小可用地址数量。
     * @example `1`
     */
    DefaultMinAvailableAddrNum: number;
    /**
     * 备地址池集合延时解析调度优化：
     * - OPEN：开启
     * - CLOSE：关闭
     * @example `OPEN`
     */
    FailoverLatencyOptimization: string;
    /**
     * 访问策略名称。
     * @example `strategyName1`
     */
    StrategyName: string;
    /**
     * 备地址池集合最多返回地址数量。
     * @example `1`
     */
    FailoverMaxReturnAddrNum: number;
    /**
     * 地址池集合切换策略：
     * - AUTO：自动切换
     * - DEFAULT：主地址池集合
     * - FAILOVER： 备地址池集合
     * @example `AUTO`
     */
    AccessMode: string;
    Lines: {
        /**
         * 解析请求来源列表。
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
}
