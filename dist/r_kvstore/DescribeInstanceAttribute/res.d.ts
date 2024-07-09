export interface DescribeInstanceAttributeResponse {
    /**
     * 请求ID。
     * @example `CA40C261-EB72-4EDA-AC57-958722162595`
     */
    RequestId: string;
    Instances: {
        /**
         * 实例详细信息列表。
         */
        DBInstanceAttribute: {
            /**
             * 专有网络（VPC）的ID。
             * @example `vpc-bp1nme44gek34slfc****`
             */
            VpcId: string;
            /**
             * 专有网络IP地址。
             * > 实例的网络类型为经典网络时，不会返回本参数。
             * @example `172.16.49.***`
             */
            PrivateIp: string;
            /**
             * 存储容量，单位：MB。
             * @example `1024`
             */
            Capacity: number;
            /**
             * 实例创建时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2019-03-06T10:42:03Z`
             */
            CreateTime: string;
            /**
             * 实例的内网连接地址。
             * @example `r-bp1d72gwl41z7f****.redis.rds.aliyuncs.com`
             */
            ConnectionDomain: string;
            /**
             * 是否属RDS管控，返回值：
             * * **true**：是。
             * * **false**：否。
             * @example `true`
             */
            IsRds: boolean;
            /**
             * 付费类型，返回值：
             * * **PrePaid**：预付费，即包年包月。
             * * **PostPaid**：后付费，即按量付费。
             * @example `PostPaid`
             */
            ChargeType: string;
            /**
             * 存储类型。
             * @example `essd_pl1`
             */
            StorageType: string;
            /**
             * VPC认证模式，返回值：
             * * **Open**：需要密码认证。
             * * **Close**：关闭密码认证，即开启了[VPC免密功能](~~85168~~)。
             * @example `Open`
             */
            VpcAuthMode: string;
            /**
             * 实例的架构，返回值：
             * * **cluster**：集群版。
             * * **standard**：标准版。
             * * **rwsplit**：读写分离版。
             * @example `standard`
             */
            ArchitectureType: string;
            /**
             * 当月的可用性指标。
             * @example `100%`
             */
            AvailabilityValue: string;
            /**
             * 网络类型，返回值：
             * * **CLASSIC**：经典网络。
             * * **VPC**：专有网络。
             * @example `CLASSIC`
             */
            NetworkType: string;
            /**
             * Redis服务端口。
             * @example `6379`
             */
            Port: number;
            /**
             * 备可用区ID。
             * > 实例没有备可用区ID时，不返回本参数。
             * @example `cn-hongkong-h`
             */
            SecondaryZoneId: string;
            /**
             * 套餐类型，返回值：
             * * **standard**：标准套餐。
             * * **customized**：定制套餐，已下线。
             * @example `standard`
             */
            PackageType: string;
            /**
             * <props="china">数据库版本，返回值：**2.8**、**4.0**、**5.0**或**6.0**。</props>
             * <props="intl">数据库版本，返回值：**2.8**、**4.0**或**5.0**。</props>
             * <props="partner">数据库版本，返回值：**2.8**、**4.0**或**5.0**。</props>
             * @example `4.0`
             */
            EngineVersion: string;
            /**
             * 实例的参数配置信息，格式为JSON，详情请参见[参数说明](~~43885~~)，
             * 查看审计日志配置可使用[DescribeAuditLogConfig](~~473830~~)接口。
             * @example `{\"EvictionPolicy\":\"volatile-lru\",\"hash-max-ziplist-entries\":512,\"zset-max-ziplist-entries\":128,\"zset-max-ziplist-value\":64,\"set-max-intset-entries\":512,\"hash-max-ziplist-value\":64}`
             */
            Config: string;
            /**
             * VPC实例ID。
             * @example `r-bp1d72gwl41z7f****`
             */
            VpcCloudInstanceId: string;
            /**
             * 带宽，单位：MB/s。
             * @example `10`
             */
            Bandwidth: number;
            /**
             * 实例名称。
             * @example `apitest`
             */
            InstanceName: string;
            /**
             * IP白名单。
             * @example `127.0.0.1`
             */
            SecurityIPList: string;
            /**
             * 分片数，本参数仅适用于中国站。
             * <props="china">当Redis实例为[集群架构](~~52228~~)的云盘实例时，才会返回本参数。</props>
             * @example `2`
             */
            ShardCount: number;
            /**
             * 只读节点数，本参数仅适用于云盘版读写分离架构实例。
             * @example `5`
             */
            ReadOnlyCount: number;
            /**
             * 所属的分布式实例ID。
             * > 当Redis实例为分布式实例中的子实例时，才会返回本参数。
             * @example `gr-bp14rkqrhac****`
             */
            GlobalInstanceId: string;
            /**
             * 理论最大QPS值。
             * @example `100000`
             */
            QPS: number;
            /**
             * 审计日志中设置的日志保留时间，单位为天。0代表未开通审计日志，开通方式请参见[开通审计日志](~~102015~~)。
             * @example `15`
             */
            AuditLogRetention: string;
            /**
             * 可用区类型，返回值：
             * * **singlezone**：同城单可用区。
             * * **doublezone**：同城双可用区。
             * @example `singlezone`
             */
            ZoneType: string;
            /**
             * 可运维开始时间，格式为<i>HH:mmZ</i>（UTC时间）。
             * @example `18:00Z`
             */
            MaintainStartTime: string;
            /**
             * 可运维结束时间，格式为<i>HH:mmZ</i>（UTC时间）。
             * @example `22:00Z`
             */
            MaintainEndTime: string;
            /**
             * 实例规格，请参见[实例规格表](~~107984~~)。
             * @example `redis.master.small.default`
             */
            InstanceClass: string;
            /**
             * 当实例为云盘集群实例时，本参数为云盘集群实例的实际分片规格，InstanceClass参数为虚拟规格。
             * > 如需查询该规格的实例费用，可在[DescribePrice](~~95612~~)接口中指定本参数返回的实例规格进行查询。
             * @example `tair.rdb.with.proxy.1g`
             */
            RealInstanceClass: string;
            /**
             * 实例ID。
             * @example `r-bp1d72gwl41z7f****`
             */
            InstanceId: string;
            /**
             * 实例类型，返回值：
             * - **Tair**
             * - **Redis**
             * - **Memcache**
             * @example `Redis`
             */
            InstanceType: string;
            /**
             * 是否有未生效的续费变配订单，返回值：
             * * **true**：是。
             * * **false**：否。
             * @example `false`
             */
            HasRenewChangeOrder: string;
            /**
             * 是否开启了实例释放保护，返回值：
             * * **true**：已开启。
             * * **false**：未开启。
             * @example `false`
             */
            InstanceReleaseProtection: boolean;
            /**
             * 副本架构，返回值：
             * * **master-slave**：标准版的主从架构。
             * * **cluster**：集群架构，包含读写分离版或集群版。
             * * **db**：云原生分片集群架构。
             * @example `master-slave`
             */
            ReplicationMode: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 预付费实例到期时间，格式为yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
             * @example `2019-04-06T10:42:03Z`
             */
            EndTime: string;
            /**
             * 虚拟交换机ID。
             * @example `vsw-bp1e7clcw529l773d****`
             */
            VSwitchId: string;
            /**
             * 副本ID。
             * @example `bls-awxxxxxxxxxxxxx`
             */
            ReplicaId: string;
            /**
             * 节点类型，返回值：
             * * **double**：双副本。
             * * **single**：单副本。
             * * **readone**：经典架构读写分离实例，一个只读节点。
             * * **readthree**：经典架构读写分离实例，三个只读节点。
             * @example `double`
             */
            NodeType: string;
            /**
             * 实例连接数限制。
             * @example `10000`
             */
            Connections: number;
            /**
             * 允许闪回的最早时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * > * 当Redis实例开启了[数据闪回](~~148479~~)功能，才会返回本参数。
             * > * 调用[RestoreInstance](~~61083~~)接口执行数据闪回时，可通过本参数的返回值确认允许闪回的最早时间点（即**RestoreTime**可传入的最早时间点）。
             * @example `2021-07-06T05:49:55Z`
             */
            BackupLogStartTime: string;
            /**
             * 备可用区的只读节点数，该参数仅在多可用区中开启读写分离后才会返回。
             * @example `2`
             */
            SlaveReadOnlyCount: number;
            /**
             * 实例所属的资源组ID。
             * @example `rg-acfmyiu4ekp****`
             */
            ResourceGroupId: string;
            /**
             * 可用区ID。
             * @example `cn-hongkong-b`
             */
            ZoneId: string;
            /**
             * 实例状态，返回值：
             * * **Normal**：正常。
             * * **Creating**：创建中。
             * * **Changing**：修改中。
             * * **Inactive**：被禁用。
             * * **Flushing**：清除中。
             * * **Released**：已释放。
             * * **Transforming**：转换中。
             * * **Unavailable**：服务停止。
             * * **Error**：创建失败。
             * * **Migrating**：迁移中。
             * * **BackupRecovering**：备份恢复中。
             * * **MinorVersionUpgrading**：小版本升级中。
             * * **NetworkModifying**：网络变更中。
             * * **SSLModifying**：SSL变更中。
             * * **MajorVersionUpgrading**：大版本升级中，可正常访问。
             * > 更多实例状态及详细信息，请参见[实例状态与影响](~~200740~~)。
             * @example `Normal`
             */
            InstanceStatus: string;
            /**
             * 数据库类型，返回值固定为**Redis**。
             * @example `Redis`
             */
            Engine: string;
            /**
             * 云盘的存储空间。
             * @example `50`
             */
            Storage: string;
            /**
             * 仅云盒实例显示该参数。
             * @example `cloudbox`
             */
            CloudType: string;
            /**
             * 实例订单是否完成，用于判断变配订单是否到达终态，返回值：
             * * **true**：变配已完成，或进行未变配。
             * * **false**：变配中。
             * @example `true`
             */
            IsOrderCompleted: boolean;
            /**
             * 实例是否支持开启透明数据加密TDE（Transparent Data Encryption）功能，返回值：
             * * **true**：支持，仅本地盘版[内存型](~~443827~~)实例支持。
             * * **false**：不支持。
             * @example `true`
             */
            IsSupportTDE: boolean;
            Tags: {
                /**
                 * 标签信息。
                 */
                Tag: {
                    /**
                     * 标签key。
                     * @example `tagkey`
                     */
                    Key: string;
                    /**
                     * 标签value。
                     * @example `tagvalue`
                     */
                    Value: string;
                }[];
            };
        }[];
    };
}
