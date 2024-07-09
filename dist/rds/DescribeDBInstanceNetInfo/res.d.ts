export interface DescribeDBInstanceNetInfoResponse {
    /**
     * 白名单模式，取值：
     * * **normal**：通用模式。
     * * **safety**：高安全模式。
     * @example `safety`
     */
    SecurityIPMode: string;
    /**
     * 请求ID。
     * @example `777C4593-8053-427B-99E2-105593277CAB`
     */
    RequestId: string;
    /**
     * 网络类型，取值：
     * * **Classic**：经典网络。
     * * **VPC**：专有网络。
     * @example `VPC`
     */
    InstanceNetworkType: string;
    DBInstanceNetInfos: {
        /**
         * 实例的连接地址信息列表。
         */
        DBInstanceNetInfo: {
            /**
             * 交换机ID。
             * @example `vsw-uf6adz52c2p****`
             */
            VSwitchId: string;
            /**
             * 连接地址类型，取值：
             * * **Normal**：普通连接地址。
             * * **ReadWriteSplitting**：读写分离连接地址。
             * @example `Normal`
             */
            ConnectionStringType: string;
            /**
             * 连接地址。
             * @example `rm-uf6w****.mysql.rds.aliyuncs.com`
             */
            ConnectionString: string;
            /**
             * 混访模式下，经典网络的剩余时间，单位：秒。
             * @example `1209534`
             */
            ExpiredTime: string;
            /**
             * IP版本是否能够升级，取值：
             * - **Enable**：可以升级。
             * - **Disabled**：不可以升级。
             * >IPv4版本可以升级到IPv6版本。
             * @example `Disabled`
             */
            Upgradeable: string;
            /**
             * 延迟阈值，只在读写分离连接地址返回该参数，单位：秒。
             * >超过该延迟阈值的只读实例不会被分配流量。
             * @example `12`
             */
            MaxDelayTime: string;
            /**
             * 网络类型。
             * * 经典网络类型取值：
             *     * **Inner**：内网。
             *     * **Public**：外网。
             * * VPC类型取值：
             *     * **Private**：内网。
             *     * **Public**：外网。
             * @example `Public`
             */
            IPType: string;
            /**
             * 连接端口。
             * @example `3306`
             */
            Port: string;
            /**
             * Babelfish for RDS PostgreSQL TDS端口号。
             * > 该参数仅适用于RDS PostgreSQL实例，Babelfish for RDS PostgreSQL的更多介绍，请参见[Babelfish简介](~~428613~~)。
             * @example `1433`
             */
            BabelfishPort: string;
            /**
             * VPC ID。
             * @example `vpc-uf6f7l4fg90*****`
             */
            VPCId: string;
            /**
             * 读请求分配策略，只在读写分离连接地址返回该参数，取值：
             * * **Standard**：按规格权重自动分配。
             * * **Custom**：自定义分配权重。
             * @example `Standard`
             */
            DistributionType: string;
            /**
             * IP地址。
             * @example `192.168.XX.XX`
             */
            IPAddress: string;
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
                 * 实例权重信息列表。
                 * > 开通了读写分离连接地址的实例会返回该参数
                 */
                DBInstanceWeight: {
                    /**
                     * 实例可用状态，取值：
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
                     * 废弃参数。
                     * @example `无`
                     */
                    Role: string;
                    /**
                     * 实例类型，取值：
                     * * **Master**：主实例。
                     * * **Readonly**：只读实例。
                     * @example `Master`
                     */
                    DBInstanceType: string;
                }[];
            };
            /**
             * PgBouncer端口号。
             * > 仅当RDS PostgreSQL实例开启了PgBouncer时，返回此参数。
             * @example `6432`
             */
            PGBouncerPort: string;
        }[];
    };
}
