export interface RetryDataCorrectPreCheckRequest {
    /**
     * 数据变更工单ID，可通过调用接口[ListOrders](~~144643~~)获取该参数的值。
     * @example `414****`
     */
    "OrderId": number;
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
}
