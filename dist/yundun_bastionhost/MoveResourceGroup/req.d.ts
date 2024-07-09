export interface MoveResourceGroupRequest {
    /**
     * 需要更换资源组的堡垒机实例ID。
     * > 您可调用[DescribeInstances](~~153281~~)接口获取堡垒机实例ID。
     * @example `bastionhost-cn-78v1gh****`
     */
    "ResourceId": string;
    /**
     * 需要移入堡垒机实例的资源组ID。
     * > 您可调用[DescribeInstances](~~153281~~)接口获取堡垒机实例的资源组ID。
     * @example `rg-aekznp3oyo****`
     */
    "ResourceGroupId": string;
    /**
     * 资源类型定义。固定取值为**INSTANCE**，表示堡垒机实例。
     * @example `INSTANCE`
     */
    "ResourceType": string;
    /**
     * 堡垒机实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
