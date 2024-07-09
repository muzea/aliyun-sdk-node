export interface DeleteConfigRulesRequest {
    /**
     * 规则ID。多个规则ID之间用半角逗号（,）分隔。
     * 关于如何获取规则ID，请参见[ListConfigRules](~~609222~~)。
     * @example `cr-9908626622af0035****`
     */
    "ConfigRuleIds": string;
}
