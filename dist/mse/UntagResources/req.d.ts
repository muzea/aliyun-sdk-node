export interface UntagResourcesRequest {
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型：
     * - CLUSTER注册配置中心。
     * - GATEWAY云原生网关。
     * @example `CLUSTER`
     */
    "ResourceType": string;
    /**
     * 是否全部删除，只针对TagKey.N为空时有效。
     * 取值范围：
     * - true
     * - false
     * 默认取值为false。
     * @example `true`
     */
    "All"?: boolean;
    /**
     * 资源ID，最多50个子项。
     */
    "ResourceId": string[];
    /**
     * 标签键，最多20个子项。
     */
    "TagKey"?: string[];
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
