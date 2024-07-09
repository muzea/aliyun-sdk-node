export interface ListSubtasksRequest {
    /**
     * 租户ID。如何获取租户ID，请参见[ListTenants](~~454649~~)。
     * @example `GAR***134`
     */
    "TenantId": string;
    /**
     * 如何获取任务ID，请参见[ListTasks](~~454662~~)。
     * @example `154***2518306500608`
     */
    "TaskID": string;
    /**
     * 子任务列表的页码。起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页显示的子任务数量，默认为20。
     * @example `20`
     */
    "PageSize"?: number;
}
