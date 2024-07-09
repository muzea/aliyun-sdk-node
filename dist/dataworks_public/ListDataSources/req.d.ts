export interface ListDataSourcesRequest {
    /**
     * 数据源所在的DataWorks工作空间ID。您可以通过[ListProjects](~~2780068~~)接口获取工作空间ID。
     * @example `1`
     */
    "ProjectId": number;
    /**
     * 查询的数据源名称。
     * @example `test`
     */
    "Name"?: string;
    /**
     * 数据源的类型。常用的类型如下：
     * - odps
     * - mysql
     * - rds
     * - oss
     * - sqlserver
     * - polardb
     * - oracle
     * - mongodb
     * - emr
     * - postgresql
     * - analyticdb_for_mysql
     * - hybriddb_for_postgresql
     * - holo
     * @example `rds`
     */
    "DataSourceType"?: string;
    /**
     * 数据源的子类型。仅当DataSourceType参数配置为RDS时，该参数生效。
     * 当DataSourceType参数配置为RDS时，该参数可以配置为mysql、sqlserver或postgresql。
     * @example `mysql`
     */
    "SubType"?: string;
    /**
     * 数据源的状态。取值如下：
     * - ENABLED，正常。
     * - DISABLED，禁用。
     * @example `ENABLED`
     */
    "Status"?: string;
    /**
     * 数据源所属的环境，包括0（开发环境）和1（生产环境）。
     * @example `1`
     */
    "EnvType"?: number;
    /**
     * 每页显示的条数，默认为10条，最大为100条。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询的页码。取值为大于等于1的正整数。
     * @example `1`
     */
    "PageNumber"?: number;
}
