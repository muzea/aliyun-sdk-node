export interface GetDataCorrectBackupFilesRequest {
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 工单ID，可通过调用接口[ListOrders](~~144643~~)获取该参数的值。
     * @example `4200000`
     */
    "OrderId": number;
    /**
     * 操作参数，无需传递。
     * @example `{}`
     */
    "ActionDetail"?: any;
}
