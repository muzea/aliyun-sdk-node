export interface GetAggregateResourceComplianceGroupByResourceTypeRequest {
    /**
     * 规则ID。多个规则ID之间用半角逗号（,）分隔。
     * @example `cr-2541626622af0000****`
     */
    "ConfigRuleIds"?: string;
    /**
     * 账号组ID。
     * @example `ca-cdbd626622af0042****`
     */
    "AggregatorId": string;
}
