export interface ListTasksInTaskFlowRequest {
    /**
     * 租户ID。
     * > 鼠标移动到界面右上角的头像处，查看租户ID。具体操作，请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 任务流ID，可通过调用接口[ListTaskFlow](~~424565~~)或[ListLhTaskFlowAndScenario](~~426672~~)获取该参数的值。
     * @example `32***`
     */
    "DagId": number;
}
