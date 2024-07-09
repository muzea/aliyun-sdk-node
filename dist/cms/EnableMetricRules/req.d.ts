export interface EnableMetricRulesRequest {
    /**
     * 报警规则ID。
     * N的取值范围：1~100。
     * 关于如何获取报警规则ID，请参见[DescribeMetricRuleList](~~114941~~)。
     * @example `ab05733c97b7ce239fb1b53393dc1697c123****`
     */
    "RuleId": string[];
}
