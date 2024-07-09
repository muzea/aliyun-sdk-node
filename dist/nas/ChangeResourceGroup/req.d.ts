export interface ChangeResourceGroupRequest {
    /**
     * 可用区所在的地域ID。
     * 您可以调用[DescribeRegions](~~2412111~~)查看最新地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 资源ID。
     * @example `31a8e4****`
     */
    "ResourceId": string;
    /**
     * 新资源组ID。
     * 您可以通过[资源管理控制台](https://resourcemanager.console.aliyun.com/resource-groups?)查看资源组ID。
     * @example `rg-acfmwavnfdf****`
     */
    "NewResourceGroupId": string;
    /**
     * 资源类型。
     * 取值：filesystem（文件系统）
     * @example `filesystem`
     */
    "ResourceType": string;
}
