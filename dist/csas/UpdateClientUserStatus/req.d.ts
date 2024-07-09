export interface UpdateClientUserStatusRequest {
    /**
     * 用户ID。
     * @example `1495`
     */
    "Id": string;
    /**
     * 用户启用状态。取值：
     * - **Enabled**：开启。
     * - **Disabled**：关闭。
     * @example `Enabled`
     */
    "Status": string;
}
