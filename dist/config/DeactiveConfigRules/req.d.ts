export interface DeactiveConfigRulesRequest {
    /**
     * 规则ID。多个规则ID之间用半角逗号（,）分隔。
     * 关于如何获取规则ID，请参见[ListConfigRules](~~169607~~)。
     * @example `cr-19a56457e0d90058****`
     */
    "ConfigRuleIds": string;
}
