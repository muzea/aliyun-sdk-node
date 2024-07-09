export interface DescribeColumnsResponse {
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    Items: {
        /**
         * 列列表。
         */
        Column: {
            /**
             * 列数据类型。
             * @example `bigint`
             */
            Type: string;
            /**
             * 列名。
             * @example `id`
             */
            ColumnName: string;
            /**
             * 表名。
             * @example `test`
             */
            TableName: string;
            /**
             * 是否自增。
             * @example `true`
             */
            AutoIncrementColumn: boolean;
            /**
             * 实例ID。
             * @example `am-bp1xxxxxxxx47`
             */
            DBClusterId: string;
            /**
             * 是否主键。
             * @example `false`
             */
            PrimaryKey: boolean;
            /**
             * 数据库名。
             * @example `adb_demo`
             */
            SchemaName: string;
        }[];
    };
}
