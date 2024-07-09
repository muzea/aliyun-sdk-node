export interface SetDnsGtmAccessModeRequest {
    /**
     * 部分返回参数语言。默认值：en。取值范围：en、zh、ja。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 策略Id。
     * @example `hr**zb`
     */
    "StrategyId": string;
    /**
     * 地址池集合切换策略：
     * - AUTO： 自动切换
     * - DEFAULT：主地址池集合
     * - FAILOVER： 备地址池集合
     * @example `AUTO`
     */
    "AccessMode": string;
}
