export interface GetSubtaskRequest {
    /**
     * 租户ID。如何获取租户ID，请参见[ListTenants](~~454649~~)。
     * @example `GA***W134`
     */
    "TenantId": string;
    /**
     * 任务ID。如何获取任务ID，请参见[ListTasks](~~454662~~)。
     * @example `154***2518306500608`
     */
    "TaskID": string;
    /**
     * 子任务ID。如何获取子任务ID，请参见[ListSubtasks](~~454675~~)。
     * @example `150***502979956736`
     */
    "SubtaskId": string;
}
