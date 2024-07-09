export interface ModifyJDBCDataSourceRequest {
    /**
     * 实例所在地域ID。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
    /**
     * 数据源描述。
     * @example `test`
     */
    "DataSourceDescription"?: string;
    /**
     * 数据库类型：
     * - mysql
     * - postgresql
     * - sqlserver
     * @example `mysql`
     */
    "DataSourceType"?: string;
    /**
     * 实例ID。
     * @example `gp-xxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * JDBC连接串。
     * @example `jdbc:mysql://rm-xxx.mysql.rds.aliyuncs.com:3306/testadmin`
     */
    "JDBCConnectionString"?: string;
    /**
     * 用户名。
     * @example `testuser`
     */
    "JDBCUserName"?: string;
    /**
     * 用户密码。
     * @example `testpasswd`
     */
    "JDBCPassword"?: string;
    /**
     * 数据源ID。
     * @example `123`
     */
    "DataSourceId": string;
}
