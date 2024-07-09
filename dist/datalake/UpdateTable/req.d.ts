export interface UpdateTableRequest {
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
         * 默认情况下，更新元数据表会创建一个新的归档版本，但如果skipArchive设置true则不会创建版本
         * @example `false`
         */
        SkipArchive: boolean;
        /**
         * 更新后元数据表详细信息
         */
        TableInput: any;
        /**
         *  元数据表名称
         * @example `test_table_20201223`
         */
        TableName: string;
        /**
         * 是否同步更新
         * @example `true`
         */
        IsAsync: boolean;
        /**
         * 是否允许更新partition key
         * @example `false`
         */
        AllowPartitionKeyChange: boolean;
    };
}
