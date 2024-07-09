export interface CreateUserGroupRequest {
    /**
     * 要新建用户组的堡垒机实例的ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 要新建用户组的堡垒机的地域ID。
     * > 地域ID和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 要新建的用户组的名称。最多支持128字符。
     * @example `group`
     */
    "UserGroupName": string;
    /**
     * 新建的用户组的备注信息。最多支持500字符。
     * @example `comment`
     */
    "Comment"?: string;
}
