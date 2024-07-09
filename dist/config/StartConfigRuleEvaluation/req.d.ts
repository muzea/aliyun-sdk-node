export interface StartConfigRuleEvaluationRequest {
    /**
     * 规则ID。
     * 关于如何获取规则ID，请参见[ListConfigRules](~~609222~~)。
     * > 参数`CompliancePackId`和`ConfigRuleId`必须二选一。
     * @example `cr-9920626622af0035****`
     */
    "ConfigRuleId"?: string;
    /**
     * 是否恢复已忽略的评估结果。取值：
     * - true：恢复已忽略的评估结果。
     * - false（默认值）：不恢复已忽略的评估结果。
     * @example `false`
     */
    "RevertEvaluation"?: boolean;
    /**
     * 合规包ID。
     * 关于如何获取合规包ID，请参见[ListCompliancePacks](~~606968~~)。
     * > 参数`CompliancePackId`和`ConfigRuleId`必须二选一。
     * @example `cp-ac16626622af0053****`
     */
    "CompliancePackId"?: string;
}
