export interface CreateShardingDBInstanceRequest {
    /**
     * 地域ID，您可以通过调用[DescribeRegions](~~61933~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 可用区ID，您可以通过调用[DescribeRegions](~~61933~~)接口查询可用区ID。
     * @example `cn-hangzhou-g`
     */
    "ZoneId"?: string;
    /**
     * 数据库引擎。固定取值：**MongoDB**。
     * @example `MongoDB`
     */
    "Engine": string;
    /**
     * 数据库版本号，取值：
     * - **7.0**
     * - **6.0**
     * - **5.0**
     * - **4.4**
     * - **4.2**
     * - **4.0**
     * > - 关于存储引擎与版本的选择约束，请参见[版本与存储引擎](~~61906~~)。
     * > - 调用本接口克隆实例时，该参数值需和源实例保持一致。
     * @example `4.4`
     */
    "EngineVersion": string;
    /**
     * 实例名称，取值说明：
     * - 以中文、英文字母开头。
     * - 可以包含数字、中文、英文、下划线（_）和短横线（-）。
     * - 长度为2~256个字符。
     * @example `test`
     */
    "DBInstanceDescription"?: string;
    /**
     * 实例的IP白名单，多个IP地址请用英文逗号（,）分隔，不可重复。支持如下三种格式：
     * - 0.0.0.0/0
     * - IP地址形式，例如：10.23.12.24。
     * - CIDR形式，例如：10.23.12.0/24（无类域间路由，24表示了地址中前缀的长度，范围为1~32）。
     * > - 每个实例最多添加1000个IP或IP段，即所有IP白名单分组内的IP或IP段总和不能超过1000。
     * > - 0.0.0.0/0表示任何IP地址都可以访问实例的数据库，属于高危设置，请谨慎设置。
     * @example `192.168.xx.xx,192.168.xx.xx`
     */
    "SecurityIPList"?: string;
    /**
     * root账号的密码，取值说明：
     * - 由大写字母、小写字母、数字、特殊字符中的至少三种组成。
     * - !#$%^&*()_+-=为特殊字符。
     * - 长度为8~32个字符。
     * @example `123456Aa`
     */
    "AccountPassword"?: string;
    /**
     * 实例的付费类型，取值说明：
     * - **PostPaid**：默认值，后付费（按量付费）。
     * - **PrePaid**：预付费（包年包月）。
     * > 当该参数的值为**PrePaid**时，您还需要配置**Period**参数。
     * @example `PrePaid`
     */
    "ChargeType"?: string;
    /**
     * 实例的购买时长，单位为月。
     * 取值范围：**1**~**9**（整数）、**12**、**24**、**36**、**60**。
     * > 当**ChargeType**参数值为**PrePaid**时，该参数可用且为必填参数。
     * @example `1`
     */
    "Period"?: number;
    /**
     * 实例的网络类型，取值说明：
     * **VPC**：专有网络。
     * @example `VPC`
     */
    "NetworkType"?: string;
    /**
     * 专有网络（VPC）ID。
     * @example `vpc-bp1n3i15v90el48nx****`
     */
    "VpcId"?: string;
    /**
     * 虚拟交换机ID。
     * @example `vsw-bp1vj604nj5a9zz74****`
     */
    "VSwitchId"?: string;
    /**
     * 源实例ID。
     * >只有调用本接口克隆实例时，您需要配置该参数，同时还需要配置**RestoreTime**参数。
     * @example `dds-bp11483712c1****`
     */
    "SrcDBInstanceId"?: string;
    /**
     * 选择要恢复的时间点，您可以配置7天内的任意时间点。格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * >只有调用本接口克隆实例时，您需要配置该参数，同时还需要配置**SrcDBInstanceId**参数。
     * @example `2022-03-08T02:30:25Z`
     */
    "RestoreTime"?: string;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 实例的存储引擎，取值固定为**WiredTiger**。
     * > - 调用本接口克隆实例时，该参数需和源实例保持一致。
     * > - 关于存储引擎与版本的选择约束，请参见[版本与存储引擎](~~61906~~)。
     * @example `WiredTiger`
     */
    "StorageEngine"?: string;
    /**
     * 实例是否自动续费，取值说明：
     * - **true**：自动续费。
     * - **false**：默认值，不自动续费，即手动续费。
     * > 当**ChargeType**参数值为**PrePaid**时，该参数可用且为可选参数。
     * @example `true`
     */
    "AutoRenew"?: string;
    /**
     * 访问协议的类型，取值说明：
     * - **mongodb**：MongoDB协议。
     * - **dynamodb**：DynamoDB协议。
     * @example `mongodb`
     */
    "ProtocolType"?: string;
    /**
     * Mongos节点信息。
     */
    "Mongos": {
        /**
         * Mongos节点的规格，取值详情请参见[分片集群实例规格表](~~311414~~)。
         * > - 参数名中的**N**代表传入第几个Mongos节点的规格。例如，**Mongos.2.Class**表示传入第二个Mongos节点的规格。
         * > - **N**的取值范围为**2**~**32**。
         * @example `mdb.shard.2x.xlarge.d`
         */
        Class: string;
    }[];
    /**
     * Shard节点的信息。
     */
    "ReplicaSet": {
        /**
         * Shard节点的规格，取值详情请参见[分片集群实例规格表](~~311414~~)。
         * > - 参数名中的**N**代表传入第几个Shard节点的规格。例如，**ReplicaSet.2.Class**表示传入第二个Shard节点的规格。
         * > - **N**的取值范围为**2**~**32**。
         * @example `dds.shard.standard`
         */
        Class: string;
        /**
         * Shard节点的存储空间，单位为GB。
         * > - 具体取值受实例规格约束，取值详情请参见[分片集群实例规格表](~~311414~~)。
         * > - 参数名中的**N**代表的是传入第几个Shard节点的存储空间，例如：**ReplicaSet.2.Storage**表示传入第二个Shard节点的存储空间。
         * @example `10`
         */
        Storage: number;
        /**
         * 设置Shard节点的只读节点个数。
         * 取值范围：**0**~**5**（整数），默认值为**0**。
         * >参数名中的**N**代表设置第几个Shard节点中的只读节点个数。例如，**ReplicaSet.2.ReadonlyReplicas**表示设置第二个Shard节点的只读节点个数。
         * @example `0`
         */
        ReadonlyReplicas: number;
    }[];
    /**
     * ConfigServer节点的信息。
     */
    "ConfigServer": {
        /**
         * ConfigServer的规格，取值说明：
         * - **mdb.shard.2x.xlarge.d**：4核 8 GB（独享型），仅支持4.4及以上版本的实例。
         * - **dds.cs.mid**：1核 2 GB（通用型），仅支持4.2及以下版本的实例。
         * @example `mdb.shard.2x.xlarge.d`
         */
        Class: string;
        /**
         * ConfigServer的存储空间，单位为GB。
         * >具体取值受实例规格约束，取值详情请参见[分片集群实例规格表](~~311414~~)。
         * @example `20`
         */
        Storage: number;
    }[];
    /**
     * 资源组ID，资源组详情请参见[查看资源组基本信息](~~151181~~)。
     * @example `rg-acfmyiu4ekp****`
     */
    "ResourceGroupId"?: string;
    /**
     * 配置备可用区1，实现多可用区部署。取值说明：
     * - **cn-hangzhou-g**：杭州可用区G。
     * - **cn-hangzhou-h**：杭州可用区H。
     * - **cn-hangzhou-i**：杭州可用区I。
     * - **cn-hongkong-b**：中国香港可用区B。
     * - **cn-hongkong-c**：中国香港可用区C。
     * - **cn-hongkong-d**：中国香港可用区D。
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
     * >- 仅**EngineVersion**取值为**4.4**或**5.0**时，该参数可用且为必填参数。
     * - 该参数值不能与**ZoneId**和**HiddenZoneId**相同。
     * - 分片集群实例的多可用区部署策略，具体请参见[创建多可用区分片集群实例](~~117865~~)。
     * @example `cn-hangzhou-h`
     */
    "SecondaryZoneId"?: string;
    /**
     * 配置备可用区2，实现多可用区部署。取值说明：
     * - **cn-hangzhou-g**：杭州可用区G。
     * - **cn-hangzhou-h**：杭州可用区H。
     * - **cn-hangzhou-i**：杭州可用区I。
     * - **cn-hongkong-b**：中国香港可用区B。
     * - **cn-hongkong-c**：中国香港可用区C。
     * - **cn-hongkong-d**：中国香港可用区D。
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
     * > - 仅**EngineVersion**取值为**4.4**或**5.0**时，该参数可用且为必填参数。
     * > - 该参数值不能与**ZoneId**和**SecondaryZoneId**相同。
     * > - 分片集群实例的多可用区部署策略，具体请参见[创建多可用区分片集群实例](~~117865~~)。
     * @example `cn-hangzhou-i`
     */
    "HiddenZoneId"?: string;
    /**
     * 存储类型，取值说明：
     * - **cloud_essd1**：ESSD PL1云盘。
     * - **cloud_essd2**：ESSD PL2云盘。
     * - **cloud_essd3**：ESSD PL3云盘。
     * -  **local_ssd**：SSD本地盘。
     * > - 4.4及以上版本实例只支持云盘，不填写默认选择**cloud_essd1**。
     * > - 4.2及以下版本实例只支持本地盘，不填写默认选择**local_ssd**。
     * @example `cloud_essd1`
     */
    "StorageType"?: string;
    /**
     * 实例的全局IP白名单模板，多个IP白名单模板请用英文逗号（,）分隔，不可重复。
     * @example `g-qxieqf40xjst1ngpr3jz	`
     */
    "GlobalSecurityGroupIds"?: string;
    /**
     * 用户自定义标签。
     */
    "Tag"?: {
        /**
         * 标签的键。
         * > - **N**表示传入第几个标签的键。例如：**Tag.1.Key**表示传入第一个标签的键；**Tag.2.Key**表示传入第二个标签的键。
         * @example `testdatabase`
         */
        Key: string;
        /**
         * 标签的值。
         * > **N**表示传入第几个标签的值。例如：**Tag.1.Value**表示传入第一个标签的值；**Tag.2.Value**表示传入第二个标签的值。
         * @example `apitest`
         */
        Value: string;
    }[];
    /**
     * 是否开启云盘加密
     * @example `true`
     */
    "Encrypted"?: boolean;
    /**
     * 自定义密钥ID。
     * @example `2axxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`
     */
    "EncryptionKey"?: string;
    /**
     * 预配置IOPS
     * @example `1960`
     */
    "ProvisionedIops"?: number;
    "SrcRegion"?: string;
    "BackupId"?: string;
    "RestoreType"?: string;
    "DestRegion"?: string;
}
