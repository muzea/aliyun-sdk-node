export interface QueryInstanceGaapCostRequest {
    /**
     * 页码，默认值为1。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页数量，默认值：20，最大值：100。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 账单日期，YYYY－MM。
     * @example `2020-03`
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
     * 订阅类型。取值：
     * - Subscription：预付费。
     * - PayAsYouGo：后付费。
     * @example `PayAsYouGo`
     */
    "SubscriptionType"?: string;
}
