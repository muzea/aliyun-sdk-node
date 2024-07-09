export interface ListHostAccountsForHostShareKeyResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `EC9BF0F4-8983-491A-BC8C-1B4DD94976DE`
     */
    RequestId: string;
    /**
     * 主机共享密钥关联的主机账号的列表。
     */
    HostAccounts: {
        /**
         * 主机账号的名称。
         * @example `root1234`
         */
        HostAccountName: string;
        /**
         * 主机的ID。
         * @example `1113`
         */
        HostId: string;
        /**
         * 主机账号的ID。
         * @example `1235`
         */
        HostsAccountId: string;
        /**
         * 运维协议的名称。
         * @example `SSH`
         */
        ProtocolName: string;
    }[];
    /**
     * 主机共享密钥关联的主机账号的总数量。
     * @example `5`
     */
    TotalCount: number;
}
