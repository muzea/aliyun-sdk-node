export interface GetSubtaskItemRequest {
    /**
     * 租户ID。如何获取租户ID，请参见[ListTenants](~~454649~~)。
     * @example `GA***W134`
     */
    "TenantId": string;
    /**
     * 任务ID。如何获取任务ID，请参见[ListTasks](~~454662~~)。
     * @example `154***518306500608`
     */
    "TaskId": string;
    /**
     * 子任务ID。如何获取子任务ID，请参见[ListSubtasks](~~454675~~)。
     * @example `15***82502979956736`
     */
    "SubtaskId": string;
    /**
     * 数据项ID。如何获取数据项ID，请参见[GetSubtask](~~454677~~)。
     * @example `15***2994667356160`
     */
    "ItemId": string;
}
