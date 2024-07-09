export interface SkipDataCorrectRowCheckRequest {
    /**
     * 工单ID。您可调用[ListOrders](~~144643~~)接口获取该参数。
     * @example `420****`
     */
    "OrderId": number;
    /**
     * 跳过数据变更预检查行数校验的原因。
     * @example `节省测试时间`
     */
    "Reason": string;
    /**
     * 租户ID。您可以调用[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)接口获取该参数。
     * @example `3***`
     */
    "Tid"?: number;
}
