export interface CreatePostPayOrderRequest {
    /**
     * 实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 磁盘类型。取值：
     * - **0**：高效云盘
     * - **1**：SSD
     * > 若创建V3系列（Serverless）实例，无需传该参数。
     * @example `0`
     */
    "DiskType"?: string;
    /**
     * 磁盘容量。
     * 取值范围，请参见[计费说明](~~84737~~)。
     * > 若创建V3系列（Serverless）实例，无需传该参数。
     * @example `500`
     */
    "DiskSize"?: number;
    /**
     * 部署类型。取值：
     * - **4**：公网/VPC实例
     * - **5**：VPC实例
     * @example `5`
     */
    "DeployType": number;
    /**
     * 公网流量。
     * - 如果**DeployType**为**4**，则需填写。
     * - 取值范围，请参见[计费说明](~~84737~~)。
     * > 若创建V3系列（Serverless）实例，无需传该参数。
     * @example `0`
     */
    "EipMax"?: number;
    /**
     * 流量峰值（不推荐）。
     * - 流量峰值和流量规格必须选填一个。同时填写时，以流量规格为准。建议您只填写流量规格。
     * - 取值范围，请参见[计费说明](~~84737~~)。
     * > 若创建V3系列（Serverless）实例，无需传该参数。
     * @example `20`
     */
    "IoMax"?: number;
    /**
     * 分区数（推荐）。
     * * 分区数和Topic规格必须选填一个，建议您只填写分区数。
     * * 分区数和Topic规格同时填写时，将会按照老的Topic售卖模型去校验分区数和Topic规格是否等价：如不等价将返回失败；如等价则按分区数进行购买。
     * * 取值范围，请参见[计费说明](~~84737~~)。
     * > 若创建V3系列（Serverless）实例，无需传该参数。
     * @example `50`
     */
    "PartitionNum"?: number;
    /**
     * Topic的数量（不推荐）。
     * - 分区数和Topic规格必须选填一个，建议您只填写分区数。
     * - 分区数和Topic规格同时填写时，将会按照老的Topic售卖模型去校验分区数和Topic规格是否等价：如不等价将返回失败；如等价则按分区数进行购买。
     * - 流量规格不同，默认值不同。超过默认值，需额外收费。
     * - 取值范围，请参见[计费说明](~~84737~~)。
     * > 若创建V3系列（Serverless）实例，无需传该参数。
     * @example `50`
     */
    "TopicQuota"?: number;
    /**
     * 付费类型。取值：
     * - 1（默认）：V2系列后付费。
     * - 3：V3系列预留规格后付费+Serverless弹性伸缩后付费。
     * @example `1`
     */
    "PaidType"?: number;
    /**
     * 规格类型。
     * 当PaidType参数为1（V2系列后付费）时取值：
     * - normal：标准版（高写版）
     * - professional：专业版（高写版）
     * - professionalForHighRead：专业版（高读版）
     * 当PaidType参数为3（V3系列预留规格后付费+Serverless弹性伸缩后付费）时取值：
     * - normal：Serverless标准版
     * 以上规格类型的说明，请参见[计费说明](~~84737~~)。
     * @example `normal`
     */
    "SpecType"?: string;
    /**
     * 流量规格（推荐）。
     * - 流量峰值和流量规格必须选填一个。同时填写时，以流量规格为准。建议您只填写流量规格。
     * - 取值范围，请参见[计费说明](~~84737~~)。
     * > 若创建V3系列（Serverless）实例，无需传该参数。
     * @example `alikafka.hw.2xlarge`
     */
    "IoMaxSpec"?: string;
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
         * @example `FinanceDept
        `
         */
        Key: string;
        /**
         * 资源的标签值。
         * - N为1~20。
         * - 如果标签键为空，则必须为空。为空时，匹配所有标签值。
         * - 最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https://。
         * @example `FinanceJoshua
        `
         */
        Value: string;
    }[];
    /**
     * Serverless实例的相关设置。创建V3系列（Serverless）实例时必传。
     */
    "ServerlessConfig"?: {
        /**
         * 预留的发送流量规格值，仅支持传入整数，最低 60。
         * > 实际上限受当前地域库存影响，请参考售卖页可选范围。
         * @example `60`
         */
        ReservedPublishCapacity: number;
        /**
         * 预留的消费流量规格值，仅支持传入整数，最低 20。
         * > 实际上限受当前地域库存影响，请参考售卖页可选范围。
         * @example `50`
         */
        ReservedSubscribeCapacity: number;
    };
}
