export interface RemoveWorkNodeWorkforceRequest {
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
     * 工作结点ID，工作流顺序，从0开始。例如标注-质检-验收中，标注是0，质检是1，验收是2。
     * @example `0`
     */
    "WorkNodeId": number;
    /**
     * 项目。
     */
    "body"?: {
        /**
         * 用户ID。
         */
        UserIds: number[];
    };
}
