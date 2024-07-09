export interface CreatePartitionRequest {
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
         * 如果相同名字的分区已经存在，是否忽略异常
         * @example `true`
         */
        IfNotExists: boolean;
        /**
         * 是否需要返回分区信息，为true时结果会返回Partitions
         * @example `true`
         */
        NeedResult: boolean;
        /**
         * 分区输入信息
         */
        PartitionInput: any;
        /**
         * 元数据表名称
         * @example `test_table_20201223`
         */
        TableName: string;
    };
}
