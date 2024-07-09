export interface ListAggregateRemediationsRequest {
    /**
     * 规则ID。多个规则ID之间用半角逗号（,）分隔。
     * 关于如何获取规则ID，请参见[ListAggregateConfigRules](~~264148~~)。
     * @example `cr-6b7c626622af00b4****`
     */
    "ConfigRuleIds": string;
    /**
     * 账号组ID。
     * 关于如何获取账号组ID，请参见[ListAggregators](~~255797~~)。
     * @example `ca-6b4a626622af0012****`
     */
    "AggregatorId": string;
}
