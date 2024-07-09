export interface ListTagResourcesRequest {
    /**
     * 下一个查询开始的Token。
     * @example `27AE00`
     */
    "NextToken"?: string;
    /**
     * 地域ID。
     * @example `cn-beijing`
     */
    "RegionId": string;
    /**
     * 资源类型，固定值vvpinstance。
     * @example `vvpinstance`
     */
    "ResourceType": string;
    /**
     * 订单实例ID组。
     */
    "ResourceId"?: string[];
    /**
     * 标签列表，最多包含20个子项
     */
    "Tag"?: {
        /**
         * 标签键
         * @example `test`
         */
        Key: string;
        /**
         * 标签值
         * @example `tag`
         */
        Value: string;
    }[];
}
