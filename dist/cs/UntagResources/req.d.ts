export interface UntagResourcesRequest {
    /**
     * 资源所属的地域ID。
     * @example `cn-hangzhou`
     */
    "region_id": string;
    /**
     * 资源ID列表。
     */
    "resource_ids": string[];
    /**
     * 资源类型定义。取值范围：只支持`CLUSTER`这一种资源类型。
     * @example `CLUSTER`
     */
    "resource_type": string;
    /**
     * 资源标签键列表。
     */
    "tag_keys": string[];
    /**
     * 是否删除全部自定义标签，仅当`tag_keys`为空时生效。取值范围：
     * - `true`: 删除全部标签。
     * - `false`: 不删除全部标签。
     * @example `true`
     */
    "all"?: boolean;
}
