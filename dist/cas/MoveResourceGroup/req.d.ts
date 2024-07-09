export interface MoveResourceGroupRequest {
    /**
     * 资源ID。
     * @example `cas-cn-4591d3xa****`
     */
    "ResourceId": string;
    /**
     * 资源分组ID。
     * @example `rg-acfmykgxu5d46ey`
     */
    "ResourceGroupId": string;
    /**
     * 资源的类型。  默认值：**instance**。
     * @example `instance`
     */
    "ResourceType": string;
    /**
     * 证书所有者所属组织的地域。目前仅支持ap-southeast-1（新加坡）和cn-hangzhou（杭州）
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
