export interface GetRuleRequest {
    /**
     * 事件总线的名称。
     * @example `default`
     */
    "EventBusName": string;
    /**
     * 规则名称。
     * @example `ram-changes`
     */
    "RuleName": string;
}
