export interface RenamePartitionRequest {
    /**
     * HTTP 请求体（HTTP BODY）内容，均采用JSON格式
     */
    "Body"?: {
        /**
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
         * 更新后的分区信息，和CreatePartition相同
         */
        PartitionInput: any;
        /**
         * 分区值
         */
        PartitionValues: any;
        /**
         * 元数据表名
         * @example `test_table_20200715162543389`
         */
        TableName: string;
    };
}
