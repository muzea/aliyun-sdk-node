export interface ListDatabaseAccountsForUserGroupRequest {
    /**
     * 堡垒机实例的ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-pe334a03o0h`
     */
    "InstanceId": string;
    /**
     * 堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定要查询已授权数据库账户列表的用户组ID。
     * > 您可以调用[ListUserGroups](~~204509~~)接口获取该参数。
     * @example `3`
     */
    "UserGroupId": string;
    /**
     * 指定要查询数据库账户的数据库实例ID。
     * > 您可以调用[ListDatabaseAccounts](~~2758839~~)接口获取该参数。
     * @example `36`
     */
    "DatabaseId": string;
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
     * 指定要查询的数据库账户名称。最多支持128字符，仅支持精确查询。
     * @example `test`
     */
    "DatabaseAccountName"?: string;
}
