export interface AttachAggregateConfigRuleToCompliancePackRequest {
    /**
     * 规则ID。多个规则ID之间用半角逗号（,）分隔。
     * 关于如何获取规则ID，请参见[ListAggregateConfigRules](~~264148~~)。
     * @example `cr-a124626622af00e7****`
     */
    "ConfigRuleIds": string;
    /**
     * 合规包ID。
     * 关于如何获取合规包ID，请参见[ListAggregateCompliancePacks](~~262059~~)。
     * @example `cp-0453626622af0020****`
     */
    "CompliancePackId": string;
    /**
     * 账号组ID。
     * 关于如何获取账号组ID，请参见[ListAggregators](~~255797~~)。
     * @example `ca-75b4626622af00c3****`
     */
    "AggregatorId": string;
}
