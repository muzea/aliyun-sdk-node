export interface DeleteDBInstancePlanResponse {
    /**
     * API执行状态。
     * 执行成功则返回**success**；执行失败则不返回该参数。
     * @example `success`
     */
    Status: string;
    /**
     * 错误信息。
     * 只会在API执行失败时返回该参数。
     * @example `****`
     */
    ErrorMessage: string;
    /**
     * 计划ID。
     * @example `1234`
     */
    PlanId: string;
    /**
     * 请求ID。
     * @example `34b32a0a-08ef-4a87-b6be-cdd988888888`
     */
    RequestId: string;
    /**
     * 实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    DBInstanceId: string;
}
