export interface QueryBillOverviewRequest {
    /**
     * 账单日期，YYYY-MM。
     * @example `2018-07`
     */
    "BillingCycle": string;
    /**
     * 产品代码。
     * @example `rds`
     */
    "ProductCode"?: string;
    /**
     * 产品类型。
     * @example `rds`
     */
    "ProductType"?: string;
    /**
     * 订阅类型：
     * - Subscription：预付费。
     * - PayAsYouGo：后付费。
     * @example `Subscription`
     */
    "SubscriptionType"?: string;
    /**
     * 资源归属账号的ID，资源归属账号是实际使用资源的账号。
     * @example `1234`
     */
    "BillOwnerId"?: number;
}
