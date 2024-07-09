export interface GetMetaTableLineageRequest {
    /**
     * 表的唯一标识。
     * @example `odps.engine_name.table_name`
     */
    "TableGuid"?: string;
    /**
     * 字段的上下游方向：up表示上游，down表示下游。
     * @example `up`
     */
    "Direction": string;
    /**
     * 分页的逻辑，请根据请求返回参数HasNext=true和key填写。
     * @example `odps.engine_name.table_name1`
     */
    "NextPrimaryKey"?: string;
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
     * 表名。
     * @example `abc`
     */
    "TableName"?: string;
    /**
     * 数据类型，包括odps或emr。
     * @example `emr`
     */
    "DataSourceType"?: string;
}
