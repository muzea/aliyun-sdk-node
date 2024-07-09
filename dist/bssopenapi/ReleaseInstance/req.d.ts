export interface ReleaseInstanceRequest {
    /**
     * 产品代码
     * @example `ecs`
     */
    "ProductCode": string;
    /**
     * 付费类型
     * Subscription：预付费
     * PayAsYouGo：后付费
     * @example `PayAsYouGo`
     */
    "SubscriptionType": string;
    /**
     * 实例ID。多个ID用英文逗号分隔，最大不超过100个。
     * @example `rm-xxxxxxxxxxxx`
     */
    "InstanceIds": string;
    /**
     * 续费状态，取值：
     * AutoRenewal：自动续费
     * ManualRenewal：手动续费
     * NotRenewal：不续费
     * @example `AutoRenewal`
     */
    "RenewStatus"?: string;
    /**
     * 地域
     * @example `cn-hangzhou`
     */
    "Region"?: string;
    /**
     * 产品类型
     * @example `ecs`
     */
    "ProductType"?: string;
}
