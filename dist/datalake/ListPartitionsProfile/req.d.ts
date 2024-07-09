export interface ListPartitionsProfileRequest {
    /**
     * 数据目录ID，默认填写主账号ID
     * @example `1344371`
     */
    "CatalogId"?: string;
    /**
     * 元数据库名称
     * @example `test_db`
     */
    "DatabaseName": string;
    /**
     * 元数据表名称
     * @example `test_tbl`
     */
    "TableName"?: string;
    /**
     * 分页码
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 分区名称列表
     */
    "PartitionNames"?: string[];
}
