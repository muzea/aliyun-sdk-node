export interface CheckMetaTableRequest {
    /**
     * 表的唯一标识。
     * @example `odps.engine_name.table_name`
     */
    "TableGuid"?: string;
    /**
     * EMR集群的ID。
     * @example `abc`
     */
    "ClusterId"?: string;
    /**
     * EMR数据库的名称。
     * @example `abc`
     */
    "DatabaseName"?: string;
    /**
     * EMR表名。
     * @example `abc`
     */
    "TableName"?: string;
    /**
     * 数据类型，odps或者emr。
     * @example `emr`
     */
    "DataSourceType"?: string;
}
