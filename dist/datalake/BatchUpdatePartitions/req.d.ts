export interface BatchUpdatePartitionsRequest {
    /**
     * HTTP 请求体（HTTP BODY）内容，均采用JSON格式
     */
    "Body"?: {
        /**
         *
         * 数据库分类命名空间，默认填写主账号Uid
         * @example `1344371`
         */
        CatalogId: string;
        /**
         * 元数据库名称
         * @example `database_test`
         */
        DatabaseName: string;
        /**
         * 分区输入信息列表
         */
        PartitionInputs: any[];
        /**
         * 元数据表名称
         * @example `test_table_20201223`
         */
        TableName: string;
    };
}
