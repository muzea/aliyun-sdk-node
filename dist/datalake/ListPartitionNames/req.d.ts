export interface ListPartitionNamesRequest {
    /**
     * HTTP请求体
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
         * 翻页token，从返回结果返回，无则传空字符串或''
         * @example `2cb472ec1bf84f8d92f9c4baa0d21c19aa`
         */
        NextPageToken: string;
        /**
         * 分页大小
         * @example `10`
         */
        PageSize: number;
        /**
         * 分区值列表，可以只传入部分分区的值，会查询出所有下级分区的分区名
         */
        PartialPartValues: any;
        /**
         * 元数据表名称
         * @example `test_table_20200715162543389`
         */
        TableName: string;
    };
}
