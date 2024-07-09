export interface DescribeInstancesResponse {
    /**
     * 请求ID。
     * @example `1E83311F-0EE4-4922-A3BF-730B312B****`
     */
    RequestId: string;
    /**
     * 实例列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 输入时设置的每页行数。
     * @example `30`
     */
    PageSize: number;
    /**
     * 实例总个数。
     * @example `1`
     */
    TotalCount: number;
    Instances: {
        /**
         * 由Instance组成的集合。
         */
        KVStoreInstance: {
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
             * 实例容量， 单位：MB。
             * @example `4096`
             */
            Capacity: number;
            /**
             * 多活实例的逻辑ID。
             * @example `grr-bp11381ebc16****`
             */
            ReplacateId: string;
            /**
             * 实例的创建时间。
             * @example `2018-11-07T08:49:00Z`
             */
            CreateTime: string;
            /**
             * 实例的内网连接地址。
             * @example `r-bp1zxszhcgatnx****.redis.rds.aliyuncs.com`
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
             * * **PrePaid**：预付费。
             * * **PostPaid**：后付费。
             * @example `PostPaid`
             */
            ChargeType: string;
            /**
             * 架构类型，返回值：
             * * **cluster**：集群版。
             * * **standard**：标准版。
             * * **rwsplit**：读写分离版。
             * * **NULL**：所有类型，默认值。
             * @example `cluster`
             */
            ArchitectureType: string;
            /**
             * 网络类型，返回值：
             * * **CLASSIC**：经典网络。
             * * **VPC**：专有网络。
             * @example `CLASSIC`
             */
            NetworkType: string;
            /**
             * 实例的访问模式，返回值：
             * * **Standard**：标准访问模式。
             * * **Safe**：数据库代理模式。
             * @example `Standard`
             */
            ConnectionMode: string;
            /**
             * Redis服务端口。
             * @example `6379`
             */
            Port: number;
            /**
             * 备可用区ID。
             * > 若**ZoneId**参数已返回多可用区，例如"cn-hangzhou-MAZ10(h,i)"，本参数将不返回备可用区ID。
             * @example `cn-hangzhou-h`
             */
            SecondaryZoneId: string;
            /**
             * <props="china">Redis实例的引擎版本，返回值：**2.8**、**4.0**、**5.0**或**6.0**。</props>
             * <props="intl">Redis实例的引擎版本，返回值：**2.8**、**4.0**或**5.0**。</props>
             * <props="partner">Redis实例的引擎版本，返回值：**2.8**、**4.0**或**5.0**。</props>
             * @example `4.0`
             */
            EngineVersion: string;
            /**
             * 套餐类型，返回值：
             * * **standard**：标准套餐。
             * * **customized**：定制套餐。
             * @example `standard`
             */
            PackageType: string;
            /**
             * 实例的参数设置情况，详情请参见[参数设置](~~43885~~)。
             * @example `{\"maxmemory-policy\":\"volatile-lfu\",\"EvictionPolicy\":\"volatile-lru\",\"hash-max-ziplist-entries\":512,\"zset-max-ziplist-entries\":128,\"zset-max-ziplist-value\":64,\"set-max-intset-entries\":512,\"hash-max-ziplist-value\":64,\"#no_loose_disabled-commands\":\"flushall,flushdb\",\"lazyfree-lazy-eviction\":\"yes\"}`
             */
            Config: string;
            /**
             * 实例带宽，单位：MB/s。
             * @example `96`
             */
            Bandwidth: number;
            /**
             * 实例的名称。
             * @example `apitest`
             */
            InstanceName: string;
            /**
             * 集群的数据节点数。
             * > 云原生版集群或读写分离架构实例才会返回本参数。
             * @example `3`
             */
            ShardCount: number;
            /**
             * 连接使用的用户名，默认包含有一个以实例ID命名的用户名。
             * @example `r-bp1zxszhcgatnx****`
             */
            UserName: string;
            /**
             * 分布式实例ID。
             * > 当实例为分布式实例中的子实例时，才会返回该参数。
             * @example `gr-bp14rkqrhac****`
             */
            GlobalInstanceId: string;
            /**
             * 每秒请求数（Queries per Second）。
             * @example `100000`
             */
            QPS: number;
            /**
             * 实例的规格。
             * @example `redis.logic.sharding.2g.2db.0rodb.4proxy.default`
             */
            InstanceClass: string;
            /**
             * 销毁实例的时间。
             * @example `2019-04-28T10:03:01Z`
             */
            DestroyTime: string;
            /**
             * 实例的ID。
             * @example `r-bp1zxszhcgatnx****`
             */
            InstanceId: string;
            /**
             * 实例类型，返回值：
             * * **Tair**。
             * * **Redis**。
             * * **Memcache**。
             * @example `Redis`
             */
            InstanceType: string;
            /**
             * 是否有未生效的续费变配订单，返回值：
             * * **true**：是。
             * * **false**：否。
             * @example `false`
             */
            HasRenewChangeOrder: boolean;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 包年包月实例到期时间。
             * @example `2019-06-13T16:00:00Z`
             */
            EndTime: string;
            /**
             * 虚拟交换机的ID。
             * @example `vsw-bp1e7clcw529l773d****`
             */
            VSwitchId: string;
            /**
             * 节点类型，返回值：
             * * **double**：双副本。
             * * **single**：单副本（已下线）。
             * @example `double`
             */
            NodeType: string;
            /**
             * 实例的连接数限制。
             * @example `20000`
             */
            Connections: number;
            /**
             * 实例所属的资源组ID。
             * @example `rg-acfmyiu4ekp****`
             */
            ResourceGroupId: string;
            /**
             * 可用区ID。
             * @example `cn-hangzhou-b`
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
             * @example `Normal`
             */
            InstanceStatus: string;
            /**
             * 实例计算类型，返回值:
             * - **Ecs**: 云原生
             * - **Machine**: 物理机
             * @example `Ecs`
             */
            ComputingType: string;
            /**
             * 仅云盒实例显示该参数。
             * @example `cloudbox`
             */
            CloudType: string;
            /**
             * 实例类型，取值：
             * - **Community**：社区版。
             * - **Enterprise**：企业版。
             * @example `Enterprise`
             */
            EditionType: string;
            Tags: {
                /**
                 * 标签信息。
                 */
                Tag: {
                    /**
                     * Tag的Key。
                     * @example `key1`
                     */
                    Key: string;
                    /**
                     * Tag的Value。
                     * @example `value1`
                     */
                    Value: string;
                }[];
            };
            /**
             * 数据分片节点规格，规格详情请参见[规格查询导航](~~26350~~)。
             * > 集群架构实例的整体性能为：分片节点规格（ShardClass） * 分片数（ShardCount）。
             * @example `redis.shard.small.ce`
             */
            ShardClass: string;
        }[];
    };
}
