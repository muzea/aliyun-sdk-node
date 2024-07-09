export interface UpgradePrePayOrderRequest {
    /**
     * 实例ID。
     * @example `alikafka_post-cn-mp919o4v****`
     */
    "InstanceId": string;
    /**
     * 磁盘容量。
     * - 填写的磁盘容量必须大于等于实例当前的磁盘容量。
     * - 取值范围请参见[计费说明](~~84737~~)。
     * @example `900`
     */
    "DiskSize"?: number;
    /**
     * 实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 流量峰值（不推荐）。
     * - 填写的流量峰值必须大于或等于实例当前的流量峰值。
     * - 流量峰值和流量规格必须选填一个。同时填写时，以流量规格为准。建议您只填写流量规格。
     * - 取值范围请参见[计费说明](~~84737~~)。
     * @example `40`
     */
    "IoMax"?: number;
    /**
     * 规格类型。取值：
     * - **normal**：普通版（高写版）
     * - **professional**：专业版（高写版）
     * - **professionalForHighRead**：专业版（高读版）
     * 不支持将实例从专业版降级到标准版。以上规格类型的说明请参见[计费说明](~~84737~~)。
     * @example `professional`
     */
    "SpecType"?: string;
    /**
     * 分区数（推荐）。
     * * 分区数和Topic规格必须选填一个，建议您只填写分区数。
     * * 分区数和Topic规格同时填写时，将会按照老的Topic售卖模型去校验分区数和Topic规格是否等价：如不等价将返回失败；如等价则按分区数进行购买。
     * * 取值范围，请参见[计费说明](~~84737~~)。
     * @example `50`
     */
    "PartitionNum"?: number;
    /**
     * Topic的数量（不推荐）。
     * - 分区数和Topic规格必须选填一个，建议您只填写分区数。
     * - 分区数和Topic规格同时填写时，将会按照老的Topic售卖模型去校验分区数和Topic规格是否等价：如不等价将返回失败；如等价则按分区数进行购买。
     * - 流量规格不同，默认值不同。超过默认值，需额外收费。
     * - 取值范围，请参见[计费说明](~~84737~~)。
     * @example `50`
     */
    "TopicQuota"?: number;
    /**
     * 是否需要公网。取值如下：
     * - true：需要公网
     * - false：不需要公网
     * @example `true`
     */
    "EipModel"?: boolean;
    /**
     * 公网流量。
     * - 填写的公网流量必须大于或等于实例当前的公网流量。
     * - 取值范围请参见[计费说明](~~84737~~)。
     * > - **EipModel**取值为**true**时，**EipMax**取值需大于0。
     * > - **EipModel**取值为**false**时，**EipMax**取值需为**0**。
     * @example `3`
     */
    "EipMax"?: number;
    /**
     * 流量规格（推荐）。
     * - 填写的流量规格必须大于或等于实例当前的流量规格。
     * - 流量峰值和流量规格必须选填一个。同时填写时，以流量规格为准。建议您只填写流量规格。
     * - 取值范围请参见[计费说明](~~84737~~)。
     * @example `alikafka.hw.2xlarge`
     */
    "IoMaxSpec"?: string;
    "ConfluentConfig"?: {
        KafkaCU: number;
        KafkaStorage: number;
        KafkaReplica: number;
        ZooKeeperCU: number;
        ZooKeeperStorage: number;
        ZooKeeperReplica: number;
        ControlCenterCU: number;
        ControlCenterStorage: number;
        ControlCenterReplica: number;
        SchemaRegistryCU: number;
        SchemaRegistryReplica: number;
        ConnectCU: number;
        ConnectReplica: number;
        KsqlCU: number;
        KsqlStorage: number;
        KsqlReplica: number;
        KafkaRestProxyCU: number;
        KafkaRestProxyReplica: number;
    };
    "PaidType"?: number;
}
