export interface DeleteMetricRuleResourcesRequest {
    /**
     * 报警规则ID。
     * @example `rr-bp18017n6iolv****`
     */
    "RuleId": string;
    /**
     * 报警规则关联的资源。
     * @example `[{"instanceId":"i-uf6hm9lnlzsarrc7****"}]`
     */
    "Resources": string;
}
