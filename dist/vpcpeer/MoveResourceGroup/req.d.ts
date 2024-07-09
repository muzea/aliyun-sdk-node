export interface MoveResourceGroupRequest {
    /**
     * 需要修改资源组的对等连接的实例ID。
     * @example `pcc-gu32s92f9ytsk9****`
     */
    "ResourceId": string;
    /**
     * 资源类型。取值：**PeerConnection**，VPC对等连接。
     * @example `PeerConnection`
     */
    "ResourceType": string;
    /**
     * 需要移入对等连接实例的资源组ID。
     * > 资源组是在阿里云账号下进行资源分组管理的一种机制，资源组能够帮助您解决单个云账号内的资源分组和授权管理等复杂性问题。更多信息，请参见[什么是资源管理](~~94475~~)。
     * @example `rg-acfm3peow3k****`
     */
    "NewResourceGroupId": string;
    /**
     * 资源所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
