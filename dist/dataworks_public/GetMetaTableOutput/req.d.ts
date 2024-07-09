export interface GetMetaTableOutputRequest {
    /**
     * 分页的页数。默认值为1，最小值为1，最大值为30。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的条数，默认为10条，最大100条。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 表的唯一标识。
     * @example `odps.engine_name.table_name`
     */
    "TableGuid": string;
    /**
     * 开始日期。
     * @example `2020-06-27`
     */
    "StartDate": string;
    /**
     * 结束日期。
     * @example `2020-05-27`
     */
    "EndDate": string;
    /**
     * 任务标识。
     * @example `1048576`
     */
    "TaskId"?: string;
}
