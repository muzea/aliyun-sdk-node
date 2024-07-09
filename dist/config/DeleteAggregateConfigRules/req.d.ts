export interface DeleteAggregateConfigRulesRequest {
    /**
     * 规则ID。多个规则ID之间用半角逗号（,）分隔。
     * 关于如何获取规则ID，请参见[ListAggregateConfigRules](~~264148~~)。
     * @example `cr-4e3d626622af0080****`
     */
    "ConfigRuleIds": string;
    /**
     * 账号组ID。
     * 关于如何获取账号组ID，请参见[ListAggregators](~~255797~~)。
     * @example `ca-a4e5626622af0079****`
     */
    "AggregatorId": string;
}
