export interface EvaluateResourceRequest {
    /**
     * 地域ID，您可以调用[DescribeRegions](~~61933~~)查询。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 可用区ID，您可以调用[DescribeRegions](~~61933~~)查询。
     * @example `cn-hangzhou-h`
     */
    "ZoneId": string;
    /**
     * 数据库引擎，取值：**MongoDB**。
     * @example `MongoDB`
     */
    "Engine"?: string;
    /**
     * 数据库版本号。
     * @example `4.2`
     */
    "EngineVersion": string;
    /**
     * 实例规格。
     * > 评估副本集资源时必须配置该参数，规格详情请参见[实例规格表](~~57141~~)。
     * @example `dds.mongo.mid`
     */
    "DBInstanceClass"?: string;
    /**
     * 分片集群的分片信息，评估分片集群资源时必须配置该参数。
     * 评估新购分片集群资源时，需指定每个分片的规格，格式为JSON格式字符串。示例如下：
     * ```
     * {
     *      "ConfigSvrs":
     *          [{"Storage":20,"DBInstanceClass":"dds.cs.mid"}],
     *      "Mongos":
     *          [{"DBInstanceClass":"dds.mongos.standard"},{"DBInstanceClass":"dds.mongos.standard"}],
     *      "Shards":
     *          [{"Storage":50,"DBInstanceClass":"dds.shard.standard"},{"Storage":50,"DBInstanceClass":"dds.shard.standard"},   {"Storage":50,"DBInstanceClass":"dds.shard.standard"}]
     *  }
     * ```
     * 示例中参数说明如下：
     *  - ConfigSvrs：ConfigServer节点。
     *  - Mongos：Mongos节点。
     *  - Shards：Shard节点。
     *  - Storage：指定目标分片的存储空间。
     *  - DBInstanceClass：指定目标分片的规格，规格详情请参见[分片集群实例规格表](~~311414~~)。
     * 评估分片集群变配资源时，仅需指定节点信息即可，格式为JSON格式字符串。示例如下：
     * ```
     * {
     *      "NodeId": "d-bp147c4d9ca7****", "NodeClass": "dds.shard.standard"
     * }
     * ```
     * 示例中参数说明如下：
     * - NodeId：指定目标节点ID。
     * - NodeClass：指定目标节点的规格。规格详情请参见[分片集群实例规格表](~~311414~~)。
     * @example `{"NodeId": "d-bp147c4d9ca7****", "NodeClass": "dds.shard.standard"}`
     */
    "ShardsInfo"?: string;
    /**
     * 实例ID，评估变配资源时必须配置该参数。
     * @example `dds-bp14bf67a76d****`
     */
    "DBInstanceId"?: string;
    /**
     * 设置实例的节点个数。
     * - 单节点实例取值固定为**1**。
     * - 共享存储版实例取值固定为**2**。
     * - 副本集实例取值为**3**，**5**，**7**。
     * <props="china">
     * > Serverless实例不需要配置该参数。</props>
     * @example `3`
     */
    "ReplicationFactor"?: string;
    /**
     * 设置实例中只读节点的个数，取值范围为**1**~**5**。
     * > 单节点实例<ph props ="china">和Serverless实例</ph>不需要配置该参数。
     * @example `1`
     */
    "ReadonlyReplicas"?: string;
    /**
     * 副本集的存储空间，单位为GB。
     * > 实例规格为云盘型时，该参数必填。</props>
     * @example `10`
     */
    "Storage"?: string;
}
