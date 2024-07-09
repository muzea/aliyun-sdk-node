export interface ChangeLhDagOwnerRequest {
    /**
     * 任务流ID，可通过调用接口[ListLhTaskFlowAndScenario](~~426672~~)获取该参数的值。
     * @example `9***`
     */
    "DagId": number;
    /**
     * 新的任务流责任人的用户ID，可通过调用接口[ListUsers](~~141938~~)或[GetUser](~~147098~~)获取该参数的值。
     * @example `50****`
     */
    "OwnerUserId": number;
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
}
