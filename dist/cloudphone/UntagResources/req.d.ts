export interface UntagResourcesRequest {
    /**
     * 地域
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型。取值范围：
     * - instance：弹性云手机实例
     * @example `instance`
     */
    "ResourceType": string;
    /**
     * 是否全部删除，只针对TagKey.N为空时有效。 取值范围： true  false True False  默认是 false
     * @example `true`
     */
    "All"?: boolean;
    /**
     * 资源ID，最多50个子项
     */
    "ResourceId": string[];
    /**
     * 标签键，最多20个子项
     */
    "TagKey"?: string[];
}
