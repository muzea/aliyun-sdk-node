export interface RenewInstanceRequest {
    /**
     * 目标实例ID。
     * @example `hb-bp1u0639js2h7****`
     */
    "ClusterId": string;
    /**
     * 目标实例续费的周期单位。
     * - **year**：年。
     * - **month**：月。
     * @example `month`
     */
    "PricingCycle": string;
    /**
     * 目标实例续费的周期。
     * - PricingCycle为**year**时，取值1~3。
     * - PricingCycle为**month**时，取值1~9。
     * @example `5`
     */
    "Duration": number;
}
