export interface ExportDataSourcesRequest {
    /**
     * 目标数据源所在的DataWorks工作空间ID。您可以调用[ListProjects](~~178393~~)接口获取工作空间ID。
     * @example `10000`
     */
    "ProjectId": number;
    /**
     * 待导出的目标数据源名称所包含的关键字。
     * 当前仅支持配置一个关键字。例如，该参数配置为test（即待导出的目标数据源名称所包含的关键字为test），则调用ExportDataSources接口会导出目标工作空间中所有名称包含test的数据源。
     * @example `test`
     */
    "Name"?: string;
    /**
     * 目标数据源的类型。常用的类型如下：
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
     * 目标数据源的子类型。仅当DataSourceType参数配置为RDS时，该参数生效。
     * 当DataSourceType参数配置为RDS时，该参数可以配置为mysql、sqlserver或postgresql。
     * @example `mysql`
     */
    "SubType"?: string;
    /**
     * 目标数据源所属的环境。取值如下：
     * - 0：开发环境。
     * - 1：生产环境。
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
