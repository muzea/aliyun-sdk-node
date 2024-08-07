export interface ChangeResourceGroupRequest {
    /**
     * 要替换的新的资源组ID。
     * > 资源组是在阿里云账号下进行资源分组管理的一种机制，资源组能够帮助您解决单个云账号内的资源分组和授权管理等复杂性问题。更多信息，请参见[什么是资源管理](~~94475~~)。
     * @example `rg-bp1drpcfz9srr393h****`
     */
    "NewResourceGroupId": string;
    /**
     * 资源类型。取值：
     * - **PHYSICALCONNECTION**：表示高速通道专线实例。
     * - **VIRTUALBORDERROUTER**：表示边界路由器。
     * - **ROUTERINTERFACE**：表示VBR上连。
     * @example `PHYSICALCONNECTION`
     */
    "ResourceType": string;
    /**
     * 待修改资源组的物理专线资源ID。
     * @example `pc-bp16qjewdsunr41m1****`
     */
    "ResourceId": string;
    /**
     * 要修改的资源组所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
