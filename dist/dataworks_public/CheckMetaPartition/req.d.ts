export interface CheckMetaPartitionRequest {
    /**
     * MaxCompute表的唯一标识。
     * @example `odps.engine_name.table_name`
     */
    "TableGuid"?: string;
    /**
     * MaxCompute表分区的名称。
     * @example `ds=202005`
     */
    "Partition": string;
    /**
     * 该参数已废弃使用。
     * @example `abc`
     */
    "ClusterId"?: string;
    /**
     * 数据库的名称。
     * @example `abc`
     */
    "DatabaseName"?: string;
    /**
     * 表名。
     * @example `abc`
     */
    "TableName"?: string;
    /**
     * 数据类型，目前仅支持odps。
     * @example `odps`
     */
    "DataSourceType"?: string;
}
