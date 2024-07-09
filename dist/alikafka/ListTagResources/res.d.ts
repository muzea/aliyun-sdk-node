export interface ListTagResourcesResponse {
    /**
     * 下一个查询开始Token。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `DE65F6B7-7566-4802-9007-96F2494A****`
     */
    RequestId: string;
    TagResources: {
        /**
         * 由资源及其标签组成的集合，包含了资源ID、资源类型和标签键值等信息。
         */
        TagResource: {
            /**
             * 标签值。
             * @example `FinanceJoshua`
             */
            TagValue: string;
            /**
             * 资源类型。枚举类型。取值：
             * - **Instance**
             * - **Topic**
             * - **Consumergroup**
             * @example `Instance`
             */
            ResourceType: string;
            /**
             * 打标的资源ID 。资源ID规则：
             * - 实例：instanceId
             * - Topic ：Kafka_alikafka_instanceId_topic
             * - Consumer Group：Kafka_alikafka_instanceId_consumerGroup
             * 例如：实例ID为alikafka_post-cn-v0h1fgs2xxxx、Topic名称为test-topic、Consumer Group名称为test-consumer-group，则各资源ID分别为alikafka_post-cn-v0h1fgs2xxxx、Kafka_alikafka_post-cn-v0h1fgs2xxxx_test-topic、Kafka_alikafka_post-cn-v0h1fgs2xxxx_test-consumer-group。
             * @example `alikafka_post-cn-v0h1fgs2****`
             */
            ResourceId: string;
            /**
             * 标签键。
             * @example `FinanceDept`
             */
            TagKey: string;
        }[];
    };
}
