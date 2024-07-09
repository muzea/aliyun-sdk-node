export interface GetResourceConfigurationTimelineRequest {
    /**
     * 资源ID。
     * 关于如何获取资源ID，请参见[ListDiscoveredResources](~~169620~~)。
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
     * 关于如何获取类型，请参见[ListDiscoveredResources](~~169620~~)。
     * @example `ACS::OSS::Bucket`
     */
    "ResourceType": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "Region": string;
    /**
     * 当请求的返回结果被截断时，您可以使用`NextToken`再次发起请求，获取从当前截断位置之后的内容。
     * @example `IWBjqMYSy0is7zSMGu16****`
     */
    "NextToken"?: string;
}
