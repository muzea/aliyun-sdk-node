export interface ListAggregateConfigRulesRequest {
    /**
     * 规则运行状态。取值：
     * - ACTIVE：应用中。
     * - DELETING：删除中。
     * - EVALUATING：评估中。
     * - INACTIVE：已停用。
     * @example `ACTIVE`
     */
    "ConfigRuleState"?: string;
    /**
     * 规则合规评估结果。取值：
     * - COMPLIANT：合规。
     * - NON_COMPLIANT：不合规。
     * - NOT_APPLICABLE：不适用。
     * - INSUFFICIENT_DATA：无数据。
     * @example `COMPLIANT`
     */
    "ComplianceType"?: string;
    /**
     * 规则风险等级。取值：
     * - 1：高风险。
     * - 2：中风险。
     * - 3：低风险。
     * @example `1`
     */
    "RiskLevel"?: number;
    /**
     * 规则名称。
     * @example `弹性IP实例带宽满足最低要求`
     */
    "ConfigRuleName"?: string;
    /**
     * 账号组ID。
     * 关于如何获取账号组ID，请参见[ListAggregators](~~255797~~)。
     * @example `ca-f632626622af0079****`
     */
    "AggregatorId": string;
    /**
     * 分页时每页显示的数据行数。
     * 取值范围：1~100。起始值：1。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 页码。
     * 起始值：1。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 查询关键字。
     * 支持对规则ID、规则名称、规则描述和规则模板标识等进行模糊查询。
     * @example `ecs`
     */
    "Keyword"?: string;
    /**
     * 规则评估的资源类型。
     * @example `ACS::ECS::Instance`
     */
    "ResourceTypes"?: string;
}
