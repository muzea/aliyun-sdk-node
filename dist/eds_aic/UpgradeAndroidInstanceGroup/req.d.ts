export interface UpgradeAndroidInstanceGroupRequest {
    /**
     * 实例组ID。
     * @example `ag-asguicdjh****`
     */
    "InstanceGroupId"?: string;
    /**
     * 实例组中需要增加的实例数量。
     * @example `10`
     */
    "IncreaseNumberOfInstance"?: number;
    /**
     * 是否自动支付。
     * @example `true`
     */
    "AutoPay"?: boolean;
}
