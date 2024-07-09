export interface ListTaskFlowConstantsRequest {
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 任务流ID，可通过调用[ListTaskFlow](~~424565~~)或[ListLhTaskFlowAndScenario](~~426672~~)接口获取该参数的值。
     * @example `3****`
     */
    "DagId": number;
}
