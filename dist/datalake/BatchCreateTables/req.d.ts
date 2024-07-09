export interface BatchCreateTablesRequest {
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
         * 如果相同名字的表已经存在，是否忽略异常
         * @example `true`
         */
        IfNotExists: boolean;
        /**
         * 元数据表列表
         */
        TableInputs: any[];
    };
}
