export interface ListSensitiveDataAuditLogRequest {
    /**
     * 开始时间，时间格式为yyyy-MM-DD HH:mm:ss。
     * @example `2022-11-18 10:00:00`
     */
    "StartTime": string;
    /**
     * 结束时间，时间格式为yyyy-MM-DD HH:mm:ss。
     * @example `2022-11-18 11:00:00`
     */
    "EndTime": string;
    /**
     * 功能模块，缺省则返回所有功能模块的敏感数据日志。取值如下：
     * - **SQL_CONSOLE**：数据查询
     * - **SQL_CONSOLE_EXPORT**：查询结果导出
     * - **DATA_CHANGE**：数据变更
     * - **DATA_EXPORT**：数据导出
     * @example `SQL_CONSOLE`
     */
    "ModuleName"?: string;
    /**
     * 操作人昵称。
     * @example `ExampleOpUserName`
     */
    "OpUserName"?: string;
    /**
     * 敏感数据所在数据库名。
     * @example `ExampleDbName`
     */
    "DbName"?: string;
    /**
     * 敏感数据所在数据表名。
     * @example `ExampleTableName`
     */
    "TableName"?: string;
    /**
     * 敏感数据字段名。
     * @example `ExampleColumnName`
     */
    "ColumnName"?: string;
    /**
     * 每页数据量。例如：100条。
     * @example `100`
     */
    "PageSize": number;
    /**
     * 开始页码。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 租户ID。
     * @example `3***`
     */
    "Tid"?: number;
}
