export interface ListDataImportSQLPreCheckDetailRequest {
    /**
     * 工单ID，您可调用[ListOrders](~~144643~~)接口获取该参数的值。
     * @example `11****`
     */
    "OrderId": number;
    /**
     * SQL类型，常见SQL类型取值说明如下：
     * - **SELECT**：查询
     * - **INSERT**：插入
     * - **DELETE**：删除
     * - **CREATE_TABLE**：创建表
     * > 您可以在顶部菜单栏中，选择**安全与规范**>**操作审计**，查看更多SQL类型取值。
     * @example `INSERT`
     */
    "SqlType"?: string;
    /**
     * 工单状态。若不填，则默认选择所有状态，其他取值如下：
     * - **INIT**：初始化。
     * - **RUNNING**：执行中。
     * - **SUCCESS**：已完成。
     * - **TIMEOUT**：超时跳过。
     * - **FAIL**：已失败。
     * @example `SUCCESS`
     */
    "StatusCode"?: string;
    /**
     * 页码，从1开始。
     * @example `1`
     */
    "PageNumer"?: number;
    /**
     * 每页数据量。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 租户ID。您可调用[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)接口获取该参数的值。
     * @example `1`
     */
    "Tid"?: number;
}
