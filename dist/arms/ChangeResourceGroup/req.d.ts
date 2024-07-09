export interface ChangeResourceGroupRequest {
    /**
     * 资源的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 需要更换资源组的ARMS资源的ID。
     * @example `ggxw4lnjuz@cfd34a78f******`
     */
    "ResourceId": string;
    /**
     * 新的资源组ID，您可以在资源组控制台查看可用资源组。
     * @example `rg-aek2vezare****`
     */
    "NewResourceGroupId": string;
    /**
     * 需要修改资源组的ARMS资源类型。
     * @example `APPLICATION`
     */
    "ResourceType"?: string;
}
