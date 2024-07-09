export interface UntagResourcesRequest {
    /**
     * 区域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型。取值：cluster。
     * @example `cluster`
     */
    "ResourceType": string;
    /**
     * 资源ID列表。
     * @example `cluster`
     */
    "ResourceIds": string[];
    /**
     * 标签key值。数组元数个数N的取值范围：1~20。
     * @example `["c-b933c5aac8fe****"]`
     */
    "TagKeys"?: string[];
    /**
     * 是否全部删除。只针对**Tagkeys**为空时有效。取值范围：
     * - true：全部删除。
     * - false：不全部删除。
     * 默认值：false。
     * @example `false`
     */
    "All"?: boolean;
}
