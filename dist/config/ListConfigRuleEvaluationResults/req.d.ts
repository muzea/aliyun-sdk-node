export interface ListConfigRuleEvaluationResultsRequest {
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
     * 关于如何获取规则ID，请参见[ListConfigRules](~~169607~~)。
     * @example `cr-cac56457e0d900d3****`
     */
    "ConfigRuleId"?: string;
    /**
     * 合规包ID。
     * 关于如何获取合规包ID，请参见[ListCompliancePacks](~~263332~~)。
     * @example `cp-f1e3326622af00cb****`
     */
    "CompliancePackId"?: string;
    /**
     * 评估资源所属地域，多个地域之间用半角逗号（,）分隔。
     * @example `cn-shanghai`
     */
    "Regions"?: string;
    /**
     * 评估资源的资源类型，多个资源类型之间用半角逗号（,）分隔。
     * @example `ACS::ECS::Instane`
     */
    "ResourceTypes"?: string;
    /**
     * 评估资源所属的资源组ID，多个资源组ID之间用半角逗号（,）分隔。
     * @example `rg-aek2indxn3g****`
     */
    "ResourceGroupIds"?: string;
}
