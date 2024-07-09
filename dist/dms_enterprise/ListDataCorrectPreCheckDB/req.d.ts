export interface ListDataCorrectPreCheckDBRequest {
    /**
     * 数据变更工单号。
     * @example `432****`
     */
    "OrderId": number;
    /**
     * 当前页数。
     * 取值范围：大于0的整数。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页返回的结果个数。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 租户ID。可通过调用[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)接口获取该参数的值。
     * @example `4321****`
     */
    "Tid"?: number;
}
