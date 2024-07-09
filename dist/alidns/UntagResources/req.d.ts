export interface UntagResourcesRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 资源类型。
     * @example `DOMAIN`
     */
    "ResourceType": string;
    /**
     * 是否全部删除，默认是false。只针对tagkey数组为空时有效。取值范围：-true-false
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 资源id。
     */
    "ResourceId": string[];
    /**
     * 标签数组。
     */
    "TagKey"?: string[];
}
