export interface ListFunctionsRequest {
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
     * 用户定义函数名的正则匹配表达式
     * @example `.*`
     */
    "FunctionNamePattern"?: string;
    /**
     * 翻页token，从返回结果返回，无则传空字符串或''
     * @example `2cb472ec1bf84f8d92f9c4baa0d21c19aa`
     */
    "NextPageToken"?: string;
    /**
     * 每页大小
     * @example `10`
     */
    "PageSize"?: number;
}
