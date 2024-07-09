export interface DescribeAcceleratorAutoRenewAttributeResponse {
    /**
     * 全球加速实例ID。
     * @example `ga-bp17frjjh0udz4qz****`
     */
    AcceleratorId: string;
    /**
     * 是否开启了自动续费。取值：
     * - **true**：是。
     * - **false**：否。
     * @example `false`
     */
    AutoRenew: boolean;
    /**
     * 自动续费时长。单位：月。
     * @example `1`
     */
    AutoRenewDuration: number;
    /**
     * 全球加速实例的自动续费状态。取值：
     * - **AutoRenewal**：设置为自动续费。
     * - **Normal**：手动续费。
     * - **NotRenewal**：不再续费，系统不再发送到期提醒，只在到期前第三天发送不续费提醒。
     * @example `Normal`
     */
    RenewalStatus: string;
    /**
     * 请求ID。
     * @example `F591955F-5CB5-4CCE-A75D-17CF2085CE22`
     */
    RequestId: string;
}
