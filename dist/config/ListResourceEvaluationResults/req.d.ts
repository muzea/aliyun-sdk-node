export interface ListResourceEvaluationResultsRequest {
    /**
     * 资源类型。
     * 关于如何获取资源类型，请参见[ListDiscoveredResources](~~169620~~)。
     * @example `ACS::RAM::User`
     */
    "ResourceType"?: string;
    /**
     * 资源ID。
     * 关于如何获取资源ID，请参见[ListDiscoveredResources](~~169620~~)。
     * @example `23642660635396****`
     */
    "ResourceId"?: string;
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
     * 资源归属的地域ID，例如：`global`表示全球，`cn-hangzhou`表示华东1（杭州）。
     * 关于如何获取资源归属的地域ID，请参见[ListDiscoveredResources](~~169620~~)。
     * @example `global`
     */
    "Region"?: string;
}
