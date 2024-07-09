export interface GetInstanceScreenshotRequest {
    /**
     * 实例所在地域ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
     * @example `cn-shenzhen`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * @example `i-bp1gbz20g229bvu5****`
     */
    "InstanceId": string;
    /**
     * 是否唤醒处于休眠状态的实例。
     * 默认值：false
     * @example `false`
     */
    "WakeUp"?: boolean;
}
