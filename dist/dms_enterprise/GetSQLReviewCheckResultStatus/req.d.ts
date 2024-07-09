export interface GetSQLReviewCheckResultStatusRequest {
    /**
     * 工单号，您可以调用[CreateSQLReviewOrder](~~257777~~)接口获取该参数。
     * @example `123321`
     */
    "OrderId": number;
    /**
     * 租户ID，您可以调用[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)接口获取该参数。
     * @example `1`
     */
    "Tid"?: number;
}
