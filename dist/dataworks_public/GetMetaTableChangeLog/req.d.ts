export interface GetMetaTableChangeLogRequest {
    /**
     * 请求的数据页数，用于翻页。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的条数，默认为10条，最大100条。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 表的唯一标识，格式为odps.projectName.tableName。您可以通过调用[GetMetaDBTableList](~~2780086~~)，获取表的唯一标识。
     * > 当前仅支持调用[GetMetaTableChangeLog](~~2780094~~)获取MaxCompute表的变更日志。
     * @example `odps.engine_name.table_name`
     */
    "TableGuid": string;
    /**
     * 变更类型，包括CREATE_TABLE、ALTER_TABLE、DROP_TABLE、ADD_PARTITION和DROP_PARTITION。
     * @example `ALTER_TABLE`
     */
    "ChangeType"?: string;
    /**
     * 变更主体类别，包括TABLE和PARTITION。
     * @example `TABLE`
     */
    "ObjectType"?: string;
    /**
     * 表变更的开始日期，格式为yyyy-MM-dd HH:mm:ss。
     * - 如果输入的日期校验失败，则系统默认获取当前时间为表变更的开始日期。
     * - 当输入的变更开始日期和结束日期都校验失败时，则系统自动获取最近30天的表变更记录。
     * @example `2020-06-01 00:00:00`
     */
    "StartDate"?: string;
    /**
     * 表变更的结束日期，格式为yyyy-MM-dd HH:mm:ss。
     * - 如果输入的日期校验失败，则系统默认获取当前时间为表变更的结束日期。
     * - 当输入的变更开始日期和结束日期都校验失败时，则系统自动获取最近30天的表变更记录。
     * @example `2020-06-02 00:00:00`
     */
    "EndDate"?: string;
}
