interface DeleteMetricRuleTargetsRequest {
    "RegionId"?: string;
    /**
    * 关联的报警规则ID。
    * @example `ruleId-xxxxxx`
    */ "RuleId": string;
    "TargetIds"?: string[];
}
export { DeleteMetricRuleTargetsRequest };