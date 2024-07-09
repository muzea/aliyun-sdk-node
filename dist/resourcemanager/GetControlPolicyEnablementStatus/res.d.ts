export interface GetControlPolicyEnablementStatusResponse {
    /**
     * 管控策略状态。取值：
     * - Enabled：已开启。
     * - PendingEnable：开启中。
     * - Disabled：已关闭。
     * - PendingDisable：关闭中。
     * @example `Disabled`
     */
    EnablementStatus: string;
    /**
     * 请求ID。
     * @example `1DC39A4E-3B52-4EFE-9F93-4897D7FFA0C4`
     */
    RequestId: string;
}
