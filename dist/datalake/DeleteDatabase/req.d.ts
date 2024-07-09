export interface DeleteDatabaseRequest {
    /**
     * 数据库分类命名空间，默认填写主账号Uid
     * @example `1344371`
     */
    "CatalogId"?: string;
    /**
     * 元数据库名称
     * @example `database_test`
     */
    "Name"?: string;
    /**
     * 是否级联删除数据
     * @example `false`
     */
    "Cascade"?: boolean;
    /**
     * 是否异步执行
     * @example `true`
     */
    "Async"?: boolean;
}
