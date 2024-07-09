export interface DeleteTableVersionRequest {
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
     * 元数据表名称
     * @example `test_table_20200715162543389`
     */
    "TableName"?: string;
    /**
     * 版本号
     * @example `1`
     */
    "VersionId"?: number;
}
