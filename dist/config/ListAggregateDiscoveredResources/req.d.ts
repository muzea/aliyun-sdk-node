export interface ListAggregateDiscoveredResourcesRequest {
    /**
     * 资源ID。
     * @example `eni-hp31cqoba96jagtz****`
     */
    "ResourceId"?: string;
    /**
     * 资源状态。取值：
     * - 0：已删除。如果您已在目标云产品中删除某个资源，则在配置审计的资源列表中显示该资源为**已删除**。
     * - 1（默认值）：保有中。如果您的资源被正常管理，则在配置审计的资源列表中显示该资源为**保有中**。
     * @example `1`
     */
    "ResourceDeleted"?: number;
    /**
     * 单次请求返回结果的最大条数。取值范围：1~100。
     * @example `10`
     */
    "MaxResults": number;
    /**
     * 当请求的返回结果被截断时，您可以使用`NextToken`再次发起请求，获取从当前截断位置之后的内容。
     * @example `IWBjqMYSy0is7zSMGu16****`
     */
    "NextToken"?: string;
    /**
     * 资源类型。多个资源类型之间用半角逗号（,）分隔。
     * @example `ACS::ECS::NetworkInterface`
     */
    "ResourceTypes"?: string;
    /**
     * 资源归属的地域ID。多个地域ID之间用半角逗号（,）分隔。
     * @example `cn-huhehaote`
     */
    "Regions"?: string;
    /**
     * 账号组ID。
     * 关于如何获取账号组ID，请参见[ListAggregators](~~255797~~)。
     * @example `ca-c560626622af0005****`
     */
    "AggregatorId": string;
    /**
     * 账号组内待查询资源所属的阿里云账号ID。
     * @example `100931896542****`
     */
    "ResourceAccountId"?: number;
}
