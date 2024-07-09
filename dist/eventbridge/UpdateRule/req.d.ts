export interface UpdateRuleRequest {
    /**
     * 事件总线的名称。
     * @example `hw-test`
     */
    "EventBusName": string;
    /**
     * 描述信息。
     * @example `demo`
     */
    "Description"?: string;
    /**
     * 事件规则的名称
     * @example `tf-testacc-rule`
     */
    "RuleName": string;
    /**
     * 规则的状态。取值说明如下：
     * ENABLE：规则已启用。规则默认状态。
     * DISABLE：规则已禁用。
     * @example `ENABLE`
     */
    "Status"?: string;
    /**
     * 事件模式，JSON格式。取值说明如下：
     * stringEqual模式。
     * stringExpression模式 。
     * 每个field最多5个expression（map结构）。
     * 每个field最多5个expression（map结构）。
     * @example `{\"source\":[\"acs.oss\"],\"type\":[\"oss:BucketQueried:GetBucketStat\"]}`
     */
    "FilterPattern": string;
}
