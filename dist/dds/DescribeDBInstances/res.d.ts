export interface DescribeDBInstancesResponse {
    /**
     * 查询结果中实例的数量。
     * @example `5`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `0E4FE33F-5510-5758-8FA7-A6672CDE****`
     */
    RequestId: string;
    /**
     * 每页记录数。
     * @example `30`
     */
    PageSize: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    DBInstances: {
        /**
         * 实例信息列表。
         */
        DBInstance: {
            /**
             * 实例创建的时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2021-03-25T02:18:00Z`
             */
            CreationTime: string;
            /**
             * 实例付费类型，取值说明：
             * - **PrePaid**：预付费，包年包月。
             * - **PostPaid**：按量付费。
             * @example `PrePaid`
             */
            ChargeType: string;
            Tags: {
                /**
                 * 资源标签信息列表。
                 */
                Tag: {
                    /**
                     * 资源的标签键。
                     * @example `test`
                     */
                    Key: string;
                    /**
                     * 资源的标签值。
                     * @example `api`
                     */
                    Value: string;
                }[];
            };
            /**
             * 是否开启了专有网络免密访问功能，取值说明：
             * - **Open**：开启。
             * - **Close**：关闭。
             * @example `Close`
             */
            VpcAuthMode: string;
            /**
             * 实例网络类型，取值说明：
             * * **Classic**：经典网络。
             * * **VPC**：专有网络。
             * @example `Classic`
             */
            NetworkType: string;
            /**
             * 实例的锁定状态，取值说明：
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
             * 数据库版本号，取值：
             * - **7.0**
             * - **6.0**
             * - **5.0**
             * - **4.4**
             * - **4.2**
             * - **4.0**
             * - **3.4**
             * @example `4.2`
             */
            EngineVersion: string;
            MongosList: {
                /**
                 * Mongos节点信息列表。
                 * > 实例类型为分片集群实例时，返回该参数。
                 */
                MongosAttribute: {
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
            };
            /**
             * 实例的描述或备注信息。
             * @example `测试数据库`
             */
            DBInstanceDescription: string;
            /**
             * 实例到期时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
             * @example `2021-11-25T16:00Z`
             */
            ExpireTime: string;
            /**
             * 实例类型，取值说明：
             * - **sharding**：分片集群实例。
             * - **replicate**：副本集实例和单节点实例。
             * <props="china">
             * - **serverless**：Serverless实例。
             * </props>
             * @example `sharding`
             */
            DBInstanceType: string;
            /**
             * 实例最后一次降配时间。
             * @example `2021-05-08`
             */
            LastDowngradeTime: string;
            ShardList: {
                /**
                 * Shard节点信息列表。
                 * > 实例类型为分片集群实例时返回该参数。
                 */
                ShardAttribute: {
                    /**
                     * Shard节点的实例规格。
                     * @example `dds.shard.mid`
                     */
                    NodeClass: string;
                    /**
                     * Shard节点描述。
                     * @example `测试shard节点`
                     */
                    NodeDescription: string;
                    /**
                     * Shard节点的存储空间，单位为GB。
                     * @example `10`
                     */
                    NodeStorage: number;
                    /**
                     * Shard节点ID。
                     * @example `d-bp1cac6f2083****`
                     */
                    NodeId: string;
                    /**
                     * Shard节点中只读节点的个数。返回值范围：**0**~**5**。
                     * @example `2`
                     */
                    ReadonlyReplicas: number;
                }[];
            };
            /**
             * 实例数据销毁时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * > - 包年包月实例，到期后第16天计算资源会被释放，数据继续保留7天，到期后第23天，数据会被删除且无法恢复。
             * > - 按量付费实例，欠费后第16天计算资源会被释放，数据继续保留7天，欠费后第23天，数据会被删除且无法恢复。
             * @example `2021-12-10T16:00:00Z`
             */
            DestroyTime: string;
            /**
             * 实例状态，详情请参见[实例状态表](~~63870~~)。
             * @example `Running`
             */
            DBInstanceStatus: string;
            /**
             * 实例所属地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 实例存储空间。
             * @example `20`
             */
            DBInstanceStorage: number;
            /**
             * 资源组ID。
             * @example `rg-acfmyiu4ekp****`
             */
            ResourceGroupId: string;
            /**
             * 实例所属可用区ID。
             * @example `cn-hangzhou-g`
             */
            ZoneId: string;
            /**
             * 实例ID。
             * @example `dds-bp18b0934e70****`
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
             * 实例中节点的个数。
             * > 实例类型为副本集实例时返回该参数。
             * @example `3`
             */
            ReplicationFactor: string;
            /**
             * 实例的类型，取值说明：
             * - **0**：物理机。
             * - **1**：ECS。
             * - **2**：DOCKER。
             * - **18**：k8s新架构实例。
             * @example `1`
             */
            KindCode: string;
            /**
             * 实例消耗的读写吞吐量。
             * > 当实例类型为Serverless实例时返回该参数。
             * @example `100`
             */
            CapacityUnit: string;
            /**
             * 存储类型，取值说明：
             * - **cloud_essd**：ESSD云盘。
             * - **local_ssd**：SSD本地盘。
             * @example `local_ssd`
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
             * > - 当实例为4.4或5.0版本的多可用区副本集实例或分片集群实例时，返回该参数。
             * > - 目前仅中国站支持返回该参数。
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
             * > - 当实例为4.4或5.0版本的多可用区副本集实例或分片集群实例时，返回该参数。
             * > - 目前仅中国站支持返回该参数。
             * @example `cn-hangzhou-h`
             */
            HiddenZoneId: string;
            /**
             * 备份保留策略，取值如下：
             * - **0**：实例释放时立即删除该实例的所有备份集。
             * - **1**：实例释放时会自动备份，长期保留该备份集。
             * - **2**：实例释放时会自动备份，并长期保留该集群的所有备份集。
             * @example `1`
             */
            BackupRetentionPolicy: number;
            /**
             * 实例释放时间。
             * @example `2024-06-17T07:01Z`
             */
            ReleaseTime: string;
        }[];
    };
}
