export interface ListHostAccountsResponse {
    /**
     * 查询到的主机账户总数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `EC9BF0F4-8983-491A-BC8C-1B4DD94976DE`
     */
    RequestId: string;
    /**
     * 查询到的主机账户列表。
     */
    HostAccounts: {
        /**
         * 当前主机账户是否设置了密码。<br>取值：
         * - true：已设置密码。
         * - false：未设置密码。
         * @example `true`
         */
        HasPassword: boolean;
        /**
         * 主机账户的私钥指纹信息。
         * @example `fe:ca:37:42:30:00:9d:95:e6:73:e5:b0:32:0a:**:**`
         */
        PrivateKeyFingerprint: string;
        /**
         * 主机账户的协议名称。
         * <br>取值：
         * - SSH
         * - RDP
         * @example `SSH`
         */
        ProtocolName: string;
        /**
         * 主机账户名称。
         * @example `abc`
         */
        HostAccountName: string;
        /**
         * 主机账户ID。
         * @example `1`
         */
        HostAccountId: string;
        /**
         * 主机ID。
         * @example `1`
         */
        HostId: string;
        /**
         * 主机共享密钥ID。
         * @example `1`
         */
        HostShareKeyId: string;
        /**
         * 主机共享密钥名称。
         * @example `name`
         */
        HostShareKeyName: string;
    }[];
}
