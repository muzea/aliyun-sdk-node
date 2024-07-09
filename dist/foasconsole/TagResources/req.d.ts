export interface TagResourcesRequest {
    /**
     * 地域
     * @example `cn-beijing`
     */
    "RegionId": string;
    /**
     * 资源类型，固定值为vvpinstance。
     * @example `vvpinstance`
     */
    "ResourceType": string;
    /**
     * 订单实例ID列表
     */
    "ResourceId": string[];
    /**
     * 标签列表，最多包含20个子项
     */
    "Tag": {
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
