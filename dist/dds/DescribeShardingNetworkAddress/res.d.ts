export interface DescribeShardingNetworkAddressResponse {
    CompatibleConnections: {
        /**
         * DynamoDB协议类型实例的连接地址信息列表。
         */
        CompatibleConnection: {
            /**
             * 专有网络中交换机ID。
             * > 当网络类型为**VPC**时返回该参数。
             * @example `vsw-bpxxxxxxxx`
             */
            VswitchId: string;
            /**
             * 保留的经典网络地址剩余时长，单位为秒。
             * @example `2591963`
             */
            ExpiredTime: string;
            /**
             * 网络类型。
             * - **VPC**：专有网络。
             * - **Classic**：经典网络。
             * - **Public**：公网。
             * @example `VPC`
             */
            NetworkType: string;
            /**
             * 连接端口。
             * @example `3717`
             */
            Port: string;
            /**
             * 连接地址。
             * @example `dds-bpxxxxxxxxxxxxxx.mongodb.rds.aliyuncs.com`
             */
            NetworkAddress: string;
            /**
             * 专有网络ID。
             * > 当网络类型为**VPC**时返回该参数。
             * @example `vpc-bpxxxxxxxx`
             */
            VPCId: string;
            /**
             * IP地址。
             * @example `10.140.xxx.xx`
             */
            IPAddress: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `18D8AAFD-6BEB-420F-8164-810CB0C0AA39`
     */
    RequestId: string;
    NetworkAddresses: {
        /**
         * MongoDB协议类型实例的连接地址信息列表。
         */
        NetworkAddress: {
            /**
             * 节点类型，返回值为
             * - **mongos**：mongos节点。
             * - **shard**：shard节点。
             * - **configserver**：configserver节点。
             * @example `mongos`
             */
            NodeType: string;
            /**
             * 专有网络中交换机ID。
             * > 当网络类型为**VPC**时返回该参数。
             * @example `vsw-bpxxxxxxxx`
             */
            VswitchId: string;
            /**
             * 保留的经典网络地址剩余时长，单位为秒。
             * @example `2591963`
             */
            ExpiredTime: string;
            /**
             * 网络类型。
             * - **VPC**：专有网络。
             * - **Classic**：经典网络。
             * - **Public**：公网。
             * @example `VPC`
             */
            NetworkType: string;
            /**
             * 节点角色，返回值：
             * - Primary：主节点。
             * - Secondary：从节点。
             * @example `Primary`
             */
            Role: string;
            /**
             * 连接端口。
             * @example `3717`
             */
            Port: string;
            /**
             * 专有网络ID。
             * > 当网络类型为**VPC**时返回该参数。
             * @example `vpc-bpxxxxxxxx`
             */
            VPCId: string;
            /**
             * 连接地址（字符串）。
             * @example `s-bpxxxxxxxx.mongodb.rds.aliyuncs.com`
             */
            NetworkAddress: string;
            /**
             * Mongos节点ID。
             * @example `s-bpxxxxxxxx`
             */
            NodeId: string;
            /**
             * IP地址。
             * @example `10.140.xxx.xx`
             */
            IPAddress: string;
        }[];
    };
}
