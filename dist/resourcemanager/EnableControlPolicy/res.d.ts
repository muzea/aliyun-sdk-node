export interface EnableControlPolicyResponse {
    /**
     * 管控策略状态。取值：
     * - Enabled：已开启。
     * - PendingEnable：开启中。
     * - Disabled：已关闭。
     * - PendingDisable：关闭中。
     * @example `PendingEnable`
     */
    EnablementStatus: string;
    /**
     * 请求ID。
     * @example `8CE7BD95-EFFA-4911-A1E0-BD4412697FEB`
     */
    RequestId: string;
}
