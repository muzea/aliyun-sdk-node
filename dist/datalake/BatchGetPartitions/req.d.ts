export interface BatchGetPartitionsRequest {
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
         * 分区值列表
         */
        PartitionValueList: any;
        /**
         * 元数据表名称
         * @example `test_table_20200715162543389`
         */
        TableName: string;
        /**
         * 是否共享partition的SD中column信息
         * @example `true`
         */
        IsShareSd: boolean;
    };
}
