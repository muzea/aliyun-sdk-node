export interface CopyConfigRulesRequest {
    /**
     * 规则ID列表。多个规则ID之间用半角逗号（,）分隔。
     * @example `cr-4b57626622af0065****,cr-47c1626622af0050****`
     */
    "SrcConfigRuleIds": string;
    /**
     * 待复制规则所属账号组ID。
     * 关于如何获取账号组ID，请参见[ListAggregators](~~255797~~)。
     * @example `ca-24db626622af0060****`
     */
    "SrcAggregatorId"?: string;
    /**
     * 规则复制到的账号组ID。多个账号组ID之间用半角逗号（,）分隔。
     * > 该值为空，表示将规则复制到当前账号。
     * @example `ca-4b4e626622af005d****`
     */
    "DesAggregatorIds"?: string;
}
