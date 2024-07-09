export interface ListConnectionsRequest {
    /**
     * 数据源所在的工作空间ID。您可以通过[ListProjects](~~178393~~)接口获取工作空间ID。
     * @example `76086`
     */
    "ProjectId": number;
    /**
     * 查询的数据源名称。
     * @example `abc`
     */
    "Name"?: string;
    /**
     * 连接串的类型。常用类型枚举如下：
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
    "ConnectionType"?: string;
    /**
     * 连接串的子类型，针对某些父类型type中包含子类型的场景。目前有以下组合：
     * - 父类型：`rds`
     * - 子类型：`mysql`、 `sqlserver`或 `postgresql`。
     * @example `mysql`
     */
    "SubType"?: string;
    /**
     * 数据源的状态。
     * - ENABLED 正常
     * - DISABLED 禁用
     * @example `ENABLED`
     */
    "Status"?: string;
    /**
     * 数据源所属的环境，包括0（开发环境）和1（生产环境）。
     * @example `1`
     */
    "EnvType"?: number;
    /**
     * 每页显示的条数，默认为10条，最大100条。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询页码。取值为大于等于1的正整数。
     * @example `1`
     */
    "PageNumber"?: number;
}
