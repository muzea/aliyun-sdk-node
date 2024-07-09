export interface CreateDatabaseRequest {
    /**
     * HTTP 请求体（HTTP BODY）内容，均采用JSON格式
     */
    "Body"?: {
        /**
         * 默认填写主账号Uid
         * @example `1344371`
         */
        CatalogId: string;
        /**
         * 元数据库的详细信息
         */
        DatabaseInput: any;
    };
}
