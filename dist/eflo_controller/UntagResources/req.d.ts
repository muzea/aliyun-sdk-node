export interface UntagResourcesRequest {
    /**
     * 资源类型
     * @example `Cluster`
     */
    "ResourceType": string;
    /**
     * 资源id列表
     */
    "ResourceId": string[];
    /**
     * 地域Id
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 标签键列表
     */
    "TagKey"?: string[];
    /**
     * 是否全部删除，只针对TagKey.N为空时有效。取值范围：
     * - True，全部删除
     * - False，不全部删除
     * 默认是 False
     * @example `False`
     */
    "All"?: boolean;
}
