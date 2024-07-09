export interface UpdateDnsGtmAccessStrategyRequest {
    /**
     * 部分返回参数语言。默认值：en。取值范围：en、zh、ja。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 策略id。
     * @example `
    hrb5ju`
     */
    "StrategyId": string;
    /**
     * 策略名称。
     * @example `test`
     */
    "StrategyName": string;
    /**
     * 访问区域LineCode列表。例如：`["default", "drpeng"]`，即全局策略和鹏博士。
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
     * 主地址池集合均衡策略：
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
     * @example `1`
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
     * 备地址池集合均衡策略：
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
     * 主地址池集合。
     */
    "DefaultAddrPool": {
        /**
         * 主地址池集合列表中权重。
         * @example `1`
         */
        LbaWeight: number;
        /**
         * 主地址池集合列表中地址池id。
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
    /**
     * 地址池集合切换策略：
     * - AUTO： 自动切换
     * - DEFAULT：主地址池集合
     * - FAILOVER： 备地址池集合
     * @example `DEFAULT`
     */
    "AccessMode"?: string;
}
