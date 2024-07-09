export interface DescribeTablesResponse {
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    Items: {
        /**
         * 表列表。
         */
        Table: {
            /**
             * 表名称。
             * @example `test`
             */
            TableName: string;
            /**
             * AnalyticDB MySQL数仓版（3.0）集群ID。
             * @example `am-bp1r053byu48p****`
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
