export interface DeleteConsumerGroupRequest {
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
     * 消费组名称。
     * @example `consumer-group-1`
     */
    "consumerGroup": string;
}
