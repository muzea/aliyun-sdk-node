export interface StartAggregateRemediationRequest {
    /**
     * 规则ID。
     * 关于如何获取规则ID，请参见[ListAggregateConfigRules](~~264148~~)。
     * @example `cr-6b7c626622af00b4****`
     */
    "ConfigRuleId": string;
    /**
     * 账号组ID。
     * 关于如何获取账号组ID，请参见[ListAggregators](~~255797~~)。
     * @example `ca-6b4a626622af0012****`
     */
    "AggregatorId": string;
    /**
     * 要执行修正的资源归属的阿里云账号ID，该参数为空时表示修正账号组内所有账号的不合规资源。
     * > 该账号只能是当前企业管理账号或当前企业管理账号中的成员账号。
     * @example `100271897542****`
     */
    "ResourceAccountId"?: number;
}
