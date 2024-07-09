export interface StartAggregateConfigRuleEvaluationRequest {
    /**
     * 规则ID。
     * 关于如何获取规则ID，请参见[ListAggregateConfigRules](~~264148~~)。
     * > 参数`CompliancePackId`和`ConfigRuleId`必须二选一。
     * @example `cr-c169626622af009f****`
     */
    "ConfigRuleId"?: string;
    /**
     * 账号组ID。
     * 关于如何获取账号组ID，请参见[ListAggregators](~~255797~~)。
     * @example `ca-3a58626622af0005****`
     */
    "AggregatorId": string;
    /**
     * 是否恢复已忽略的评估结果。取值：
     * - true：恢复已忽略的评估结果。
     * - false（默认值）：不恢复已忽略的评估结果。
     * @example `false`
     */
    "RevertEvaluation"?: boolean;
    /**
     * 合规包ID。
     * 关于如何获取合规包ID，请参见[ListAggregateCompliancePacks](~~262059~~)。
     * > 参数`CompliancePackId`和`ConfigRuleId`必须二选一。
     * @example `cp-ac16626622af0053****`
     */
    "CompliancePackId"?: string;
}
