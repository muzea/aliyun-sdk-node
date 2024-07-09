export interface ListDatabasesForUserGroupRequest {
    /**
     * 堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-7mz2ve7h00a`
     */
    "InstanceId": string;
    /**
     * 堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 要查询已授权数据库的用户组ID。
     * @example `2`
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
     * 要查询的数据库实例名称。
     * @example `test`
     */
    "DatabaseName"?: string;
    /**
     * 指定要查询的数据库地址。仅支持精确查询。
     * @example `47.101.**.**
    `
     */
    "DatabaseAddress"?: string;
    /**
     * 指定要查询的数据库类型，取值：
     * - **MySQL**
     * - **Oracle**
     * - **PostgreSQL**
     * - **SQLServer**
     * @example `MySQL`
     */
    "DatabaseType"?: string;
    /**
     * 网络域ID。
     * @example `2`
     */
    "NetworkDomainId"?: string;
}
