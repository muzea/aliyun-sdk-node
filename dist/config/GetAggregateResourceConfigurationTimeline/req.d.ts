export interface GetAggregateResourceConfigurationTimelineRequest {
    /**
     * 资源ID。
     * 关于如何获取资源ID，请参见[ListAggregateDiscoveredResources](~~265983~~)。
     * @example `new-bucket`
     */
    "ResourceId": string;
    /**
     * 开始时间戳。默认查询发起调用前30天的时间。单位：毫秒。
     * @example `1623211156000`
     */
    "StartTime"?: number;
    /**
     * 结束时间戳。默认查询发起调用时的时间。单位：毫秒。
     * @example `1625821156000`
     */
    "EndTime"?: number;
    /**
     * 单次请求返回结果的最大条数。取值范围：1~100。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 资源类型。
     * 关于如何获取资源类型，请参见[ListAggregateDiscoveredResources](~~265983~~)。
     * @example `ACS::OSS::Bucket`
     */
    "ResourceType": string;
    /**
     * 资源归属的地域ID。
     * 关于如何获取资源归属的地域ID，请参见[ListAggregateDiscoveredResources](~~265983~~)。
     * @example `cn-hangzhou`
     */
    "Region": string;
    /**
     * 账号组ID。
     * 关于如何获取账号组ID，请参见[ListAggregators](~~255797~~)。
     * @example `ca-5885626622af0008****`
     */
    "AggregatorId": string;
    /**
     * 当请求的返回结果被截断时，您可以使用`NextToken`再次发起请求，获取从当前截断位置之后的内容。
     * @example `IWBjqMYSy0is7zSMGu16****`
     */
    "NextToken"?: string;
    /**
     * 账号组内待查询资源所属的阿里云账号ID。
     * @example `100931896542****`
     */
    "ResourceAccountId"?: number;
}
