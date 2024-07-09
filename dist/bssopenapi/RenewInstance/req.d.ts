export interface RenewInstanceRequest {
    /**
     * 产品代码。
     * @example `rds`
     */
    "ProductCode": string;
    /**
     * 实例ID。
     * @example `rm-skjdhaskjdh`
     */
    "InstanceId": string;
    /**
     * 预付费续费时长，单位：月。取值：
     * - 1~9。
     * - 12。
     * - 24。
     * - 36。
     * @example `6`
     */
    "RenewPeriod": number;
    /**
     * 用于保证请求的幂等性。
     * @example `ASKJHKLASJHAFSLKJH`
     */
    "ClientToken"?: string;
    /**
     * 产品类型。
     * @example `rds`
     */
    "ProductType"?: string;
}
