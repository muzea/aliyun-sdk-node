export interface UpdateGtmAccessStrategyRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 策略ID。
     * @example `hrmxc`
     */
    "StrategyId": string;
    /**
     * 策略名称。
     * @example `访问策略测试`
     */
    "StrategyName"?: string;
    /**
     * 主地址池集合ID。
     * @example `hrsix`
     */
    "DefaultAddrPoolId"?: string;
    /**
     * 备地址池集合ID。
     * @example `hrsyw`
     */
    "FailoverAddrPoolId"?: string;
    /**
     * 解析请求来源。
     * @example `["default", "mobile"]`
     */
    "AccessLines"?: string;
}
