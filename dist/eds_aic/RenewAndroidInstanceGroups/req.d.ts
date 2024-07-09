export interface RenewAndroidInstanceGroupsRequest {
    /**
     * 实例组ID列表。
     */
    "InstanceGroupIds"?: string[];
    /**
     * 指定续费时长。单位由PeriodUnit指定。
     * @example `6`
     */
    "Period"?: number;
    /**
     * 续费时长的时间单位，即参数Period的单位。默认值：Month。
     * @example `Month`
     */
    "PeriodUnit"?: string;
    /**
     * 是否自动支付。
     * @example `true`
     */
    "AutoPay"?: boolean;
}
