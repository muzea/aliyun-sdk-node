export interface UpdateTaskWorkforceRequest {
    /**
     * 租户ID。如何获取租户ID，请参见[ListTenants](~~454649~~)。
     * @example `G***W134`
     */
    "TenantId": string;
    /**
     * 如何获取任务ID，请参见[ListTasks](~~454662~~)。
     * @example `15***518306500608`
     */
    "TaskId": string;
    /**
     * 项目。
     */
    "body"?: {
        /**
         * 用户列表。
         */
        Workforce: any[];
    };
}
