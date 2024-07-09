export interface GetTaskWorkforceStatisticRequest {
    /**
     * 租户ID。如何获取租户ID，请参见[ListTenants](~~454649~~)。
     * @example `GA***W134`
     */
    "TenantId": string;
    /**
     * 任务ID。如何获取任务ID，请参见[ListTasks](~~454662~~)。
     * @example `154****8306500608`
     */
    "TaskId": string;
    /**
     * 任务成员列表的页码。起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页显示的任务成员数量，默认为20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 统计类型，取值如下：
     * - ITEM：按照单条审核记录。
     * - OPERATORCELL：按照操作单元，一个ITEM可能会包含多个操作单元。
     * @example `ITEM`
     */
    "StatType"?: string;
}
