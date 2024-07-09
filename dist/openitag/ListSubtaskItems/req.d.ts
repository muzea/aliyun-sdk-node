export interface ListSubtaskItemsRequest {
    /**
     * 租户ID。如何获取租户ID，请参见[ListTenants](~~454649~~)。
     * @example `GA***W134`
     */
    "TenantId": string;
    /**
     * 任务ID。如何获取任务ID，请参见[ListTasks](~~454662~~)。
     * @example `154***18306500608`
     */
    "TaskID": string;
    /**
     * 子任务ID。如何获取子任务ID，请参见[ListSubtasks](~~454675~~)。
     * @example `1500***2979956736`
     */
    "SubtaskId": string;
    /**
     * 任务包标注数据的页码。起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页显示的任务包标注数据的数量，默认为20。
     * @example `20`
     */
    "PageSize"?: number;
}
