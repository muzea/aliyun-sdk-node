export interface ListDAGVersionsRequest {
    /**
     * 任务流ID，可通过调用接口[ListTaskFlow](~~424565~~)或[ListLhTaskFlowAndScenario](~~426672~~)获取该参数的值。
     * @example `7***`
     */
    "DagId": number;
    /**
     * 第几页。
     * @example `1`
     */
    "PageIndex": number;
    /**
     * 每页数据量。
     * @example `20`
     */
    "PageSize": number;
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
}
