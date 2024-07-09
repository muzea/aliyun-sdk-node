export interface ListTagResourcesRequest {
    /**
     * 资源的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型。枚举类型。取值：
     * - **INSTANCE**：实例。
     * - **TOPIC**：主题。
     * - **CONSUMERGROUP**：消费组。
     * @example `INSTANCE`
     */
    "ResourceType": string;
    /**
     * 下一个查询开始的Token。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 打标的资源ID 。资源ID规则：
     * - 实例：instanceId
     * - Topic ：Kafka_alikafka_instanceId_topic
     * - Group：Kafka_alikafka_instanceId_consumerGroup
     * 例如：实例ID为alikafka_post-cn-v0h1fgs2xxxx、Topic名称为test-topic、Group名称为test-consumer-group，则各资源ID分别为alikafka_post-cn-v0h1fgs2xxxx、Kafka_alikafka_post-cn-v0h1fgs2xxxx_test-topic、Kafka_alikafka_post-cn-v0h1fgs2xxxx_test-consumer-group。
     * > **ResourceId**与**Tag**参数必须配置其中任意一个，才能查询资源绑定的标签列表。否则，API调用失败。
     * @example `alikafka_post-cn-v0h1fgs2****`
     */
    "ResourceId"?: string[];
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 资源的标签键。
         * - 如果为空，则匹配所有标签键。
         * - 最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https://。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。
         * - 如果标签键为空，则必须为空。为空时，匹配所有标签值。
         * - 最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https://。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
}
