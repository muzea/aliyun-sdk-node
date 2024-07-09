export interface UntagResourcesRequest {
    /**
     * 资源类型
     * instance 节省计划实例
     * @example `instance`
     */
    "ResourceType": string;
    /**
     * 是否全部删除，仅当未传入tagkey.n时有效。取值范围：-true-false
     * @example `true`
     */
    "All"?: boolean;
    /**
     * 资源id列表
     */
    "ResourceId": string[];
    /**
     * 标签键列表
     */
    "TagKey"?: string[];
}
