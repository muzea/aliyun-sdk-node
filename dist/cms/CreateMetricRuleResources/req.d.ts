export interface CreateMetricRuleResourcesRequest {
    /**
     * 报警规则ID。
     * @example `i-2ze3w55tr2rcpejpcfap_59c96b85-0339-4f35-ba66-ae4e34d3****`
     */
    "RuleId"?: string;
    /**
     * 是否覆盖。取值：
     * - true：覆盖。表示本次提交的资源将覆盖之前的关联资源，即全量修改。
     * - false：不覆盖。 表示本次提交的资源将不覆盖之前的关联资源（关联的结果资源为历史的关联资源加本次提交的资源），即增量修改。
     * @example `false`
     */
    "Overwrite"?: string;
    /**
     * 关联的资源。格式为一个JSON数组。
     * >每次最多添加100个资源实例，一个报警规则最多关联3000个实例。
     * @example `[{"instanceId":"i-a2d5q7pm3f9yr29e****"}]`
     */
    "Resources": string;
}
