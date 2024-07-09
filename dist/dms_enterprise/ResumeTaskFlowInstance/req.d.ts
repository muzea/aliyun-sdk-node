export interface ResumeTaskFlowInstanceRequest {
    /**
     * 租户ID。可通过调用[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)接口获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 任务流ID，可通过调用[ListTaskFlow](~~424565~~)或[ListLhTaskFlowAndScenario](~~426672~~)接口获取该参数的值。
     * @example `11****`
     */
    "DagId": number;
    /**
     * 任务流运行记录ID（Id），可通过调用[ListTaskFlowInstance](~~424689~~)接口获取该参数的值。
     * @example `3****`
     */
    "DagInstanceId": number;
    /**
     * 任务流版本号。可通过调用[ListDAGVersions](~~424682~~)接口获取该参数的值。
     * @example `[]`
     */
    "DagVersion"?: string;
}
