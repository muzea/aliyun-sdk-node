export interface ListDatabasesRequest {
    /**
     * 指定要查询的堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-7mz28f5tk0o`
     */
    "InstanceId": string;
    /**
     * 指定要查询的堡垒机所在的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
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
     * 指定要查询的数据库类型，取值：
     * - **MySQL**
     * - **Oracle**
     * - **PostgreSQL**
     * - **SQLServer**
     * @example `MySQL`
     */
    "DatabaseType"?: string;
    /**
     * 指定要查询的数据库所属的网络域ID。
     * @example `2`
     */
    "NetworkDomainId"?: string;
    /**
     * 指定要查询数据库的来源。取值：
     * - **Local**：本地数据库实例
     * - **Rds**：RDS类型数据库实例
     * - **PolarDB**: PolarDB类型数据库实例
     * @example `Local`
     */
    "Source"?: string;
    /**
     * 指定要查询的资产组ID。
     * > 您可以调用[ListHostGroups](~~201307~~)接口获取该参数。
     * @example `20`
     */
    "HostGroupId"?: string;
}
