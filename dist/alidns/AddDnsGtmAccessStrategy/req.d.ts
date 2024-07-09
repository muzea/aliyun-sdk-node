export interface AddDnsGtmAccessStrategyRequest {
    /**
     * 部分返回参数语言。默认值：en。取值范围：en、zh、ja。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 实例id。
     * @example `instance1`
     */
    "InstanceId": string;
    /**
     * 策略名称。
     * @example `testStrategyName`
     */
    "StrategyName": string;
    /**
     * 解析请求来源。例如：`["default", "drpeng"]`，即全局策略和鹏博士。
     * @example `["default", "drpeng"]`
     */
    "Lines"?: string;
    /**
     * 主地址池类型：
     * - IPV4
     * - IPV6
     * - DOMAIN
     * @example `IPV4`
     */
    "DefaultAddrPoolType": string;
    /**
     * 主地址池集合负载均衡策略：
     * - ALL_RR: 返回全部地址
     * - RATIO：按权重返回地址
     * @example `ALL_RR`
     */
    "DefaultLbaStrategy"?: string;
    /**
     * 主地址池集合最小可用地址数量。
     * @example `1`
     */
    "DefaultMinAvailableAddrNum": number;
    /**
     * 主地址池集合最多返回地址数量。
     * @example `3`
     */
    "DefaultMaxReturnAddrNum"?: number;
    /**
     * 主地址池集合延时解析调度优化：
     * - OPEN：开启
     * - CLOSE：关闭
     * @example `OPEN`
     */
    "DefaultLatencyOptimization"?: string;
    /**
     * 备地址池类型：
     * - IPV4
     * - IPV6
     * - DOMAIN
     * @example `IPV4`
     */
    "FailoverAddrPoolType"?: string;
    /**
     * 备地址池集合负载均衡策略：
     * - ALL_RR: 返回全部地址
     * - RATIO：按权重返回地址
     * @example `ALL_RR`
     */
    "FailoverLbaStrategy"?: string;
    /**
     * 备地址池集合最小可用地址数量。
     * @example `1`
     */
    "FailoverMinAvailableAddrNum"?: number;
    /**
     * 备地址池集合最多返回地址数量。
     * @example `1`
     */
    "FailoverMaxReturnAddrNum"?: number;
    /**
     * 备地址池集合延时解析调度优化：
     * - OPEN：开启
     * - CLOSE：关闭
     * @example `OPEN`
     */
    "FailoverLatencyOptimization"?: string;
    /**
     * 访问策略类型：
     * - GEO：基于地理位置的访问策略
     * - LATENCY：基于访问延时的访问策略
     * @example `GEO`
     */
    "StrategyMode": string;
    /**
     * 主地址池集合列表。
     */
    "DefaultAddrPool": {
        /**
         * 主地址池集合列表中权重。
         * @example `1`
         */
        LbaWeight: number;
        /**
         * 主地址池集合列表中地址池Id。
         * @example `pool1`
         */
        Id: string;
    }[];
    /**
     * 备地址池集合，若未设置备地址池集合，输入"EMPTY"。
     */
    "FailoverAddrPool"?: {
        /**
         * 备地址池集合列表中权重。
         * @example `1`
         */
        LbaWeight: number;
        /**
         * 备地址池集合列表中地址池id。
         * @example `pool1`
         */
        Id: string;
    }[];
}
