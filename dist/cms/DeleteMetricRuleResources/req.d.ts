interface DeleteMetricRuleResourcesRequest {
    "RegionId"?: string;
    /**
    * 关联的资源，格式为一个json数组，如：
    * ```
    * [{"instanceId":"*****ixxxId1"}]
    * ```
    * @example `[{"instanceId":"*****ixxxId1"}]`
    */ "Resources": string;
    /**
    * 报警规则ID。
    * @example `i-2ze3w55tr2rcpejpcfap_59******1`
    */ "RuleId"?: string;
}
export { DeleteMetricRuleResourcesRequest };