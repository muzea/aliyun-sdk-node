export interface GetDatabaseSchemaRequest {
    /**
     * 实例id。
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 数据库名称
     * @example `general`
     */
    "database": string;
    /**
     * 表名
     * @example `graph_index_summary_`
     */
    "tableName": string;
}
