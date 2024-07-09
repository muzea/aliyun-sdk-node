export interface DeletePartitionColumnStatisticsRequest {
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
     * 元数据表名称
     * @example `test_table_20201223`
     */
    "TableName"?: string;
    /**
     * 分区名称列表
     */
    "PartitionNames"?: any;
    /**
     * 字段名称列表
     */
    "ColumnNames"?: any;
}
