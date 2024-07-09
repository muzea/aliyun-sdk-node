export interface ListHostGroupAccountNamesForUserGroupRequest {
    /**
     * 指定要查询的用户组所在堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 指定要查询的用户组所在堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定要查询的用户组ID。
     * > 您可以调用[ListUserGroups](~~204509~~)接口获取该参数。
     * @example `1`
     */
    "UserGroupId": string;
    /**
     * 指定要查询的主机组ID。
     * > 您可以调用[ListHostGroups](~~201307~~)接口获取该参数。
     * @example `1`
     */
    "HostGroupId": string;
}
