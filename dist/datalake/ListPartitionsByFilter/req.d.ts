export interface ListPartitionsByFilterRequest {
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
         * 查询条件表达式，如ds>20201201
         * @example `ds>20201201`
         */
        Filter: string;
        /**
         * 翻页token，从返回结果返回，无则传空字符串或''
         * @example `''`
         */
        NextPageToken: string;
        /**
         * 每页大小
         * @example `10`
         */
        PageSize: number;
        /**
         * 元数据表名
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
