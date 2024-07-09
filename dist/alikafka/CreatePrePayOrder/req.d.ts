export interface CreatePrePayOrderRequest {
    /**
     * 实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 磁盘类型。取值：
     * - **0**：高效云盘
     * - **1**：SSD
     * > 若创建 Confluent系列实例，无需传该参数。
     * @example `0`
     */
    "DiskType"?: string;
    /**
     * 磁盘容量。单位：GB。
     * 取值范围请参见[计费说明](~~84737~~)。
     * > 若创建 Confluent系列实例，无需传该参数。
     * @example `500`
     */
    "DiskSize"?: number;
    /**
     * 分区数（推荐）。
     * * 分区数和Topic规格必须选填一个，建议您只填写分区数。
     * * 分区数和Topic规格同时填写时，将会按照老的Topic售卖模型去校验分区数和Topic规格是否等价：如不等价将返回失败；如等价则按分区数进行购买。
     * * 取值范围，请参见[计费说明](~~84737~~)。
     * > 若创建 Confluent系列实例，无需传该参数。
     * @example `50`
     */
    "PartitionNum"?: number;
    /**
     * Topic的数量（不推荐）。
     * - 分区数和Topic规格必须选填一个，建议您只填写分区数。
     * - 分区数和Topic规格同时填写时，将会按照老的Topic售卖模型去校验分区数和Topic规格是否等价：如不等价将返回失败；如等价则按分区数进行购买。
     * - 流量规格不同，默认值不同。超过默认值，需额外收费。
     * - 取值范围，请参见[计费说明](~~84737~~)。
     * > 若创建 Confluent系列实例，无需传该参数。
     * @example `50`
     */
    "TopicQuota"?: number;
    /**
     * 部署类型。取值：
     * - **4**：公网/VPC实例
     * - **5**：VPC实例
     * > 若创建Confluent系列实例，则不支持选择部署类型，只允许传值为5，请在购买后自行调整各组件是否开放公网。
     * @example `5`
     */
    "DeployType"?: number;
    /**
     * 公网流量。
     * - 如果**DeployType**为**4**，则需填写。
     * - 取值范围请参见[按量计费](~~72142~~)。
     * > 若创建 Confluent系列实例，无需传该参数。
     * @example `0`
     */
    "EipMax"?: number;
    /**
     * 规格类型。取值：
     * - **normal**：普通版（高写版）
     * - **professional**：专业版（高写版）
     * - **professionalForHighRead**：专业版（高读版）
     * 更多信息，请参见[计费说明](~~84737~~)。
     * > 若创建 Confluent系列实例，无需传该参数。
     * @example `normal`
     */
    "SpecType"?: string;
    /**
     * 流量规格（推荐）。
     * - **IoMax**和**IoMaxSpec**必须至少填写一个。同时填写时，以**IoMaxSpec**为准。建议您只填写**IoMaxSpec**。
     * - 取值范围请参见[计费说明](~~84737~~)。
     * > 若创建 Confluent系列实例，无需传该参数。
     * @example `alikafka.hw.2xlarge`
     */
    "IoMaxSpec"?: string;
    /**
     * 流量峰值（不推荐）。
     * - **IoMax**和**IoMaxSpec**必须至少填写一个。同时填写时，以**IoMaxSpec**为准。建议您只填写**IoMaxSpec**。
     * - 取值范围请参见[计费说明](~~84737~~)。
     * > 若创建 Confluent系列实例，无需传该参数。
     * @example `20`
     */
    "IoMax"?: number;
    /**
     * 资源组ID。
     * 不设置时落在默认资源组里，可在资源组控制台查看资源组ID。
     * @example `rg-ac***********7q`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 资源的标签键。
         * - N为1~20。
         * - 如果为空，则匹配所有标签键。
         * - 最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https://。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。
         * - N为1~20。
         * - 可以为空。
         * - 最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https://。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
    /**
     * 付费类型。取值：
     * - **0**：预付费
     * - **4**：Confluent系列预付费
     * @example `0`
     */
    "PaidType"?: number;
    /**
     * Confluent组件相关配置。
     * > 创建 Confluent 系列实例时必传。
     */
    "ConfluentConfig"?: {
        /**
         * Kafka Broker CPU 核数。
         * @example `4`
         */
        KafkaCU: number;
        /**
         * Kafka Broker 磁盘容量。单位 GB。
         * @example `800`
         */
        KafkaStorage: number;
        /**
         * Kafka Broker 副本数量。
         * @example `3`
         */
        KafkaReplica: number;
        /**
         * ZooKeeper 组件 CPU 核数。
         * @example `2`
         */
        ZooKeeperCU: number;
        /**
         * ZooKeeper 组件磁盘容量。单位 GB。
         * @example `100`
         */
        ZooKeeperStorage: number;
        /**
         * ZooKeeper 组件副本数量。
         * @example `3`
         */
        ZooKeeperReplica: number;
        /**
         * ControlCenter 组件 CPU 核数。
         * @example `4`
         */
        ControlCenterCU: number;
        /**
         * ControlCenter 组件磁盘容量。单位 GB。
         * @example `300`
         */
        ControlCenterStorage: number;
        /**
         * ControlCenter 组件副本数量。
         * @example `1`
         */
        ControlCenterReplica: number;
        /**
         * SchemaRegistry 组件 CPU 核数。
         * @example `1`
         */
        SchemaRegistryCU: number;
        /**
         * SchemaRegistry 组件副本数量。
         * @example `2`
         */
        SchemaRegistryReplica: number;
        /**
         * Connect 组件 CPU 核数。
         * @example `4`
         */
        ConnectCU: number;
        /**
         * Connect 组件副本数量。
         * @example `2`
         */
        ConnectReplica: number;
        /**
         * KsqlDB 组件
         * CPU 核数。
         * @example `4`
         */
        KsqlCU: number;
        /**
         * KsqlDB 组件磁盘容量。单位 GB。
         * @example `100`
         */
        KsqlStorage: number;
        /**
         * KsqlDB 组件副本数量。
         * @example `2`
         */
        KsqlReplica: number;
        /**
         * KafkaRestProxy 组件 CPU 核数。
         * @example `4`
         */
        KafkaRestProxyCU: number;
        /**
         * KafkaRestProxy 组件副本数量。
         * @example `2`
         */
        KafkaRestProxyReplica: number;
    };
    /**
     * 购买时长。单位为月，默认为1。取值：
     * - **1~12**
     * @example `1`
     */
    "Duration"?: number;
}
