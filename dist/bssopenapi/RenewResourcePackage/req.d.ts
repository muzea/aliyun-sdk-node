export interface RenewResourcePackageRequest {
    /**
     * 用户实例ID。
     * @example `lskd****sljhsdj`
     */
    "InstanceId": string;
    /**
     * 资源包生效时间，不填默认立即生效。
     * 日期格式按照ISO8601标准表示，并需要使用UTC时间。格式为：yyyy-MM-ddTHH:mm:ssZ。
     * @example `2020-02-02T12:00:00Z`
     */
    "EffectiveDate"?: string;
    /**
     * 资源包续费时长。
     * @example `1`
     */
    "Duration": number;
    /**
     * 资源包时长单位，取值：
     * - Month
     * - Year
     * 默认为Month。
     * @example `Month`
     */
    "PricingCycle": string;
}
