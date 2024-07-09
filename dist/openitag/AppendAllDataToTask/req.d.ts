export interface AppendAllDataToTaskRequest {
    /**
     * 租户ID。如何获取租户ID，请参见[ListTenants](~~454649~~)。
     * @example `GAR***134`
     */
    "TenantId": string;
    /**
     * 任务ID。如何获取任务ID，请参见[ListTasks](~~454662~~)。
     * @example `154***518306500608`
     */
    "TaskId": string;
    /**
     * 参数。
     */
    "body"?: any;
}
