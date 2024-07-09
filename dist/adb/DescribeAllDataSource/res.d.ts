export interface DescribeAllDataSourceResponse {
    /**
     * 请求ID。
     * @example `421794A3-72A5-5D27-9E8B-A75A4C503E17`
     */
    RequestId: string;
    Tables: {
        /**
         * 表信息。
         */
        Table: {
            /**
             * 表名。
             * @example `test`
             */
            TableName: string;
            /**
             * AnalyticDB MySQL数仓版（3.0）集群ID。
             * @example `am-bp1pke2pcfavw****`
             */
            DBClusterId: string;
            /**
             * 数据库名称。
             *
             * @example `adb_demo`
             */
            SchemaName: string;
        }[];
    };
    Columns: {
        /**
         * 列信息。
         */
        Column: {
            /**
             * 列数据类型。
             * @example `bigint`
             */
            Type: string;
            /**
             * 列名
             * @example `id`
             */
            ColumnName: string;
            /**
             * 表名。
             * @example `test`
             */
            TableName: string;
            /**
             * 列是否自增，取值说明：
             * - **true**：自增。
             * - **false**：不自增。
             * @example `true`
             */
            AutoIncrementColumn: boolean;
            /**
             * AnalyticDB MySQL数仓版（3.0）集群ID。
             * @example `am-bp1pke2pcfavw****`
             */
            DBClusterId: string;
            /**
             * 列是否为主键，取值说明：
             * - **true**：主键。
             * - **false**：非主键。
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
    Schemas: {
        /**
         * 数据库信息。
         */
        Schema: {
            /**
             * AnalyticDB MySQL数仓版（3.0）集群ID。
             * @example `am-bp1pke2pcfavw****`
             */
            DBClusterId: string;
            /**
             * 数据库名。
             * @example `adb_demo`
             */
            SchemaName: string;
        }[];
    };
}
