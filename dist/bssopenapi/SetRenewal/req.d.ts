export interface SetRenewalRequest {
    /**
     * 设置实例自动续费时长，取值：
     * - 1。
     * - 2。
     * - 3。
     * - 6。
     * - 12。
     * > 当RenewalStatus= AutoRenewal时，必须设置。
     * @example `1`
     */
    "RenewalPeriod"?: number;
    /**
     * 实例ID，支持批量设置最多100个包年包月实例，多个实例ID以英文逗号分隔。
     * @example `rm-askjdhaskfjh`
     */
    "InstanceIDs": string;
    /**
     * 产品代码。
     * @example `rds`
     */
    "ProductCode": string;
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
    /**
     * 自动续费周期单位，取值：
     * - M：月。
     * - Y：年。
     * > 当RenewalStatus= AutoRenewal时，必须设置。
     * @example `M`
     */
    "RenewalPeriodUnit"?: string;
    /**
     * 续费状态，取值：
     * - AutoRenewal：自动续费。
     * - ManualRenewal：手动续费。
     * - NotRenewal：不续费。
     * @example `AutoRenewal`
     */
    "RenewalStatus": string;
}
