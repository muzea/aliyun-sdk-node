export interface DescribeDBInstancesRequest {
    /**
     * 地域ID，您可以调用[DescribeRegions](~~61933~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 页码，取值为大于0且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页记录数，取值：
     * - **30**（默认值）
     * - **50**
     * - **100**
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 实例ID。
     * @example `dds-bp199659b178****`
     */
    "DBInstanceId"?: string;
    /**
     * 副本集实例的节点数量，取值：
     * - **3**
     * - **5**
     * - **7**
     * @example `3`
     */
    "ReplicationFactor"?: string;
    /**
     * 实例名称，取值说明：
     * - 以中文、英文字母开头。
     * - 可以包含数字、中文、英文、下划线（_）和短横线（-）。
     * - 长度为2~256个字符。
     * @example `测试数据库`
     */
    "DBInstanceDescription"?: string;
    /**
     * 实例的到期时间。
     * @example `2019-12-26T16:00Z`
     */
    "ExpireTime"?: string;
    /**
     * 实例的状态信息，取值详情请参见[实例状态表](~~63870~~)。
     * @example `Running`
     */
    "DBInstanceStatus"?: string;
    /**
     * 实例类型，取值说明：
     * - **sharding**：分片集群实例。
     * - **replicate**：默认值，副本集实例和单节点实例。
     *  <props="china">
     * - **serverless**：Serverless实例。
     * </props>
     * @example `sharding`
     */
    "DBInstanceType"?: string;
    /**
     * 实例规格，取值详情请参见[实例规格表](~~57141~~)。
     * @example `dds.mongo.mid`
     */
    "DBInstanceClass"?: string;
    /**
     * 数据库引擎，取值为**MongoDB**。
     * @example `MongoDB`
     */
    "Engine"?: string;
    /**
     * 数据库版本号，取值：
     * - **7.0**
     * - **6.0**
     * - **5.0**
     * - **4.4**
     * - **4.2**
     * - **4.0**
     * - **3.4**
     * @example `4.0`
     */
    "EngineVersion"?: string;
    /**
     * 实例网络类型，取值说明：
     * - **Classic**：经典网络。
     * - **VPC**：VPC网络。
     * @example `VPC`
     */
    "NetworkType"?: string;
    /**
     * 专有网络ID。
     * @example `vpc-bp1n3i15v90el48nx****`
     */
    "VpcId"?: string;
    /**
     * 专有网络的交换机ID。
     * @example `vsw-bp1vj604nj5a9zz74****`
     */
    "VSwitchId"?: string;
    /**
     * 实例付费类型，取值说明：
     * - **PrePaid**：预付费，包年包月。
     * - **PostPaid**：按量付费。
     * @example `PrePaid`
     */
    "ChargeType"?: string;
    /**
     * 可用区ID，您可以通过调用[DescribeRegions](~~61933~~)接口查询可用区ID。
     * @example `cn-hangzhou-b`
     */
    "ZoneId"?: string;
    /**
     * 实例过期状态，取值说明：
     * - **true**：已过期。
     * - **false**：未过期。
     * @example `true`
     */
    "Expired"?: string;
    /**
     * 节点的连接地址，您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)接口查询。
     * @example `dds-bp1ea17b41abecf43****.mongodb.rds.aliyuncs.com`
     */
    "ConnectionDomain"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmyiu4ekp****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签管理。
     */
    "Tag"?: {
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
     * 用于筛选标准实例还是测试实例
     * 1. 单节点实例和dbfs实例：customized
     * 2. 标准实例（副本集和分片集群）：standard
     * 3. 默认（展示全部实例）：default
     * @example `default`
     */
    "DBNodeType"?: string;
}
