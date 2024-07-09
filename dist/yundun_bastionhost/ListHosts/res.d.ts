export interface ListHostsResponse {
    /**
     * 查询到的主机总数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `EC9BF0F4-8983-491A-BC8C-1B4DD94976DE`
     */
    RequestId: string;
    /**
     * 查询到的主机列表。
     */
    Hosts: {
        /**
         * 主机的备注信息。
         * @example `host`
         */
        Comment: string;
        /**
         * 主机地址类型。取值：
         * - **Public** ：公网地址
         * - **Private** ：私网地址
         * @example `Public`
         */
        ActiveAddressType: string;
        /**
         * 主机的公网地址，可为域名或IP地址。
         * @example `1.1.XX.XX`
         */
        HostPublicAddress: string;
        /**
         * 主机名称。
         * @example `name`
         */
        HostName: string;
        /**
         * 主机账号数。
         * @example `1`
         */
        HostAccountCount: number;
        /**
         * 主机的来源。取值：
         * - **Local**：本地主机
         * - **Ecs**：ECS实例
         * - **Rds**：RDS专属集群主机
         * @example `Local`
         */
        Source: string;
        /**
         * 主机的私网地址，可为域名或IP地址。
         * @example `192.168.XX.XX`
         */
        HostPrivateAddress: string;
        /**
         * 主机的操作系统。取值：
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
        /**
         * 主机状态。取值：
         *  - **Normal**   ：正常
         * - **Release**： 已释放
         * @example `Normal`
         */
        SourceInstanceState: string;
        /**
         * 主机对应的ECS实例ID或专属集群主机ID。
         * > **Source**为**Local**时，该参数返回值为空。
         * @example `i-bp19ienyt0yax748****`
         */
        SourceInstanceId: string;
    }[];
}
