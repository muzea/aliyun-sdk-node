export interface GetMetaTableColumnRequest {
    /**
     * 表的唯一标识。您可以通过调用[GetMetaDBTableList](~~2780086~~)，获取表的唯一标识。
     * @example `odps.engine_name.table_name`
     */
    "TableGuid"?: string;
    /**
     * 请求获取的数据页码数，用于翻页。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页显示的条数，默认为10条，最大100条。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * EMR集群的ID，您可以登录EMR管理控制台，获取集群ID。
     * @example `C-010A704DA760****`
     */
    "ClusterId"?: string;
    /**
     * EMR的数据库名称。您可以通过调用[ListMetaDB](~~2780105~~)接口，获取数据库名称。
     * @example `abc`
     */
    "DatabaseName"?: string;
    /**
     * EMR的表名称。您可以通过调用[GetMetaDBTableList](~~2780086~~)接口，获取表名称。
     * @example `abc`
     */
    "TableName"?: string;
    /**
     * 数据类型，当前仅支持取值为emr。
     * @example `emr`
     */
    "DataSourceType"?: string;
}
