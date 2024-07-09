export interface UntagResourcesRequest {
    /**
     * 地域
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 资源类型
     * @example `instance`
     */
    "ResourceType": string;
    /**
     * 是否全部删除，只针对TagKey.N为空时有效。取值范围：
     * true
     * false
     * 默认是 false
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 资源ID，n 的取值范围为 1, 50
     */
    "ResourceId": string[];
    /**
     * 标签键，n 的取值范围为 1, 20。
     */
    "TagKey"?: string[];
}
