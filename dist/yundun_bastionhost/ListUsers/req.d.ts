export interface ListUsersRequest {
    /**
     * 指定要查询用户列表的堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 指定要查询用户列表的堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定分页查询时，当前页的页码。默认值为**1**。
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
     * 指定要查询的用户登录名称。仅支持精确查询。
     * @example `abc`
     */
    "UserName"?: string;
    /**
     * 指定要查询的用户显示姓名。仅支持精确查询。
     * @example `用户`
     */
    "DisplayName"?: string;
    /**
     * 指定要查询的用户的来源。取值：
     * - **Local**：本地用户
     * - **Ram**：RAM用户
     * - **AD**：AD用户
     * - **LDAP**：LDAP用户
     * @example `Local`
     */
    "Source"?: string;
    /**
     * 指定要查询的用户的手机号码。仅支持精确查询。
     * @example `1359999****`
     */
    "Mobile"?: string;
    /**
     * 指定要查询的用户状态。取值：
     * - **Normal**：正常状态
     * - **Frozen**：被锁定状态
     * - **Expired**：已过期状态
     * @example `Normal`
     */
    "UserState"?: string;
    /**
     * 指定要查询的用户的唯一标识。仅支持精确查询。
     * > 该参数是堡垒机用户对应的RAM用户的唯一标识。新创建用户来源为RAM用户（即**Source**取值为**Ram**）时，该参数生效。您可以调用访问控制的[ListUsers](~~28684~~)接口从返回数据**UserId**获取该参数。
     * @example `122748924538****`
     */
    "SourceUserId"?: string;
    /**
     * 指定要查询的用户组ID。
     * > 您可以调用[ListUserGroups](~~204509~~)接口获取该参数。
     * @example `1`
     */
    "UserGroupId"?: string;
}
