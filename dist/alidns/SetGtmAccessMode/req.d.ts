export interface SetGtmAccessModeRequest {
    /**
     * 用户语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 策略ID。
     * @example `hra0hx`
     */
    "StrategyId": string;
    /**
     * 目标访问策略。取值：
     * - **AUTO**： 自动切换
     * - **DEFAULT**：默认地址池
     * - **FAILOVER**： failover地址池
     * @example `AUTO`
     */
    "AccessMode": string;
}
