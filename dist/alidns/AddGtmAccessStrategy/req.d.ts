export interface AddGtmAccessStrategyRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 实例ID。
     * @example `instance1`
     */
    "InstanceId": string;
    /**
     * 策略名称。
     * @example `访问策略测试`
     */
    "StrategyName": string;
    /**
     * 主地址池集合ID。
     * @example `hrsix`
     */
    "DefaultAddrPoolId": string;
    /**
     * 备地址池集合ID。
     * 若未设置备地址池集合，参数输入**EMPTY**。
     * @example `hrsyw`
     */
    "FailoverAddrPoolId": string;
    /**
     * 解析请求来源。
     * @example `["default", "drpeng"]`
     */
    "AccessLines": string;
}
