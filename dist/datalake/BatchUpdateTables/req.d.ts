export interface BatchUpdateTablesRequest {
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
         * 更新后元数据表详细信息
         */
        TableInputs: any[];
        /**
         * 表是否为异步更新：-true：是-false：否
         * @example `true`
         */
        IsAsync: boolean;
    };
}
