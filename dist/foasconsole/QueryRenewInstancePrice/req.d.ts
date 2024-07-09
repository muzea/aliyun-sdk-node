export interface QueryRenewInstancePriceRequest {
    /**
     * 地域id
     * @example `cn-beijing`
     */
    "Region": string;
    /**
     * 实例id
     * @example `sc_flinkserverless_public_cn-7e22ae5sess`
     */
    "InstanceId": string;
    /**
     * 订购周期数量
     * @example `1`
     */
    "Duration": number;
    /**
     * 订购周期
     * @example `Month`
     */
    "PricingCycle": string;
}
