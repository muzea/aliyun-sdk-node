export interface GetDataImportSQLRequest {
    /**
     * 工单ID，您可调用[ListOrders](~~144643~~)接口获取该参数的值。
     * @example `14****`
     */
    "OrderId": number;
    /**
     * SQL ID。您可调用[ListDataImportSQLPreCheckDetail](~~2249345~~)接口获取该参数的值。
     * @example `15****`
     */
    "SqlId": number;
    /**
     * 租户ID。您可调用[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)接口获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
}
