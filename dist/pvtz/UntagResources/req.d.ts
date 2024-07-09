export interface UntagResourcesRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 资源类型：ZONE
     * @example `ZONE`
     */
    "ResourceType": string;
    /**
     * 是否全部删除，只针对TagKey.N为空时有效。默认是 false，取值范围：
     * - true
     * - false
     *
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 资源ID列表，即ZoneId列表。传入内容数量最大值为50。
     */
    "ResourceId": string[];
    /**
     * 资源标签键列表。传入内容数量最大值为20。
     */
    "TagKey"?: string[];
}
