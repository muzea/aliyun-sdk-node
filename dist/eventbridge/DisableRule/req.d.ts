export interface DisableRuleRequest {
    /**
     * 事件总线的名称。
     * @example `MyEventBus`
     */
    "EventBusName": string;
    /**
     * 事件规则的名称。
     * @example `tf-testacc-rule`
     */
    "RuleName": string;
}
