export interface GetDbExportDownloadURLRequest {
    /**
     * 租户ID。可通过调用[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)接口获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 工单ID。您可调用[ListOrders](~~144643~~)接口获取该参数的值。
     * @example `73****`
     */
    "OrderId": number;
}
