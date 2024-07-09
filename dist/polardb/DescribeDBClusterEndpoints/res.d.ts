export interface DescribeDBClusterEndpointsResponse {
    /**
     * 请求ID。
     * @example `2DC120BF-6EBA-4C63-BE99-B09F9E******`
     */
    RequestId: string;
    /**
     * 集群地址详情。
     */
    Items: {
        /**
         * 目标连接地址下各节点的角色名称，其中主节点为**Writer**；由于一个连接地址下可加入多个只读节点，因此每个只读节点的角色名称后会加上数字作为区分，如**Reader1**、**Reader2**，以此类推。
         * > 仅PolarDB PostgreSQL版集群和PolarDB PostgreSQL版（兼容Oracle）集群支持该参数。
         * @example `Reader1`
         */
        NodeWithRoles: string;
        /**
         * 连接地址配置的节点列表。
         * @example `pi-***************,pi-***************`
         */
        Nodes: string;
        /**
         * 读写模式：
         * - **ReadWrite**：可读可写（自动读写分离）。
         * - **ReadOnly**：只读。
         * @example `ReadOnly`
         */
        ReadWriteMode: string;
        /**
         * 连接串信息。
         */
        AddressItems: {
            /**
             * 虚拟交换机ID。
             * @example `vsw-************`
             */
            VSwitchId: string;
            /**
             * 绑定的私有域名，
             * @example `***.***.**.com`
             */
            PrivateZoneConnectionString: string;
            /**
             * 连接串。
             * @example `********.rwlb.polardb-pg-public.rds.aliyuncs.com`
             */
            ConnectionString: string;
            /**
             * 网络类型，取值范围如下：
             * * **Public**：公网
             * * **Private**：私网
             * <props="china">- **Inner**：经典网络</props>
             * <props="china">仅PolarDB MySQL版集群支持经典网络类型。</props>
             * @example `Private`
             */
            NetType: string;
            /**
             * 端口。
             * @example `1521`
             */
            Port: string;
            /**
             * VPC实例ID。
             * >仅PolarDB MySQL版集群会返回该参数。
             * @example `pe-*************`
             */
            VpcInstanceId: string;
            /**
             * 专有网络ID。
             * @example `vpc-***************`
             */
            VPCId: string;
            /**
             * IP地址。
             * @example `192.***.***.***`
             */
            IPAddress: string;
        }[];
        /**
         * 连接地址ID。
         * @example `pe-*************`
         */
        DBEndpointId: string;
        /**
         * 集群地址的高级配置。
         * * **DistributedTransaction**：事务拆分状态，取值范围如下：
         *     * **on**：事务拆分已开启
         *     * **off**：事务拆分已关闭
         * * **ConsistLevel**：会话一致性级别，取值范围如下：
         *     * **0**：最终一致性
         *     * **1**：会话一致性。
         *     * **2**：全局一致性
         * *  **LoadBalanceStrategy**：负载均衡策略，基于负载的自动调度，取值固定为**load**。
         * * **MasterAcceptReads**：主库是否接受读，取值范围如下：
         *     * **on**：主库接受读
         *     * **off**：主库不接受读
         * @example `{\"DistributedTransaction\":\"off\",\"ConsistLevel\":\"0\",\"LoadBalanceStrategy\":\"load\",\"MasterAcceptReads\":\"on\"}`
         */
        EndpointConfig: string;
        /**
         * 地址名称。
         * @example `test`
         */
        DBEndpointDescription: string;
        /**
         * 集群地址类型：
         * - **Cluster**：默认集群地址。
         * - **Primary**：主地址。
         * - **Custom**：自定义集群地址。
         * @example `Custom`
         */
        EndpointType: string;
        /**
         * 新节点是否自动加入默认集群地址：
         * - **Enable**。
         * - **Disable**。
         * @example `Enable`
         */
        AutoAddNewNodes: string;
        /**
         * 集群ID。
         * @example `pc-bp1s826a1up******`
         */
        DBClusterId: string;
    }[];
}
