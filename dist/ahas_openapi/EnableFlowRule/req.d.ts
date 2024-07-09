export interface EnableFlowRuleRequest {
    /**
     * 流控规则ID。
     * @example `123`
     */
    "RuleId": number;
    "AhasRegionId"?: string;
}
