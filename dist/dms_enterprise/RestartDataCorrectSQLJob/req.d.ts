export interface RestartDataCorrectSQLJobRequest {
    /**
     * 数据变更工单ID，可通过调用接口[ListOrders](~~144643~~)获取该参数的值。
     * @example `453****`
     */
    "OrderId": number;
    /**
     * 重试类型，取值如下：
     * - **ALL**：全部重试
     * - **SINGLE**：重试单个任务
     * @example `ALL`
     */
    "Type": string;
    /**
     * SQL任务ID，可通过调用接口[GetDataCorrectTaskDetail](~~208481~~)和
     * [ListDBTaskSQLJob](~~207049~~)获取该参数的值。
     * 如果type = SINGLE，需要传递JobId确认需要重试的SQL任务ID。
     * @example `43253`
     */
    "JobId"?: number;
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
}
