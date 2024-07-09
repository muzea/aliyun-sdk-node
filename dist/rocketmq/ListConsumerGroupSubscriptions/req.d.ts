export interface ListConsumerGroupSubscriptionsRequest {
    /**
     * 云消息队列 RocketMQ 版的实例ID。
     * @example `rmq-cn-tl32wwz1r05`
     */
    "instanceId": string;
    /**
     * 消费者分组ID，表示需要查询哪个消费者分组的订阅关系。
     * 若不输入，则查询指定实例下所有的消费者分组的订阅关系。
     * @example `PRINT_RETRY_CONSUMER`
     */
    "consumerGroupId"?: string;
}
