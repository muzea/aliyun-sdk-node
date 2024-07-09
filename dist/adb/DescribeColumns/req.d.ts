export interface DescribeColumnsRequest {
    /**
     * 实例ID。
     * @example `am-bp1xxxxxxxx47`
     */
    "DBClusterId": string;
    /**
     * 数据库名。
     * @example `adb_demo`
     */
    "SchemaName": string;
    /**
     * 表名。
     * @example `test`
     */
    "TableName": string;
}
