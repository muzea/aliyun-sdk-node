export interface EnableRuleRequest {
    /**
     * 事件总线的名称。
     * @example `MyEventBus`
     */
    "EventBusName": string;
    /**
     * 事件规则的名称
     * @example `ramrolechange`
     */
    "RuleName": string;
}
