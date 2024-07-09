export interface RenewARMServerInstanceRequest {
    /**
     * 待续费的服务器实例ID。
     * @example `yourInstance ID`
     */
    "InstanceId": string;
    /**
     * 续费周期，默认按月续费。取值：1，2，3，4，5，6，7，8，9，12。
     * @example `1`
     */
    "Period": number;
    /**
     * 续费时长的时间单位。取值：
     * - Month（默认）
     * - Year
     * @example `Month`
     */
    "PeriodUnit": string;
    /**
     * 是否自动续费。取值：
     * - **true**：自动续费
     * - **false**：不自动续费（默认）
     * @example `true`
     */
    "AutoRenew"?: boolean;
}
