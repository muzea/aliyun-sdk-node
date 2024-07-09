export interface DisableControlPolicyResponse {
    /**
     * 管控策略状态。取值：
     * - Enabled：已开启。
     * - PendingEnable：开启中。
     * - Disabled：已关闭。
     * - PendingDisable：关闭中。
     * @example `PendingDisable`
     */
    EnablementStatus: string;
    /**
     * 请求ID。
     * @example `7C709979-451D-4C92-835D-7DDCCAA562E9`
     */
    RequestId: string;
}
