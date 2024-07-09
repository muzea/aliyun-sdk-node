export interface ListOrderRequest {
    /**
     * 订单ID。
     * @example `21450******0275`
     */
    "OrderId"?: string;
    /**
     * 订单购买的时间区间（开始日期）。
     * 格式：`YYYY-MM-dd`
     * @example `2022-04-05`
     */
    "StartDate"?: string;
    /**
     * 订单购买的时间区间（结束日期）。
     * 格式：`YYYY-MM-dd`
     * @example `2022-04-05`
     */
    "EndDate"?: string;
    /**
     * 订单类型。
     * - **NEW**：新购。
     * - **ADD_FLOW**：扩池。
     * - **ADD_CARD**：补卡。
     * - **FUNCTION**：购月功能费。
     * - **FLOW_PLUS**：购买叠加包。
     * - **RENEW**：续订套餐。
     * - **AUTO_RENEW**：自动续订套餐。
     * @example `NEW`
     */
    "OrderType"?: string;
    /**
     * 订单状态。
     * - **processing**：处理中。
     * - **failure**：失败。
     * - **completed**：处理完成。
     * - **unpaid**：待支付。
     * - **refunded**：已退款。
     * @example `processing`
     */
    "OrderStatus"?: string;
    /**
     * 查询页数，需结合`PageSize`参数使用。
     * @example `1`
     */
    "PageNo": number;
    /**
     * 每页的数量，支持10、15、25、40。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 套餐凭证。
     * @example `CT-SF-M-2-100M`
     */
    "CredentialNo"?: string;
}
