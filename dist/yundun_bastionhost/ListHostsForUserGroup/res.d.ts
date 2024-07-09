export interface ListHostsForUserGroupResponse {
    /**
     * 查询到的主机总数量。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `EC9BF0F4-8983-491A-BC8C-1B4DD94976DE`
     */
    RequestId: string;
    /**
     * 查询到的主机列表。
     */
    Hosts: {
        /**
         * 主机的备注信息。
         * @example `comment`
         */
        Comment: string;
        /**
         * 主机的地址类型。取值：
         * - **Public**：公网地址
         * - **Private**：私网地址
         * @example `Public`
         */
        ActiveAddressType: string;
        /**
         * 主机的公网地址，可为域名或IP地址。
         * @example `10.158.XX.XX`
         */
        HostPublicAddress: string;
        /**
         * 主机名称。
         * @example `host1`
         */
        HostName: string;
        /**
         * 主机的私网地址，可为域名或IP地址。
         * @example `192.168.XX.XX`
         */
        HostPrivateAddress: string;
        /**
         * 主机的操作系统类型。取值：
         * - **Linux**
         * - **Windows**
         * @example `Linux`
         */
        OSType: string;
        /**
         * 主机ID。
         * @example `1`
         */
        HostId: string;
    }[];
}
