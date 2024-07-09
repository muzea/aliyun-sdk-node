export interface ConvertChargeTypeRequest {
    /**
     * 产品类型。
     * @example `rds`
     */
    "ProductType"?: string;
    /**
     * 实例当前的付费类型，取值：
     * - Subscription：预付费。
     * - PayAsYouGo：后付费。
     * > 调用成功后资源将被更变为相反的类型。
     * @example `Subscription`
     */
    "SubscriptionType": string;
    /**
     * 预付费周期（月），如果转换为预付费类型，需要设置购买的预付费的周期时长。取值：
     * - 1~9。
     * - 12。
     * - 24。
     * - 36。
     * @example `6`
     */
    "Period"?: number;
    /**
     * 产品代码。
     * @example `rds`
     */
    "ProductCode": string;
    /**
     * 实例ID。
     * @example `rm-kasjgfjshgf`
     */
    "InstanceId": string;
}
