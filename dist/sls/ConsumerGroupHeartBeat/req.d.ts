export interface ConsumerGroupHeartBeatRequest {
    /**
     * Project名称。
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * Logstore名称。
     * @example `ali-test-logstore`
     */
    "logstore": string;
    /**
     * 消费组名称，同一Project中消费组名称为唯一值。
     * @example `consumer_group_test`
     */
    "consumerGroup": string;
    /**
     * 消费者。
     * @example `consumer_1`
     */
    "consumer": string;
    /**
     * 正在消费的Shard ID列表。
     */
    "body": number[];
}
