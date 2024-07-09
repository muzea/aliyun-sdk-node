export interface UntagResourcesRequest {
    /**
     * 资源类型
     * @example `function`
     */
    "ResourceType": string;
    /**
     * 资源标识列表
     */
    "ResourceId": string[];
    /**
     * 要移除的标签。最多指定50个。
     */
    "TagKey"?: string[];
    /**
     * 是否删除所有标签
     * @example `true`
     */
    "All"?: boolean;
}
