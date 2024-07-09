export interface DescribeDBInstancesOverviewResponse {
    /**
     * 查询结果中实例的数量。
     * @example `1`
     */
    TotalCount: string;
    /**
     * 请求ID。
     * @example `52820D2B-B2DD-59F0-BDF2-83EC19C6F1CA`
     */
    RequestId: string;
    /**
     * 实例信息列表。
     */
    DBInstances: {
        /**
         * 实例创建的时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2022-01-05T03:18:53Z`
         */
        CreationTime: string;
        /**
         * 实例到期时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
         * @example `2022-02-05T16:00Z`
         */
        ExpireTime: string;
        /**
         * 实例的标签信息。
         */
        Tags: {
            /**
             * 实例的标签键。N的取值范围为**1**~**20**。
             * - 不能以`aliyun`、`acs:`、`http://`或`https://`开头。
             * - 最多支持64个字符。
             * - 不允许传入空字符串。
             * @example `testdatabase`
             */
            Key: string;
            /**
             * 实例的标签值。N的取值范围为**1**~**20**。
             * - 不能以`aliyun`、`acs`:、`http://`或`https://`开头。
             * - 最多支持128个字符。
             * - TagValue可以为空。
             * @example `apitest`
             */
            Value: string;
        }[];
        /**
         * 实例最后一次降配时间。
         * @example `2021-05-08`
         */
        LastDowngradeTime: string;
        /**
         * Shard节点信息列表。
         * > 实例类型为分片集群实例时返回该参数。
         */
        ShardList: {
            /**
             * Shard节点的规格。
             * @example `dds.shard.mid`
             */
            NodeClass: string;
            /**
             * Shard节点的描述信息。
             * @example `测试shard节点`
             */
            NodeDescription: string;
            /**
             * Shard节点的存储空间，单位为GB。
             * @example `10`
             */
            NodeStorage: number;
            /**
             * Shard节点的ID。
             * @example `d-bp1cac6f2083****`
             */
            NodeId: string;
            /**
             * Shard节点中只读节点的个数。返回值范围：**0**~**5**。
             * @example `2`
             */
            ReadonlyReplicas: number;
        }[];
        /**
         * 实例类型，取值：
         * - **sharding**：分片集群实例。
         * - **replicate**：副本集实例和单节点实例。
         * <props="china">
         * - **serverless**：Serverless实例。
         * </props>
         * @example `replicate`
         */
        DBInstanceType: string;
        /**
         * 实例数据销毁时间，格式为yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
         * @example `2021-12-10T16:00:00Z`
         */
        DestroyTime: string;
        /**
         * 实例付费类型，取值：
         * - **PrePaid**：预付费，包年包月。
         * - **PostPaid**：按量付费。
         * @example `PrePaid`
         */
        ChargeType: string;
        /**
         * 实例消耗的读写吞吐量。
         * > - 当实例类型为Serverless实例时返回该参数。
         * > - 仅中国站支持Serverless实例。
         * @example `100`
         */
        CapacityUnit: string;
        /**
         * 是否开启了专有网络免密访问功能。取值：
         * - **Open**：开启。
         * - **Close**：关闭。
         * @example `Open`
         */
        VpcAuthMode: string;
        /**
         * 实例的状态信息，取值详情请参见[实例状态表](~~63870~~)。
         * @example `Running`
         */
        DBInstanceStatus: string;
        /**
         * 实例网络类型，取值：
         * - **Classic**：经典网络。
         * - **VPC**：VPC网络。
         * @example `VPC`
         */
        NetworkType: string;
        /**
         * 实例的锁定状态。
         * * **Unlock**：正常。
         * * **ManualLock**：手动触发锁定。
         * * **LockByExpiration**：实例过期自动锁定。
         * * **LockByRestoration**：实例回滚前自动锁定。
         * * **LockByDiskQuota**：实例空间满自动锁定。
         * * **Released**：实例已释放。此时实例无法进行解锁，只能使用备份数据重新创建新实例，重建时间较长，请耐心等待。
         * @example `Unlock`
         */
        LockMode: string;
        /**
         * 实例的数据库版本。
         * @example `4.2`
         */
        EngineVersion: string;
        /**
         * Mongos节点信息列表。
         * > 实例类型为分片集群实例时返回该参数。
         */
        MongosList: {
            /**
             * Mongos节点规格。
             * @example `dds.mongos.standard`
             */
            NodeClass: string;
            /**
             * Mongos节点描述。
             * @example `测试mongos节点`
             */
            NodeDescription: string;
            /**
             * Mongos节点ID。
             * @example `s-bp10e3b0d02f****`
             */
            NodeId: string;
        }[];
        /**
         * 实例所属地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 实例的存储空间大小，单位为GB。
         * @example `20`
         */
        DBInstanceStorage: number;
        /**
         * 实例所属资源组ID。
         * @example `rg-acfm22cdcgc****`
         */
        ResourceGroupId: string;
        /**
         * 实例所属可用区。
         * @example `cn-hangzhou-i`
         */
        ZoneId: string;
        /**
         * 实例ID。
         * @example `dds-bp12c5b040dc****`
         */
        DBInstanceId: string;
        /**
         * 实例规格。不同类型实例的规格分别请参见：
         * - [单节点实例规格表](~~311407~~)
         * - [副本集实例规格表](~~311410~~)
         * - [分片集群实例规格表](~~311414~~)
         * <props="china">
         * > Serverless实例不需要传入该参数。</props>
         * @example `dds.mongo.mid`
         */
        DBInstanceClass: string;
        /**
         * 数据库引擎，取值为**MongoDB**。
         * @example `MongoDB`
         */
        Engine: string;
        /**
         * 实例中节点的个数。
         * > 实例类型为副本集实例时返回该参数。
         * @example `3`
         */
        ReplicationFactor: string;
        /**
         * 实例的描述或备注信息。
         * @example `测试数据库`
         */
        DBInstanceDescription: string;
        /**
         * 表示实例的类型。取值：
         * - **0**：物理机
         * - **1**：ECS
         * - **2**：DOCKER
         * - **18**：k8s新架构实例
         * @example `0`
         */
        KindCode: string;
    }[];
}
