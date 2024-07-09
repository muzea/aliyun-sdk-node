export interface ReDeployLhDagVersionRequest {
    /**
     * 任务流ID，可通过调用接口[ListTaskFlow](~~424565~~)或[ListLhTaskFlowAndScenario](~~426672~~)获取该参数的值。
     * @example `7***`
     */
    "DagId": number;
    /**
     * 任务流版本ID（VersionId），可通过调用接口[ListDAGVersions](~~424682~~)获取该参数的值。
     * @example `2****`
     */
    "DagVersion"?: number;
    /**
     * 租户ID，您可以调用[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)接口获取该参数。
     * @example `3***`
     */
    "Tid"?: number;
}
