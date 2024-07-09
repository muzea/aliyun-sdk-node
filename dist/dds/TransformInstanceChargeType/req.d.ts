export interface TransformInstanceChargeTypeRequest {
    /**
     * 实例ID。
     * @example `dds-2ze55b3ec56c****`
     */
    "InstanceId": string;
    /**
     * 预付费时长，取值范围为：
     * - 当PricingCycle单位为Month:**1**~**9**
     * - 当PricingCycle单位为Year: **1**、**2**、**3**、**5**
     * @example `1`
     */
    "Period"?: number;
    /**
     * 是否自动支付订单，取值说明：
     * - **true**：自动支付订单。
     * - **false**：手动支付订单。
     * > 默认值为**true**。
     * @example `true`
     */
    "AutoPay"?: boolean;
    /**
     * 附加参数，业务信息。
     * @example `{“ActivityId":"000000000"}`
     */
    "BusinessInfo"?: string;
    /**
     * 到期后是否自动续费，取值说明：
     * - **true**：自动续费。
     * - **false**：手动续费。
     * > 默认值为**false**。
     * @example `false`
     */
    "AutoRenew"?: string;
    /**
     * 是否使用优惠券，取值说明：
     * - **default**或**null**（默认）：使用优惠券。
     * - **youhuiquan_promotion_option_id_for_blank**：不使用优惠券。
     * @example `default`
     */
    "CouponNo"?: string;
    /**
     * 实例付费类型，取值说明：
     * - **PrePaid**：预付费，包年包月。
     * - **PostPaid**：按量付费。
     * @example `PrePaid`
     */
    "ChargeType": string;
    /**
     * 实例付费时长单位
     * 取值说明：
     * - **Month：** 月
     * -  **Year：** 年
     * 默认值：Month
     * @example `Month`
     */
    "PricingCycle"?: string;
}
