export interface GetMetaColumnLineageRequest {
    /**
     * 字段的唯一标识。
     * @example `odps.engine_name.table_name.column_name`
     */
    "ColumnGuid"?: string;
    /**
     * 字段的上下游方向：up表示上游，down表示下游。
     * @example `up`
     */
    "Direction": string;
    /**
     * 请求的数据页数，用于翻页。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页显示的条数，默认为10条，最大100条。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * EMR集群的ID，针对EMR情况。
     * @example `abc`
     */
    "ClusterId"?: string;
    /**
     * 数据库的名称。
     * @example `abc`
     */
    "DatabaseName"?: string;
    /**
     * 表名称。
     * @example `abc`
     */
    "TableName"?: string;
    /**
     * 字段名称。
     * @example `abc`
     */
    "ColumnName"?: string;
    /**
     * 数据类型，包括odps或emr。
     * @example `emr`
     */
    "DataSourceType"?: string;
}
