export interface DetachInstanceRamRoleRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 收回赋予了某一实例RAM角色的所有ECS实例。您可以使用RAM API [ListRoles](~~28713~~)查询您已创建的实例RAM角色。
     * @example `RamRoleTest`
     */
    "RamRoleName"?: string;
    /**
     * 指定收回的实例ID。取值可以由多个实例ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。
     * @example `["i-bp67acfmxazb4p****", "i-bp67acfmxazb5p****", "i-bp67acfmxazb6p****"…]`
     */
    "InstanceIds": string;
}
