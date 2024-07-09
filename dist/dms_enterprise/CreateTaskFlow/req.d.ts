export interface CreateTaskFlowRequest {
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 任务流名称。
     * @example `Dag_Name`
     */
    "DagName": string;
    /**
     * 任务流描述。
     * @example `zht_test`
     */
    "Description"?: string;
    /**
     * 应用场景ID。
     * @example `2**`
     */
    "ScenarioId"?: number;
}
