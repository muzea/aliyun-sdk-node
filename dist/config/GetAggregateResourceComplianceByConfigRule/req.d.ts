export interface GetAggregateResourceComplianceByConfigRuleRequest {
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
     * 关于如何获取规则ID，请参见[ListAggregateConfigRules](~~264148~~)。
     * @example `cr-d369626622af008e****`
     */
    "ConfigRuleId": string;
    /**
     * 账号组ID。
     * 关于如何获取账号组ID，请参见[ListAggregators](~~255797~~)。
     * @example `ca-a4e5626622af0079****`
     */
    "AggregatorId": string;
    /**
     * 账号组内待查询资源所属的阿里云账号ID。
     * > 参数ResourceAccountId和ResourceOwnerId二选一，推荐使用本参数。
     * @example `100931896542****`
     */
    "ResourceAccountId"?: number;
}
