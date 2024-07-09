export interface ModifyInstanceChargeTypeRequest {
    /**
     * 实例ID列表。
     */
    "InstanceIds": string[];
    /**
     * 实例需要修改的目标计费方式。取值：
     * PrePaid：将实例级后付费实例转换为包年包月实例。
     * PostPaid：将包年包月实例转换为实例级后付费实例（默认值）。
     * @example `PostPaid`
     */
    "InstanceChargeType": string;
    /**
     * 实例级后付费转为包年包月的时候是否开启自动续费。取值：
     * true：自动续费。
     * false：不自动续费（默认值）。
     * @example `false`
     */
    "AutoRenew"?: boolean;
    /**
     * 实例级后付费转为包年包月的时候的包年包月时长，如果是此场景下该字段必填。取值：
     * 如果 PeriodUnit 取值为 Day 时，则 Period 仅可设置为 3。
     * 如果 PeriodUnit 取值为 Month 时，则 Period 可设置为1-9,12。
     * @example `1`
     */
    "Period"?: string;
    /**
     * 实例级后付费转为包年包月的时候的购买资源的时长单位，如果是此场景下该字段必填。取值：
     * Month：按月购买。
     * Day：按天购买。
     * @example `Month`
     */
    "PeriodUnit"?: string;
    /**
     * 实例级后付费转为包年包月的时候是否将随实例创建的所有按量付费数据盘一起转换为包年包月数据盘。取值：
     * true：是。
     * false：否（默认值）。
     * @example `true`
     */
    "IncludeDataDisks"?: boolean;
    /**
     * 实例级后付费转为包年包月的时候是否自动支付。取值：
     * true：自动支付，您需要确保账户余额充足。
     * false：只生成订单不扣费（默认值）。
     * @example `false`
     */
    "AutoPay"?: boolean;
}
