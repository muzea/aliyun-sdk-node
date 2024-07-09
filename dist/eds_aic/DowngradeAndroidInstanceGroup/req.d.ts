export interface DowngradeAndroidInstanceGroupRequest {
    /**
     * 实例组ID。
     * @example `ag-cuv4scs4obxhs****`
     */
    "InstanceGroupId": string;
    /**
     * 待删除的实例ID列表。
     */
    "AndroidInstanceIds"?: string[];
    /**
     * 是否自动付费。默认为false。
     * @example `true`
     */
    "AutoPay"?: boolean;
}
