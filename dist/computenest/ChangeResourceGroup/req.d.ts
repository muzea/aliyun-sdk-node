export interface ChangeResourceGroupRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 需要修改资源组的云资源的资源ID。
     * @example `si-5dc794a7fd254e******`
     */
    "ResourceId"?: string;
    /**
     * 要移动到的资源组ID。
     * 您可以通过[资源管理控制台](https://resourcemanager.console.aliyun.com/resource-groups)查看资源组ID。
     * @example `rg-acfmzmhzo******`
     */
    "NewResourceGroupId"?: string;
    /**
     * 资源类型。可能的值：
     * - service：服务。
     * - serviceinstance：服务实例。
     * @example `service`
     */
    "ResourceType"?: string;
}
