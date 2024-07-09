export interface ListQueueUpStreamBindingsRequest {
    /**
     * 云消息队列 RabbitMQ 版实例的ID。
     * @example `amqp-cn-5yd3aw******`
     */
    "InstanceId": string;
    /**
     * Vhost名称。
     * @example `test`
     */
    "VirtualHost": string;
    /**
     * Queue名称。
     * @example `QueueTest`
     */
    "QueueName": string;
    /**
     * 用来标记当前查询结束的位置，以便下一次调用时作为参数传入，继续翻页。首次调用或返回最后一页时，取值为空字符串。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    "NextToken"?: string;
    /**
     * 最大结果集。
     * @example `1`
     */
    "MaxResults": number;
}
