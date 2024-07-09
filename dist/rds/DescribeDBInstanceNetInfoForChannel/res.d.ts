export interface DescribeDBInstanceNetInfoForChannelResponse {
    /**
     * 实例网络类型。返回值：
     * * **VPC**：专有网络。
     * * **Classic**：经典网络。
     * @example `VPC`
     */
    InstanceNetworkType: string;
    /**
     * 请求ID。
     * @example `61DF1F28-F409-50C0-B90A-CCE82D44****`
     */
    RequestId: string;
    DBInstanceNetInfos: {
        /**
         * 实例连接信息列表。
         */
        DBInstanceNetInfo: {
            /**
             * 内部参数，无需关注。
             * @example `Disabled`
             */
            Upgradeable: string;
            /**
             * 实例经典网络地址的有效时间，单位：秒。
             * @example `5183779`
             */
            expiredTime: string;
            /**
             * IP地址的网络类型，返回值：
             * * **Public**：公网。
             * * **Inner**：经典网络。
             * * **Private**：专有网络。
             * @example `Inner`
             */
            IPType: string;
            /**
             * 服务端口。
             * @example `6379`
             */
            Port: string;
            /**
             * 实例所属的专有网络（VPC）的ID。
             * @example `vpc-bp1nme44gek34slfc****`
             */
            VPCId: string;
            /**
             * 可用状态，取值：
             * * **Unavailable**：不可用。
             * * **Available**：可用。
             * @example `Unavailable`
             */
            Availability: string;
            /**
             * 实例所属的虚拟交换机（vSwitch）ID。
             * @example `vsw-bp1e7clcw529l773d****`
             */
            VSwitchId: string;
            /**
             * 连接地址类型，取值：
             * * **Normal**：普通连接地址。
             * * **ReadWriteSplitting**：共享代理的读写分离地址。
             * @example `Normal`
             */
            ConnectionStringType: string;
            /**
             * 连接地址。
             * @example `rm-uf6w****.mysql.rds.aliyuncs.com`
             */
            ConnectionString: string;
            /**
             * 共享代理的只读实例延迟阈值，单位：秒。
             * > 只在**ConnectionStringType**为**ReadWriteSplitting**时返回该参数。
             * @example `12`
             */
            MaxDelayTime: string;
            /**
             * IP地址。
             * @example `172.16.XX.XX`
             */
            IPAddress: string;
            /**
             * 共享代理的读请求分配策略，只在读写分离连接地址返回该参数，取值：
             * * **Standard**：按规格权重自动分配。
             * * **Custom**：自定义分配权重。
             * @example `Standard`
             */
            DistributionType: string;
            SecurityIPGroups: {
                /**
                 * 实例的IP白名单分组列表。
                 */
                securityIPGroup: {
                    /**
                     * 白名单IP。
                     * @example `127.0.XX.XX`
                     */
                    SecurityIPs: string;
                    /**
                     * IP白名单分组名称。
                     * @example `Default`
                     */
                    SecurityIPGroupName: string;
                }[];
            };
            DBInstanceWeights: {
                /**
                 * 共享代理的读写分离权重信息列表。
                 */
                DBInstanceWeight: {
                    /**
                     * 实例可用状态。返回值：
                     * * **Unavailable**：不可用。
                     * * **Available**：可用。
                     * @example `Unavailable`
                     */
                    Availability: string;
                    /**
                     * 实例当前权重。
                     * @example `100`
                     */
                    Weight: string;
                    /**
                     * 实例ID。
                     * @example `rm-uf6wjk5****`
                     */
                    DBInstanceId: string;
                    /**
                     * 实例类型。返回值：
                     * * **Master**：主实例。
                     * * **Readonly**：只读实例。
                     * @example `Master`
                     */
                    DBInstanceType: string;
                }[];
            };
        }[];
    };
}
