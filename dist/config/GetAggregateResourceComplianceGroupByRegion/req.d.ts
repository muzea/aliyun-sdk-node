export interface GetAggregateResourceComplianceGroupByRegionRequest {
    /**
     * 规则ID。多个规则ID之间用半角逗号（,）分隔。
     * @example `cr-2652626622af005e****`
     */
    "ConfigRuleIds"?: string;
    /**
     * 账号组ID。
     * @example `ca-d6c9626622af0052****`
     */
    "AggregatorId": string;
}
