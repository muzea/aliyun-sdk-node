export interface ListDatabasesForUserRequest {
    /**
     * 堡垒机的实例ID。
     * > 可通过调用[DescribeInstances](~~153281~~)接口获取堡垒机实例ID。
     * @example `bastionhost-cn-tl32swayw7o`
     */
    "InstanceId": string;
    /**
     * 堡垒机的地域ID。
     * > 地域ID和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 要查询已授权数据库的用户ID。
     * > 您可以调用[ListUsers](~~204522~~)接口获取该参数。
     * @example `3`
     */
    "UserId": string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
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
     * @example `MySQL-8.0`
     */
    "DatabaseName"?: string;
    /**
     * 指定要查询的数据库地址。仅支持精确查询。
     * @example `47.101.**.**`
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
     * 指定要查询已授权数据库列表的网络域ID。
     * @example `5`
     */
    "NetworkDomainId"?: string;
}
