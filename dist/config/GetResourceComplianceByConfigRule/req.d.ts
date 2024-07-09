export interface GetResourceComplianceByConfigRuleRequest {
    /**
     * 合规评估结果。取值：
     * - COMPLIANT：合规。
     * - NON_COMPLIANT：不合规。
     * - NOT_APPLICABLE：不适用。
     * - INSUFFICIENT_DATA：无数据。
     * @example `COMPLIANT`
     */
    "ComplianceType"?: string;
    /**
     * 规则ID。
     * 关于如何获取规则ID，请参见[ListConfigRules](~~169607~~)。
     * @example `cr-d369626622af008e****`
     */
    "ConfigRuleId": string;
}
