export interface DescribeSchemasResponse {
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    Items: {
        /**
         * 数据库列表。
         */
        Schema: {
            /**
             * 集群ID。
             * @example `am-bp1xxxxxxxx47`
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
