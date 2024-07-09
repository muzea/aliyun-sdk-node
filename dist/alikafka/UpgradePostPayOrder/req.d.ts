export interface UpgradePostPayOrderRequest {
    /**
     * 实例ID。
     * @example `alikafka_post-cn-mp919o4v****`
     */
    "InstanceId": string;
    /**
     * 磁盘容量。单位：GB。
     * - 填写的磁盘容量必须大于等于实例当前的磁盘容量。
     * - 取值范围，请参见[计费说明](~~84737~~)。
     * > 若实例为V3系列（Serverless）实例，无需传该参数。
     * @example `500`
     */
    "DiskSize"?: number;
    /**
     * 实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 流量规格（推荐）。
     * - 填写的流量规格必须大于或等于实例当前的流量规格。
     * - 流量峰值和流量规格必须选填一个。同时填写时，以流量规格为准。建议您只填写流量规格。
     * - 取值范围，请参见[计费说明](~~84737~~)。
     * > 若实例为V3系列（Serverless）实例，无需传该参数。
     * @example `alikafka.hw.6xlarge`
     */
    "IoMaxSpec"?: string;
    /**
     * 流量峰值（不推荐）。
     * - 填写的流量峰值必须大于或等于实例当前的流量峰值。
     * - 流量峰值和流量规格必须选填一个。同时填写时，以流量规格为准。建议您只填写流量规格。
     * - 取值范围，请参见[计费说明](~~84737~~)。
     * > 若实例为V3系列（Serverless）实例，无需传该参数。
     * @example `60`
     */
    "IoMax"?: number;
    /**
     * 规格类型。
     * 当实例的PaidType值为1（后付费）时取值：
     * - normal：标准版（高写版）
     * - professional：专业版（高写版）
     * - professionalForHighRead：专业版（高读版）
     * 当实例的PaidType值为3（预留规格后付费+Serverless弹性伸缩后付费）时取值：
     * - normal：Serverless标准版
     * 更多信息，请参见[计费说明](~~84737~~)。
     * @example `professional`
     */
    "SpecType"?: string;
    /**
     * 分区数（推荐）。
     * * 分区数和Topic规格必须选填一个，建议您只填写分区数。
     * * 分区数和Topic规格同时填写时，将会按照老的Topic售卖模型去校验分区数和Topic规格是否等价：如不等价将返回失败；如等价则按分区数进行购买。
     * * 取值范围，请参见[计费说明](~~84737~~)。
     * > 若实例为V3系列（Serverless）实例，无需传该参数。
     * @example `80`
     */
    "PartitionNum"?: number;
    /**
     * Topic的数量（不推荐）。
     * - 分区数和Topic规格必须选填一个，建议您只填写分区数。
     * - 分区数和Topic规格同时填写时，将会按照老的Topic售卖模型去校验分区数和Topic规格是否等价：如不等价将返回失败；如等价则按分区数进行购买。
     * - 流量规格不同，默认值不同。超过默认值，需额外收费。
     * - 取值范围，请参见[计费说明](~~84737~~)。
     * > 若实例为V3系列（Serverless）实例，无需传该参数。
     * @example `80`
     */
    "TopicQuota"?: number;
    /**
     * 是否需要公网。取值如下：
     * - true：需要公网。
     * - false：不需要公网。
     * @example `false`
     */
    "EipModel"?: boolean;
    /**
     * 公网流量。
     * - 填写的公网流量必须大于或等于实例当前的公网流量。
     * - 取值范围，请参见[计费说明](~~84737~~)。
     * > - **EipModel**取值为**true**时，**EipMax**取值需大于0。
     * > - **EipModel**取值为**false**时，**EipMax**取值需为**0**。
     * > - 若实例为V3系列（Serverless）实例，无需传该参数。
     * @example `0`
     */
    "EipMax"?: number;
    /**
     * Serverless实例的相关设置。创建V3系列（Serverless）实例时必传。
     */
    "ServerlessConfig"?: {
        /**
         * 预留的发送流量规格值，仅支持传入整数，最小为 60。
         * > 实际上限受当前地域库存影响，请参考售卖页可选范围。
         * @example `60`
         */
        ReservedPublishCapacity: number;
        /**
         * 预留的消费流量规格值，仅支持传入整数，最小为 50。
         * > 实际上限受当前地域库存影响，请参考售卖页可选范围。
         * @example `50`
         */
        ReservedSubscribeCapacity: number;
    };
}
