export interface ConvertInstanceRequest {
    /**
     * 实例ID
     * @example `hb-bp16o0pd52e3y****`
     */
    "ClusterId": string;
    /**
     * 订购的周期单位
     * - year：年，
     * - month：月。
     * @example `month`
     */
    "PricingCycle"?: string;
    /**
     * 订购的周期数量
     * - PricingCycle=year时，取值1-3；
     * - PricingCycle=month时，取值1-9。
     * @example `7`
     */
    "Duration"?: number;
    /**
     * 实例的计费类型，返回值：
     * - **Prepaid**：包年包月。
     * - **Postpaid**：按量付费。
     * @example `Prepaid`
     */
    "PayType"?: string;
}
