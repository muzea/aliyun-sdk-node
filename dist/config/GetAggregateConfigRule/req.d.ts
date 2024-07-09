export interface GetAggregateConfigRuleRequest {
    /**
     * 规则ID。
     * 关于如何获取规则ID，请参见[ListAggregateConfigRules](~~264148~~)。
     * @example `cr-7f7d626622af0041****`
     */
    "ConfigRuleId": string;
    /**
     * 账号组ID。
     * 关于如何获取账号组ID，请参见[ListAggregators](~~255797~~)。
     * @example `ca-7f00626622af0041****`
     */
    "AggregatorId": string;
}
