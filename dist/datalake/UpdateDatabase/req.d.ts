export interface UpdateDatabaseRequest {
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
         * 新的元数据库
         */
        DatabaseInput: any;
        /**
         * 修改前的元数据库名称，更新前后元数据库相同则仅更新其他Meta
         * @example `database_test`
         */
        Name: string;
    };
}
