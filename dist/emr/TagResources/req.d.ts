export interface TagResourcesRequest {
    /**
     * 区域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型。 取值范围：
     * - cluster：集群。
     * @example `cluster`
     */
    "ResourceType": string;
    /**
     * 资源ID列表。数组元素个数N的取值范围：1~1。
     * @example `cluster`
     */
    "ResourceIds": string[];
    /**
     * 绑定的标签列表。
     * @example `[null]`
     */
    "Tags": any[];
}
