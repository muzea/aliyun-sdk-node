export interface DescribePricingModuleRequest {
    /**
     * 产品代码，可通过接口**QueryProductList**查询产品代码。
     * @example `rds`
     */
    "ProductCode": string;
    /**
     * 产品类型，可通过接口**QueryProductList**查询产品类型。
     * @example `rds`
     */
    "ProductType"?: string;
    /**
     * 订阅类型。取值：
     * - Subscription：预付费。
     * - PayAsYouGo：后付费。
     * @example `Subscription`
     */
    "SubscriptionType": string;
}
