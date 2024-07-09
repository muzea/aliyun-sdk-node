export interface ListDatabasesRequest {
    /**
     * 数据库分类命名空间，默认填写主账号Uid
     * @example `1344371`
     */
    "CatalogId"?: string;
    /**
     * 数据库名称匹配的正则表达式，全部匹配则传入.*
     * @example `.*`
     */
    "NamePattern"?: string;
    /**
     * 翻页token，由结果返回，如第一页可传入""
     * @example `2cb472ec1bf84f8d92f9c4baa0d21c19aa!`
     */
    "NextPageToken"?: string;
    /**
     * 每页大小
     * @example `10`
     */
    "PageSize"?: number;
}
