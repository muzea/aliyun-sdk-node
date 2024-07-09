export interface ListOperationHostsResponse {
    /**
     * 查询到的主机列表。
     */
    Hosts: {
        /**
         * 主机地址类型。
         * - **Public** ：公网地址有效
         * - **Private** ：私网地址有效
         * @example `Public`
         */
        ActiveAddressType: string;
        /**
         * 主机的备注信息。
         * @example `comment`
         */
        Comment: string;
        /**
         * 主机ID。
         * @example `1`
         */
        HostId: string;
        /**
         * 主机名称。
         * @example `host1`
         */
        HostName: string;
        /**
         * 主机的私网地址。
         * @example `192.168.XX.XX`
         */
        HostPrivateAddress: string;
        /**
         * 主机的公网地址。
         * @example `10.158.XX.XX`
         */
        HostPublicAddress: string;
        /**
         * 主机的操作系统。
         * - **Linux**
         * - **Windows**
         * @example `Linux`
         */
        OSType: string;
        /**
         * 主机的来源。
         * - **Local**：本地主机
         * - **Ecs**：ECS实例
         * @example `Local`
         */
        Source: string;
        /**
         * ECS实例ID。
         * @example `i-bp19ienyt0yax748****`
         */
        SourceInstanceId: string;
        /**
         * 主机状态。
         *  - **Normal**   ：正常
         * - **Release**： 已释放
         * @example `Normal`
         */
        SourceInstanceState: string;
    }[];
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `4F6C075F-FC86-476E-943B-097BD4E12948`
     */
    RequestId: string;
    /**
     * 查询到的主机总数量。
     * @example `5`
     */
    TotalCount: number;
}
