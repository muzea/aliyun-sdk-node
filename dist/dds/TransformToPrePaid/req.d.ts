export interface TransformToPrePaidRequest {
    /**
     * 实例ID。
     * @example `dds-bp1366caac83****`
     */
    "InstanceId": string;
    /**
     * 预付费时长，单位为月。取值范围为**1**~**9**、**12**、**24**、**36**。
     * @example `1`
     */
    "Period": number;
    /**
     * 是否自动支付订单，取值：
     * - **true**：自动支付订单。
     * - **false**：手动支付订单，详情请参见[手动续费包年包月实例](~~85052~~)。
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
     * 到期后是否自动续费，取值：
     * - **true**：自动续费。
     * - **false**：手动续费。
     * > 默认值为**false**。
     * @example `true`
     */
    "AutoRenew"?: string;
    /**
     * 是否使用优惠券，取值说明：
     * - **default**或**null**（默认）：使用优惠券。
     * - **youhuiquan_promotion_option_id_for_blank**：不使用优惠券。
     * @example `default`
     */
    "CouponNo"?: string;
}
