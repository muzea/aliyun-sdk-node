interface DescribeAlertingMetricRuleResourcesRequest {
    "RegionId"?: string;
    /**
    * 报警规则的ID。GroupId字段和RuleId字段至少需要填写1个字段，2个都填写时，查询同时满足两种查询条件。
    * @example `alarm-uuid1234abc****`
    */ "RuleId"?: string;
    /**
    * 应用分组ID。
    * @example `123456`
    */ "GroupId"?: string;
}
export { DescribeAlertingMetricRuleResourcesRequest };