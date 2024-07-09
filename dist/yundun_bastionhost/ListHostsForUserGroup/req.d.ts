export interface ListHostsForUserGroupRequest {
    /**
     * 指定要查询授权主机列表的用户组所在堡垒机实例的ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 指定要查询授权主机列表的用户组所在堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定要查询的主机列表的模式。取值：
     * - **Authorized**：已授权（默认）
     * - **Unauthorized**：未授权
     * @example `Authorized`
     */
    "Mode"?: string;
    /**
     * 指定要查询授权主机列表的用户组ID。
     * > 您可以调用[ListUserGroups](~~204509~~)接口获取该参数。
     * @example `1`
     */
    "UserGroupId": string;
    /**
     * 指定分页查询时，当前页的页码。默认值为1。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 指定分页查询时，每页显示的数据最大条数。
     * PageSize参数最大取值为100。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回20条数据。
     * > 建议PageSize取值不要为空。
     * @example `20`
     */
    "PageSize"?: string;
    /**
     * 指定要查询的主机地址，可使用域名或IP地址。仅支持精确查询。
     * @example `192.168.XX.XX`
     */
    "HostAddress"?: string;
    /**
     * 指定要查询的主机名称。仅支持精确查询。
     * @example `abc`
     */
    "HostName"?: string;
    /**
     * 指定要查询的主机的操作系统类型。取值：
     * - **Linux**
     * - **Windows**
     * @example `Linux`
     */
    "OSType"?: string;
}
