export interface DescribeUniBackupDatabaseRequest {
    /**
     * ECS实例名称。
     * @example `test`
     */
    "InstanceName"?: string;
    /**
     * 数据库类型，取值如下：
     * - **MYSQL**
     * - **MSSQL**
     * - **Oracle**
     * @example `MYSQL`
     */
    "DatabaseType"?: string;
    /**
     * 分页查询时，每页显示的数据最大条数。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回20条数据。
     * > 建议PageSize取值不要为空。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 数据库查询类型，取值：
     * - **create**：新建
     * - **restore**：恢复
     * @example `create`
     */
    "QueryType"?: string;
    /**
     * 数据库服务器所在的地域ID。
     * @example `cn-hongkong`
     */
    "UniRegionId"?: string;
}
