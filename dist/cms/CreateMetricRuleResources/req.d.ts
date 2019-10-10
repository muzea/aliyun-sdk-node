interface CreateMetricRuleResourcesRequest {
    "RegionId"?: string;
    /**
    * 关联的资源，格式为一个json数组，如：
    * ```
    * [{"instanceId":"*****ixxxId1"}]
    * ```
    * 每次最多能添加100个资源实例，一个报警规则最多关联3000个实例。
    * @example `[{"instanceId":"i-a2d5q7pm3f9yr29eaqzm"}]`
    */ "Resources": string;
    /**
    * 报警规则ID。
    * @example `i-2ze3w55tr2rcpejpcfap_59c96b85-0339-4f35-ba66-ae4e34d34347`
    */ "RuleId"?: string;
    /**
    * 是否覆盖，默认false。
    * - true：本次提交的将覆盖掉之前的关联资源,原先报警规则里资源将被先清理
    * - false：本次提交不覆盖之前的关联资源
    * @example `false`
    */ "Overwrite"?: string;
}
export { CreateMetricRuleResourcesRequest };