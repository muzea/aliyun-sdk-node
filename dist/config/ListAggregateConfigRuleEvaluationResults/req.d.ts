export interface ListAggregateConfigRuleEvaluationResultsRequest {
    /**
     * 合规评估结果。取值：
     * - COMPLIANT：合规。
     * - NON_COMPLIANT：不合规。
     * - NOT_APPLICABLE：不适用。
     * - INSUFFICIENT_DATA：无数据。
     * - IGNORED：已忽略。
     * @example `NON_COMPLIANT`
     */
    "ComplianceType"?: string;
    /**
     * 当请求的返回结果被截断时，您可以使用`NextToken`再次发起请求，获取从当前截断位置之后的内容。
     * @example `IWBjqMYSy0is7zSMGu16****`
     */
    "NextToken"?: string;
    /**
     * 单次请求返回结果的最大条数。取值范围：1~100。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 规则ID。
     * 关于如何获取规则ID，请参见[ListAggregateConfigRules](~~264148~~)。
     * @example `cr-888f626622af00ae****`
     */
    "ConfigRuleId"?: string;
    /**
     * 账号组ID。
     * 关于如何获取账号组ID，请参见[ListAggregators](~~255797~~)。
     * @example `ca-b1e6626622af00cb****`
     */
    "AggregatorId": string;
    /**
     * 合规包ID。
     * 关于如何获取合规包ID，请参见[ListAggregateCompliancePacks](~~262059~~)。
     * @example `cp-f1e3326622af00cb****`
     */
    "CompliancePackId"?: string;
    /**
     * 评估资源所属的地域，多个地域之间用半角逗号（,）分隔。
     * @example `cn-shanghai`
     */
    "Regions"?: string;
    /**
     * 评估资源的资源类型，多个资源类型之间用半角逗号（,）分隔。
     * @example `ACS::ECS::Instance`
     */
    "ResourceTypes"?: string;
    /**
     * 评估资源所属的资源组ID，多个资源组ID之间用半角逗号（,）分隔。
     * @example `rg-aek2cqyzvuj****`
     */
    "ResourceGroupIds"?: string;
    /**
     * 账号组内待查询资源所属的阿里云账号ID。
     * > 参数ResourceAccountId和ResourceOwnerId二选一，推荐使用本参数。
     * @example `100931896542****`
     */
    "ResourceAccountId"?: number;
}
