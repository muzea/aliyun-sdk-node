export interface ModifyUserGroupRequest {
    /**
     * 指定要修改用户组信息的堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 指定要修改用户组信息的堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定要修改的用户组ID。
     * > 您可以调用[ListUserGroups](~~204509~~)接口获取该参数。
     * @example `1`
     */
    "UserGroupId": string;
    /**
     * 指定修改后的用户组名称。最多支持128字符。
     * @example `TestUserGroup`
     */
    "UserGroupName"?: string;
    /**
     * 指定修改后的用户组备注信息。最多支持500字符。
     * @example `comment`
     */
    "Comment"?: string;
}
