export interface GetTaskInstanceRelationRequest {
    /**
     * 任务流ID，可通过调用接口[ListTaskFlow](~~424565~~)或[ListLhTaskFlowAndScenario](~~426672~~)获取该参数的值。
     * @example `7***`
     */
    "DagId": number;
    /**
     * 任务流运行记录ID（Id），可通过调用接口[ListTaskFlowInstance](~~424689~~)获取该参数的值。
     * @example `47****`
     */
    "DagInstanceId": number;
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
}
