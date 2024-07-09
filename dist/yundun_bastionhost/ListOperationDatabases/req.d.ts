export interface ListOperationDatabasesRequest {
    /**
     * 堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-tl32wdd`
     */
    "InstanceId": string;
    /**
     * 堡垒机的地域ID。
     * > 地域ID和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-shanghai`
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
     * 数据库类型，取值如下：
     * - **MySQL**
     * - **SQLServer**
     * - **Oracle**
     * - **PostgreSQL**
     * @example `MySQL`
     */
    "DatabaseType"?: string;
    /**
     * 数据库实例名称。精确搜索。
     * @example `aaa`
     */
    "DatabaseName"?: string;
    /**
     * 数据库实例地址。
     * @example `10.167.XX.XX`
     */
    "DatabaseAddress"?: string;
    /**
     * 数据库实例的来源。取值：
     * - **Local**：本地数据库
     * - **Rds**：RDS数据库
     * - **PolarDB**：PolarDB数据库
     * @example `Local`
     */
    "Source"?: string;
    /**
     * RDS数据库实例ID，精确搜索。
     * @example `i-bp19ienyt0yax748****`
     */
    "SourceInstanceId"?: string;
    /**
     * 按实例状态过滤
     * - **Normal**：正常
     * - **RemoteRelease** ：已释放
     * @example `Normal`
     */
    "SourceInstanceState"?: string;
}
