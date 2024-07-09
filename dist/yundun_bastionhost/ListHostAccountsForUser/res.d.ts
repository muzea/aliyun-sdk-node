export interface ListHostAccountsForUserResponse {
    /**
     * 查询到的主机账户总数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `EC9BF0F4-8983-491A-BC8C-1B4DD94976DE `
     */
    RequestId: string;
    /**
     * 查询到的主机账户列表。
     */
    HostAccounts: {
        /**
         * 主机账户名称。
         * @example `root`
         */
        HostAccountName: string;
        /**
         * 主机账户ID。
         * @example `1`
         */
        HostAccountId: string;
        /**
         * 主机账户是否授权给当前用户。取值：
         * - **true**：已授权
         * - **false**：未授权
         * @example `true`
         */
        IsAuthorized: boolean;
        /**
         * 主机账户的协议名称。取值：
         * - **SSH**
         * - **RDP**
         * @example `SSH`
         */
        ProtocolName: string;
        /**
         * 主机账户所在主机的ID。
         * @example `1`
         */
        HostId: string;
    }[];
}
