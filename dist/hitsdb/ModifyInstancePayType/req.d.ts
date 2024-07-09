export interface ModifyInstancePayTypeRequest {
    /**
     * 实例ID
     * @example `ld-bp1z3506imz2f****`
     */
    "InstanceId": string;
    /**
     * 购买时长，转成包年包月类型时需要传入。
     * - PricingCycle为Month时，取值范围为\[1,9\]。
     * - PricingCycle为Year时，取值范围为\[1,3\]。
     * @example `1`
     */
    "Duration": number;
    /**
     * 转成包年包月类型时的购买时长单位。
     * - Month：月。
     * - Year：年。
     * @example `Month`
     */
    "PricingCycle"?: string;
    /**
     * 实例的付费类型，返回：
     * - **PREPAY**：包年包月。
     * - **POSTPAY**：按量付费。
     * @example `POSTPAY`
     */
    "PayType": string;
}
