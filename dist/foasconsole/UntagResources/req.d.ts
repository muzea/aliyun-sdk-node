export interface UntagResourcesRequest {
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
     * 是否全部删除资源标签，只针对TagKey为空时有效。默认是false。
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 订单实例ID组。
     */
    "ResourceId": string[];
    /**
     * 标签键组，最多20个子项
     */
    "TagKey"?: string[];
}
