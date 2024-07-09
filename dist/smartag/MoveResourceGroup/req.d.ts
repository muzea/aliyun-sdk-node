export interface MoveResourceGroupRequest {
    /**
     * 资源ID。
     * @example `fl-g5w9ty0z36****`
     */
    "ResourceId": string;
    /**
     * 资源类型。取值：
     * - **smartag**：智能接入网关硬件版实例或VCPE版实例。
     * - **smartag_s**：智能接入网关APP实例。
     * - **acl**：访问控制实例。
     * - **flowlog**：流日志实例。
     * - **qos**：QoS策略实例。
     * - **ccn**：云连接网实例。
     * - **abwp**：应用加速带宽包实例。
     * @example `flowlog`
     */
    "ResourceType": string;
    /**
     * 要移动到的资源组ID。
     * 您可以通过[资源管理控制台](https://resourcemanager.console.aliyun.com/resource-groups)查看资源组ID。
     * @example `rg-acfm2iu4fnc****`
     */
    "NewResourceGroupId": string;
    /**
     * 智能接入网关实例所属地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
}
