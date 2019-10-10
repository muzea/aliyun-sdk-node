interface PutMetricRuleTargetsRequest {
    "RegionId"?: string;
    "Targets": string[];
    /**
    * 对应报警规则的ID。
    * @example `rulexx12346`
    */ "RuleId": string;
}
export { PutMetricRuleTargetsRequest };