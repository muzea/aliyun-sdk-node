export interface DescribeRenewalPriceRequest {
    /**
     * 附加参数，业务信息。
     * @example `{“ActivityId":"000000000"}`
     */
    "BusinessInfo"?: string;
    /**
     * 是否使用优惠券，取值说明：
     * - **default**或**null**（默认）：使用优惠券。
     * - **youhuiquan_promotion_option_id_for_blank**：不使用优惠券。
     * @example `default`
     */
    "CouponNo"?: string;
    /**
     * 实例ID。
     * @example `dds-bp12c5b040dc****`
     */
    "DBInstanceId": string;
}
