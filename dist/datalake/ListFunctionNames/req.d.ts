export interface ListFunctionNamesRequest {
    /**
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
     * 函数名匹配的正则表达式
     * @example `.*`
     */
    "FunctionNamePattern"?: string;
    /**
     * 翻页token，从返回结果返回，无则传空字符串或''
     * @example `''`
     */
    "NextPageToken"?: string;
    /**
     * 每页大小
     * @example `10`
     */
    "PageSize"?: number;
}
