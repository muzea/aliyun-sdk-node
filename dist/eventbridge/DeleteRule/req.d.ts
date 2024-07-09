export interface DeleteRuleRequest {
    /**
     * 事件总线的名称。
     * @example `tf-testacc-event-bus`
     */
    "EventBusName": string;
    /**
     * 删除规则的名称。
     * @example `ramrolechange-mns`
     */
    "RuleName": string;
}
