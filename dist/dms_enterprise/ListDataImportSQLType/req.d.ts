export interface ListDataImportSQLTypeRequest {
    /**
     * 数据导入工单ID。您可调用[ListOrders](~~144643~~)接口获取该参数的值。
     * @example `420****`
     */
    "OrderId": number;
    /**
     * 租户ID。您可调用[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)接口获取该参数的值。
     * @example `1`
     */
    "Tid"?: number;
}
