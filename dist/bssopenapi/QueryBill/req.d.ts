export interface QueryBillRequest {
    /**
     * 账期，YYYY-MM。
     * @example `2018-07`
     */
    "BillingCycle": string;
    /**
     * 类型。取值：
     * - SubscriptionOrder
     * - PayAsYouGoBill
     * - Refund
     * - Adjustment
     * @example `SubscriptionOrder`
     */
    "Type"?: string;
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
     * - Subscription
     * - PayAsYouGo
     * > 必须和ProductCode参数一起使用。
     * @example `Subscription`
     */
    "SubscriptionType"?: string;
    /**
     * 根据原价（PretaxGrossAmount）是否为0做过滤，默认为否（兼容现有逻辑）。
     * - true：是。
     * - false：否。
     * @example `true`
     */
    "IsHideZeroCharge"?: boolean;
    /**
     * 页码，默认值为1。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页数量，默认值：20，最大值：300。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 资源归属账号的ID，资源归属账号是实际使用资源的账号。
     * @example `123`
     */
    "BillOwnerId"?: number;
}
