export interface CreateSpaceWithOrderRequest {
    /**
     * 服务空间名称。
     * @example `test`
     */
    "Name": string;
    /**
     * 服务空间描述信息。
     * @example `测试服务空间`
     */
    "Desc"?: string;
    /**
     * 付费类型，取值：
     * - Subscription：预付费。
     * - PayAsYouGo：后付费。
     * @example `Subscription`
     */
    "SubscriptionType": string;
    /**
     * 购买时长，取值： 可选1、2、3、6、12，单位为月。当选择预付费时，该参数必填。
     * @example `1`
     */
    "Period"?: number;
    /**
     * 预付费套餐规格，当选择预付费时，该参数必填。
     * @example `professional`
     */
    "PackageVersion"?: string;
    /**
     * 是否使用代金券。取值：
     * - **true**：使用
     * - **false**：不使用
     * 默认值为**false**。
     * @example `true`
     */
    "UseCoupon"?: boolean;
}
