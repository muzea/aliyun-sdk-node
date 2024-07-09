export interface DescribeInstancesOverviewResponse {
    /**
     * 请求ID。
     * @example `1E83311F-0EE4-4922-A3BF-730B312B****`
     */
    RequestId: string;
    /**
     * 实例总个数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 由Instance（实例）组成的数组。
     */
    Instances: {
        /**
         * 专有网络ID。
         * @example `vpc-bp1nme44gek34slfc****`
         */
        VpcId: string;
        /**
         * 专有网络IP地址，IP地址可能会发生变化，请通过ConnectionDomain（内网连接地址）进行连接。
         * > - 实例的网络类型为经典网络时，不会返回本参数。
         * > - 云盘版实例不会返回该参数。
         * @example `172.16.49.***`
         */
        PrivateIp: string;
        /**
         * 实例容量， 单位：MB。
         * @example `4096`
         */
        Capacity: number;
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
         * 付费类型，取值：
         * * **PrePaid**：预付费，即包年包月。
         * * **PostPaid**：后付费，即按量付费。
         * @example `PrePaid`
         */
        ChargeType: string;
        /**
         * 架构类型，取值：
         * * **cluster**：集群版。
         * * **standard**：标准版。
         * * **rwsplit**：读写分离版。
         * @example `cluster`
         */
        ArchitectureType: string;
        /**
         * 网络类型，取值：
         * * **CLASSIC**：经典网络。
         * * **VPC**：专有网络。
         * @example `CLASSIC`
         */
        NetworkType: string;
        /**
         * <props="china">Redis实例的引擎版本，返回值：**2.8**、**4.0**、**5.0**、**6.0**或**7.0**。</props>
         * <props="intl">Redis实例的引擎版本，返回值：**2.8**、**4.0**、**5.0**或**6.0**。</props>
         * @example `6.0`
         */
        EngineVersion: string;
        /**
         * 实例的名称。
         * @example `apitest`
         */
        InstanceName: string;
        /**
         * 分布式实例ID。
         * > 当实例为分布式实例中的子实例时，才会返回该参数。
         * @example `gr-bp14rkqrhac****`
         */
        GlobalInstanceId: string;
        /**
         * 实例的规格。
         * @example `redis.logic.sharding.2g.2db.0rodb.4proxy.default`
         */
        InstanceClass: string;
        /**
         * 实例ID。
         * @example `r-bp1zxszhcgatnx****`
         */
        InstanceId: string;
        /**
         * 实例类型，取值：
         * * **Tair**。
         * * **Redis**。
         * * **Memcache**。
         * @example `Redis`
         */
        InstanceType: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 包年包月实例到期时间。
         * @example `2022-06-13T16:00:00Z`
         */
        EndTime: string;
        /**
         * 虚拟交换机的ID。
         * @example `vsw-bp1e7clcw529l773d****`
         */
        VSwitchId: string;
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
         * 实例状态，取值：
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
         * 备可用区ID。
         * > 当实例存在备可用区ID时，才会返回该参数。
         * @example `cn-hangzhou-g`
         */
        SecondaryZoneId: string;
    }[];
}
