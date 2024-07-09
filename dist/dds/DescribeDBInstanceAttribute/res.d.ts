export interface DescribeDBInstanceAttributeResponse {
    /**
     * 请求ID。
     * @example `A935A8EE-A6CC-53DE-98BA-20ABAA7E632B`
     */
    RequestId: string;
    DBInstances: {
        /**
         * 实例详细信息。
         */
        DBInstance: {
            /**
             * 实例的创建时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2022-01-02T07:43:59Z`
             */
            CreationTime: string;
            ReplicaSets: {
                /**
                 * 副本集实例信息。
                 * > 当实例类型为副本集实例时，返回该参数。
                 */
                ReplicaSet: {
                    /**
                     * 交换机ID。
                     * > 当实例的网络类型为专有网络时，返回该参数。
                     * @example `vpc-bp1jk5vwkcri27qme****`
                     */
                    VSwitchId: string;
                    /**
                     * 节点的连接端口。
                     * @example `3717`
                     */
                    ConnectionPort: string;
                    /**
                     * 节点的角色，取值说明：
                     * - **Primary**：主节点。
                     * - **Secondary**：从节点。
                     * @example `Primary`
                     */
                    ReplicaSetRole: string;
                    /**
                     * 节点的连接地址。
                     * @example `dds-bp11483712c1****.mongodb.rds.aliyuncs.com`
                     */
                    ConnectionDomain: string;
                    /**
                     * 实例ID。
                     * > 当实例的网络类型为专有网络时，返回该参数。
                     * @example `dds-bp11483712c1****`
                     */
                    VPCCloudInstanceId: string;
                    /**
                     * 网络类型，取值说明：
                     * - **Classic**：经典网络。
                     * - **VPC**：专有网络。
                     * @example `VPC`
                     */
                    NetworkType: string;
                    /**
                     * 专有网络ID。
                     * > 当实例的网络类型为专有网络时，返回该参数。
                     * @example `vpc-bp1jk5vwkcri27qme****`
                     */
                    VPCId: string;
                }[];
            };
            /**
             * 全球多活实例的逻辑ID。
             * > MongoDB当前不支持新购该类型实例，该参数仅适用于老版本全球多活实例。
             * @example `bls-m****`
             */
            ReplacateId: string;
            Tags: {
                /**
                 * 实例的标签信息列表。
                 */
                Tag: {
                    /**
                     * 实例的标签键。
                     * @example `test`
                     */
                    Key: string;
                    /**
                     * 实例的标签值。
                     * @example `api`
                     */
                    Value: string;
                }[];
            };
            /**
             * 私网免密访问模式，取值说明：
             * - **Open**：开启私网免密访问。
             * - **Close**：关闭私网免密访问，需要使用密码访问。
             * - **NotSupport**：不支持该功能。
             * @example `Open`
             */
            VpcAuthMode: string;
            /**
             * 实例的网络类型，取值说明：
             * - **Classic**：经典网络。
             * - **VPC**：专有网络。
             * @example `VPC`
             */
            NetworkType: string;
            /**
             * 实例的锁定状态，取值说明：
             * * **Unlock**：正常，没有被锁定。
             * * **ManualLock**：手动触发锁定。
             * * **LockByExpiration**：实例过期自动锁定。
             * * **LockByRestoration**：实例回滚前自动锁定。
             * * **LockByDiskQuota**：实例空间满自动锁定。
             * * **Released**：实例已释放。
             * @example `Unlock`
             */
            LockMode: string;
            /**
             * 数据库大版本。
             * @example `4.4`
             */
            EngineVersion: string;
            /**
             * 实例最大IOPS。
             * @example `1000`
             */
            MaxIOPS: number;
            /**
             * 实例的最大云盘吞吐量，单位MB/s。
             * @example `350`
             */
            MaxMBPS: number;
            /**
             * 实例ID。
             * > 当实例的网络类型为专有网络时，返回该参数。
             * @example `dds-bp11483712c1****`
             */
            VPCCloudInstanceIds: string;
            MongosList: {
                /**
                 * Mongos节点信息列表。
                 * > 当实例类型为分片集群实例时，返回该参数。
                 */
                MongosAttribute: {
                    /**
                     * Mongos节点的ID。
                     * @example `s-bp1d8c262a158****`
                     */
                    VpcCloudInstanceId: string;
                    /**
                     * Mongos节点的最大IOPS。
                     * @example `800`
                     */
                    MaxIOPS: number;
                    /**
                     * 交换机ID。
                     * > 当实例的网络类型为专有网络时，返回该参数。
                     * @example `vsw-bp1vj604nj5a9zz74****`
                     */
                    VSwitchId: string;
                    /**
                     * Mongos节点的规格。
                     * @example `dds.mongos.mid`
                     */
                    NodeClass: string;
                    /**
                     * Mongos节点的最大连接数。
                     * @example `1000`
                     */
                    MaxConnections: number;
                    /**
                     * Mongos节点的连接端口。
                     * @example `3717`
                     */
                    Port: number;
                    /**
                     * 专有网络ID。
                     * > 当实例的网络类型为专有网络时，返回该参数。
                     * @example `vpc-bp1n3i15v90el48nx****`
                     */
                    VPCId: string;
                    /**
                     * Mongos节点的连接地址。
                     * @example `s-bp1d8c262a15****.mongodb.rds.aliyuncs.com`
                     */
                    ConnectSting: string;
                    /**
                     * Mongos节点的名称。
                     * @example `mongos1`
                     */
                    NodeDescription: string;
                    /**
                     * Mongos节点的ID。
                     * @example `s-bp1d8c262a15****`
                     */
                    NodeId: string;
                    /**
                     * Mongos节点的状态。具体请参见[实例状态表](~~63870~~)。
                     * @example `Running`
                     */
                    Status: string;
                }[];
            };
            /**
             * 实例的访问协议类型，取值说明：
             * - **mongodb**：MongoDB协议。
             * - **dynamodb**：DynamoDB协议。
             * > 当实例类型为分片集群实例时，返回该参数。
             * @example `mongodb`
             */
            ProtocolType: string;
            /**
             * 实例名称。
             * @example `测试数据库`
             */
            DBInstanceDescription: string;
            /**
             * 实例当前数据库的小版本号。
             * @example `5.0.5-20220721143518_0`
             */
            CurrentKernelVersion: string;
            /**
             * 是否开启实例释放保护，取值说明：
             * - **true**：已开启。
             * - **false**：未开启。
             * @example `false`
             */
            DBInstanceReleaseProtection: boolean;
            /**
             * 包年包月实例的到期时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
             * > 当实例的付费类型为包年包月时返回该参数。
             * @example `2022-02-05T16:00Z`
             */
            ExpireTime: string;
            /**
             * 实例可维护时间段的开始时间，格式为<i>HH:mm</i>Z（UTC时间）。
             * @example `18:00Z`
             */
            MaintainStartTime: string;
            /**
             * 实例类型，取值说明：
             * - **replicate**：副本集实例。
             * - **sharding**：分片集群实例。
             * <props="china">
             * - **serverless**：Serverless实例。
             * </props>
             * @example `replicate`
             */
            DBInstanceType: string;
            /**
             * 实例最近一次降配时间。
             * @example `2022-01-08`
             */
            LastDowngradeTime: string;
            ShardList: {
                /**
                 * Shard节点信息列表。
                 * > 当实例类型为分片集群实例时返回该参数。
                 */
                ShardAttribute: {
                    /**
                     * Shard节点的最大IOPS。
                     * @example `8000`
                     */
                    MaxIOPS: number;
                    /**
                     * Shard节点的连接地址。
                     * @example `d-bp1af0680a9c6d3****.mongodb.rds.aliyuncs.com:****`
                     */
                    ConnectString: string;
                    /**
                     * Shard节点的规格。
                     * @example `dds.shard.mid`
                     */
                    NodeClass: string;
                    /**
                     * Shard节点的最大连接数。
                     * @example `8000`
                     */
                    MaxConnections: number;
                    /**
                     * Shard节点的端口。
                     * @example `3717`
                     */
                    Port: number;
                    /**
                     * Shard节点的名称。
                     * @example `testshard`
                     */
                    NodeDescription: string;
                    /**
                     * Shard节点的ID。
                     * @example `d-bp16e09d9c5d****`
                     */
                    NodeId: string;
                    /**
                     * Shard节点的存储空间，单位为GB。
                     * @example `10`
                     */
                    NodeStorage: number;
                    /**
                     * Shard节点中只读节点的个数，取值范围为**0**~**5**（整数）。
                     * @example `0`
                     */
                    ReadonlyReplicas: number;
                    /**
                     * Shard节点的状态，具体请参见[实例状态表](~~63870~~)。
                     * @example `Running`
                     */
                    Status: string;
                    /**
                     * shard节点的最大云盘吞吐量。
                     * @example `350`
                     */
                    MaxDiskMbps: string;
                }[];
            };
            /**
             * 实例可维护时间段的结束时间，格式为<i>HH:mm</i>Z（UTC时间）。
             * @example `03:00Z`
             */
            MaintainEndTime: string;
            /**
             * 实例状态，具体请参见[实例状态表](~~63870~~)。
             * @example `Running`
             */
            DBInstanceStatus: string;
            /**
             * 专有网络ID。
             * > 当实例的网络类型为专有网络时，返回该参数。
             * @example `vpc-bp1n3i15v90el48nx****`
             */
            VPCId: string;
            /**
             * 实例所属地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 实例存储空间。
             * @example `10`
             */
            DBInstanceStorage: number;
            /**
             * 副本集实例的名称。
             * > 当实例类型为副本集实例时，返回该参数。
             * @example `mgset-10ace****`
             */
            ReplicaSetName: string;
            /**
             * 交换机ID。
             * > 当实例的网络类型为专有网络时，返回该参数。
             * @example `vsw-bp1oo2a7isyrb8igf****`
             */
            VSwitchId: string;
            /**
             * 实例的存储引擎类型。
             * @example `WiredTiger`
             */
            StorageEngine: string;
            ConfigserverList: {
                /**
                 * Configserver节点信息列表。
                 * > 当实例类型为分片集群实例时，返回该参数。
                 */
                ConfigserverAttribute: {
                    /**
                     * Configserver节点的最大IOPS。
                     * @example `1000`
                     */
                    MaxIOPS: number;
                    /**
                     * Configserver节点的连接地址。
                     * @example `dds-bp18b0934e7053e4-cs****.mongodb.rds.aliyuncs.com`
                     */
                    ConnectString: string;
                    /**
                     * Configserver节点的规格。
                     * @example `dds.cs.mid`
                     */
                    NodeClass: string;
                    /**
                     * Configserver节点的最大连接数。
                     * @example `1000`
                     */
                    MaxConnections: number;
                    /**
                     * Configserver节点的端口。
                     * @example `3717`
                     */
                    Port: number;
                    /**
                     * Configserver节点的名称。
                     * @example `testConfigserver`
                     */
                    NodeDescription: string;
                    /**
                     * Configserver节点ID。
                     * @example `dds-bp11483712c1****-cs`
                     */
                    NodeId: string;
                    /**
                     * Configserver节点的存储空间，单位为GB。
                     * @example `20`
                     */
                    NodeStorage: number;
                    /**
                     * ConfigServer节点的状态。具体请参见[实例状态表](~~63870~~)。
                     * @example `Running`
                     */
                    Status: string;
                }[];
            };
            /**
             * 实例所属资源组ID。
             * >目前仅中国站支持返回该参数。
             * @example `rg-acfmyiu4ekp****`
             */
            ResourceGroupId: string;
            /**
             * 实例所属可用区ID。
             * @example `cn-hangzhou-b`
             */
            ZoneId: string;
            /**
             * 实例最大连接数。
             * @example `500`
             */
            MaxConnections: number;
            /**
             * 实例ID。
             * @example `dds-bp11483712c1****`
             */
            DBInstanceId: string;
            /**
             * 实例规格。
             * @example `dds.mongo.mid`
             */
            DBInstanceClass: string;
            /**
             * 数据库引擎。
             * @example `MongoDB`
             */
            Engine: string;
            /**
             * 实例的只读节点个数。
             * @example `1`
             */
            ReadonlyReplicas: string;
            /**
             * 实例节点数量。
             * > 实例类型为副本集实例时，返回该参数。
             * @example `3`
             */
            ReplicationFactor: string;
            /**
             * 实例的类型，取值说明：
             * - **0**：本地盘版实例。
             * - **3**：单节点实例。
             * - **18**：云盘版实例。
             * @example `18`
             */
            KindCode: string;
            /**
             * 实例消耗的读写吞吐量。
             * @example `100`
             */
            CapacityUnit: string;
            /**
             * 实例的付费类型，取值说明：
             * - **PrePaid**：预付费，包年包月。
             * - **PostPaid**：后付费，按量付费。
             * @example `PostPaid`
             */
            ChargeType: string;
            /**
             * 存储类型，取值说明：
             * **cloud\_essd1**：ESSD PL1云盘。
             * **cloud\_essd2**：ESSD PL2云盘。
             * **cloud\_essd3**：ESSD PL3云盘。
             * **local\_ssd**：SSD本地盘。
             * **cloud\_essd\_dbfs\_s**：DBFS共享存储云盘。
             * @example `cloud_essd1`
             */
            StorageType: string;
            /**
             * 实现多可用区部署时，实例的备可用区1，取值说明：
             * - **cn-hangzhou-g**：杭州可用区G。
             * - **cn-hangzhou-h**：杭州可用区H。
             * - **cn-hangzhou-i**：杭州可用区I。
             * - **cn-hongkong-b**：香港可用区B。
             * - **cn-hongkong-c**：香港可用区C。
             * - **cn-hongkong-d**：香港可用区D。
             * - **cn-wulanchabu-a**：乌兰察布可用区A。
             * - **cn-wulanchabu-b**：乌兰察布可用区B。
             * - **cn-wulanchabu-c**：乌兰察布可用区C。
             * - **ap-southeast-1a**：新加坡可用区A。
             * - **ap-southeast-1b**：新加坡可用区B。
             * - **ap-southeast-1c**：新加坡可用区C。
             * - **ap-southeast-5a**：雅加达可用区A。
             * - **ap-southeast-5b**：雅加达可用区B。
             * - **ap-southeast-5c**：雅加达可用区C。
             * - **eu-central-1a**：法兰克福可用区A。
             * - **eu-central-1b**：法兰克福可用区B。
             * - **eu-central-1c**：法兰克福可用区C。
             * >- 当实例为4.4或5.0版本的多可用区副本集实例或分片集群实例时，返回该参数。
             * - 目前仅中国站支持返回该参数。
             * @example `cn-hangzhou-i`
             */
            SecondaryZoneId: string;
            /**
             * 实现多可用区部署时，实例的备可用区2，取值说明：
             * - **cn-hangzhou-g**：杭州可用区G。
             * - **cn-hangzhou-h**：杭州可用区H。
             * - **cn-hangzhou-i**：杭州可用区I。
             * - **cn-hongkong-b**：香港可用区B。
             * - **cn-hongkong-c**：香港可用区C。
             * - **cn-hongkong-d**：香港可用区D。
             * - **cn-wulanchabu-a**：乌兰察布可用区A。
             * - **cn-wulanchabu-b**：乌兰察布可用区B。
             * - **cn-wulanchabu-c**：乌兰察布可用区C。
             * - **ap-southeast-1a**：新加坡可用区A。
             * - **ap-southeast-1b**：新加坡可用区B。
             * - **ap-southeast-1c**：新加坡可用区C。
             * - **ap-southeast-5a**：雅加达可用区A。
             * - **ap-southeast-5b**：雅加达可用区B。
             * - **ap-southeast-5c**：雅加达可用区C。
             * - **eu-central-1a**：法兰克福可用区A。
             * - **eu-central-1b**：法兰克福可用区B。
             * - **eu-central-1c**：法兰克福可用区C。
             * >- 当实例为4.4或5.0版本的多可用区副本集实例或分片集群实例时，返回该参数。
             * - 目前仅中国站支持返回该参数。
             * @example `cn-hangzhou-h`
             */
            HiddenZoneId: string;
            /**
             * 实例数据销毁时间，格式为yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
             * @example `2021-12-10T16:00:00Z`
             */
            DestroyTime: string;
            /**
             * 当前该实例已生成的订单状态，取值说明：
             * - **all\_completed**：所有订单均处于生产中或已经生产完成。
             * - **order\_unpaid**：当前有未支付的订单。
             * - **order\_wait\_for_produce**：当前有正在下发生产的订单。
             * >订单生产流程依次为用户下单、支付订单、订单下发生产、进行生产和完成生产。
             * - 如果订单状态长时间处于**order\_wait\_for_produce**，说明下发生产流程遇到了问题，系统会自动重试。
             * - 订单在进行生产和完成生产时，实例状态才会发生变化，例如变配中和运行中。
             * @example `all_completed`
             */
            DBInstanceOrderStatus: string;
            /**
             * 是否开启云盘加密
             * @example `true`
             */
            Encrypted: boolean;
            /**
             * 云盘加密对应的kms-key
             * @example `07609cc3-3109-408f-a35e-c548e776da0b`
             */
            EncryptionKey: string;
            /**
             * 数据同步进度百分比。当实例处在变配中时，需要进行数据同步等操作，可以通过该字段判断同步进度。
             * @example `0.8`
             */
            SyncPercent: string;
            /**
             * 是否使用集群备份模式。取值说明：
             * - **true**：启用集群备份模式。
             * - **false**未启用集群备份模式。
             * @example `true`
             */
            UseClusterBackup: boolean;
            /**
             * 是否已开启突发
             * @example `true`
             */
            BurstingEnabled: boolean;
            /**
             * 预配置性能
             * @example `1960`
             */
            ProvisionedIops: number;
        }[];
    };
}
