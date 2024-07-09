export interface GetFunctionRequest {
    /**
     *
     * 数据库分类命名空间，默认填写主账号Uid
     * @example `1344371`
     */
    "CatalogId"?: string;
    /**
     * 元数据库名称
     * @example `database_test`
     */
    "DatabaseName"?: string;
    /**
     * 用户定义函数名
     * @example `func2`
     */
    "FunctionName"?: string;
}
