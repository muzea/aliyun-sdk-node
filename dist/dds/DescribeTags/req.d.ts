export interface DescribeTagsRequest {
    /**
     * 地域ID。您可以通过调用[DescribeRegions](~~61933~~)接口查询。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型，取值固定为**INSTANCE**。
     * @example `INSTANCE`
     */
    "ResourceType"?: string;
    /**
     * 资源组ID。
     * @example `dds-bp17e7a04960****`
     */
    "ResourceGroupId"?: string;
    /**
     * 下一个查询开始Token，用来返回更多结果。
     * >第一次查询不需要提供本参数，如果一次查询没有返回全部结果，则可在后续查询中传入前一次返回的NextToken值以继续查询。
     * @example `212db86****`
     */
    "NextToken"?: string;
}
