export interface ListTagValuesRequest {
    /**
     * 弹性伸缩资源所属地域的ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 弹性伸缩资源类型。取值：scalinggroup，表示标签绑定的对象是伸缩组。
     * @example `scalinggroup`
     */
    "ResourceType": string;
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    "NextToken"?: string;
    /**
     * 分页查询时设置的每页行数。最大值：50。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 标签键。
     * @example `ESS`
     */
    "Key": string;
}
