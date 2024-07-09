export interface AttachConfigRuleToCompliancePackRequest {
    /**
     * 规则ID。多个规则ID之间用半角逗号（,）分隔。
     * 关于如何获取规则ID，请参见[ListConfigRules](~~169607~~)。
     * @example `cr-6cc4626622af00e7****`
     */
    "ConfigRuleIds": string;
    /**
     * 合规包ID。
     * 关于如何获取合规包ID，请参见[ListCompliancePacks](~~263332~~)。
     * @example `cp-5bb1626622af00bd****`
     */
    "CompliancePackId": string;
}
