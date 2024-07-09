export interface DeleteMetricRuleTargetsRequest {
    /**
     * 报警规则ID。
     * @example `ruleId-xxxxxx`
     */
    "RuleId": string;
    /**
     * 目标ID。
     * @example `12345`
     */
    "TargetIds": string[];
}
