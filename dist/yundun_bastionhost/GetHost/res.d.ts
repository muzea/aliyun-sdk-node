export interface GetHostResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `EC9BF0F4-8983-491A-BC8C-1B4DD94976DE`
     */
    RequestId: string;
    /**
     * 查询到的主机信息。
     */
    Host: {
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
         * @example `host`
         */
        HostName: string;
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
        /**
         * 主机的协议信息。
         */
        Protocols: {
            /**
             * 主机指纹信息，可以唯一标识一台主机。只有通过堡垒机运维目标主机时，堡垒机才会记录主机指纹，否则返回为空。
             * @example `ssh-ed25519|3e:46:5a:e1:1f:0d:39:7e:61:35:d5:fa:7b:2b:**:**`
             */
            HostFingerPrint: string;
            /**
             * 主机的服务端口。
             * @example `22`
             */
            Port: number;
            /**
             * 主机使用的协议名称。取值：
             * - **SSH**
             * - **RDP**
             * @example `SSH`
             */
            ProtocolName: string;
        }[];
        /**
         * 主机所属的网络域的ID。
         * @example `1`
         */
        NetworkDomainId: string;
    };
}
