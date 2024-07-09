export interface GetTaskRequest {
    /**
     * 租户ID。如何查询租户ID，请参见[ListTenants](~~454649~~)。
     * @example `GA***W134`
     */
    "TenantId": string;
    /**
     * 任务ID。如何查询任务ID，请参见[ListTasks](~~454662~~)。
     * @example `15***2518306500608`
     */
    "TaskId": string;
}
