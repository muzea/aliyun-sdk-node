export interface DescribeDBInstanceNetInfoResponse {
    /**
     * 网络类型，返回值：
     * * **CLASSIC**：经典网络。
     * * **VPC**：专有网络。
     * @example `CLASSIC`
     */
    InstanceNetworkType: string;
    /**
     * 请求ID。
     * @example `FC77D4E1-2A7C-4F0B-A4CC-CE0B9C314B9B`
     */
    RequestId: string;
    NetInfoItems: {
        /**
         * 实例的网络信息列表。
         */
        InstanceNetInfo: {
            /**
             * 是否为直连地址，返回值：
             * * **0**：非直连地址。
             * * **1**：直连地址。
             * @example `0`
             */
            DirectConnection: number;
            /**
             * 虚拟交换机的ID。
             * @example `vsw-bp1e7clcw529l773d****`
             */
            VSwitchId: string;
            /**
             * 该网络信息所属的网络类型：
             * * **0**：公网。
             * * **1**：经典网络。
             * * **2**：专有网络。
             * @example `1`
             */
            DBInstanceNetType: string;
            /**
             * 经典网络连接地址的过期时间，即剩余有效时间，单位为秒。
             * > **0**表示不会过期。
             * @example `0`
             */
            Upgradeable: string;
            /**
             * Redis实例经典网络地址的有效时间，单位：秒。
             * @example `5183779`
             */
            ExpiredTime: string;
            /**
             * 实例的连接地址。
             * @example `r-bp1zxszhcgatnx****.redis.rds.aliyuncs.com`
             */
            ConnectionString: string;
            /**
             * IP地址的网络类型，返回值：
             * * **Public**：公网。
             * * **Inner**：经典网络。
             * * **Private**：VPC网络。
             * @example `Inner`
             */
            IPType: string;
            /**
             * 实例ID。
             * @example `r-bp1ky7j6qc7umk****`
             */
            VPCInstanceId: string;
            /**
             * Redis服务端口。
             * @example `6379`
             */
            Port: string;
            /**
             * 实例所属的专有网络（VPC）的ID。
             * @example `vpc-bp1nme44gek34slfc****`
             */
            VPCId: string;
            /**
             * IP地址。
             * @example `172.16.49.***`
             */
            IPAddress: string;
            /**
             * 表示该地址为备可用区的连接地址，取值为1，表示备可用区。
             * > 该地址仅在开通多可用区读写分离架构后返回。
             * @example `1`
             */
            IsSlaveProxy: number;
        }[];
    };
}
