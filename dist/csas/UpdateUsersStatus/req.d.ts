export interface UpdateUsersStatusRequest {
    /**
     * 用户ID集合。
     */
    "SaseUserIds": string[];
    /**
     * 登录用户状态。取值：
     * - **Enabled**：启用。
     * - **Disabled**：禁用。
     * @example `Enabled`
     */
    "Status": string;
}
