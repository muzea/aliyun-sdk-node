export interface CreateTopicRequest {
    /**
     * 实例ID。
     * @example `alikafka_pre-cn-mp919o4v****`
     */
    "InstanceId": string;
    /**
     * Topic的名称。
     * - 只能包含字母、数字、下划线（_）和短划线（-）。
     * - 长度限制为3~64字符，多于64个字符将被自动截取。
     * - Topic名称一旦创建，将无法修改。
     * @example `alikafka_topic_test`
     */
    "Topic": string;
    /**
     * Topic的备注。
     * - 只能包含字母、数字、下划线（_）、短划线（-）。
     * - 长度为3~64字符。
     * @example `alikafka_topic_test`
     */
    "Remark": string;
    /**
     * Topic所在实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * Topic的存储引擎配置为Local存储时，会配置日志清理策略。取值：
     * - false：delete清理策略。
     * - true：compact清理策略。
     * @example `false`
     */
    "CompactTopic"?: boolean;
    /**
     * Topic的分区数。
     * - 分区数限制1~360。
     * - 控制台会根据实例规格提供不同的配置建议，请根据控制台建议配置分区数，减少数据倾斜风险。
     * 默认值：
     * - V2系列：12
     * - V3系列：3
     * @example `12`
     */
    "PartitionNum"?: string;
    /**
     * Topic的存储引擎。取值：
     * - false：云存储。
     * - true：Local存储。
     * @example `false`
     */
    "LocalTopic"?: boolean;
    /**
     * Topic的副本数。
     * - 仅当**LocalTopic**值为**true**，或**规格类型**为**开源版（本地盘）**，才可以指定该参数。
     * - 副本数限制1~3。
     * > 副本数为**1**时，有数据丢失的风险，请谨慎设置。
     * @example `3`
     */
    "ReplicationFactor"?: number;
    /**
     * 最小ISR同步副本数。
     * - 仅当**LocalTopic**值为**true**，或**规格类型**为**开源版（本地盘）**，才可以指定该参数。
     * - 取值需小于Topic副本数。
     * - 同步副本数限制1~3。
     * @example `1`
     */
    "MinInsyncReplicas"?: number;
    /**
     * 补充配置。
     * - 必须为JSON格式。
     * - 目前仅支持Key为**replications**。表示Topic副本数，取值类型为Integer，取值限制1~3。
     * - 仅当**LocalTopic**值为**true**，或**规格类型**为**开源版（本地盘）**，才可以指定该参数。
     * > 如果该参数中指定了replications，指定的**ReplicationFactor**参数不再生效。
     * @example `{"replications": 3}`
     */
    "Config"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 资源的标签键。
         * - N为1~20。
         * - 如果为空，则匹配所有标签键。
         * - 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
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
}
