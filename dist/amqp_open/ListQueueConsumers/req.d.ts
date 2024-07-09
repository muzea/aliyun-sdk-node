export interface ListQueueConsumersRequest {
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
     * 队列名称。
     * @example `queue-rabbit-springboot-advance5`
     */
    "Queue": string;
    /**
     * 用来标记当前查询结束的位置，以便下一次调用时作为参数传入，继续翻页。首次调用或返回最后一页时，取值为空字符串。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    "NextToken"?: string;
    /**
     * 拉取数据的条数。如果不设置，默认值为1。
     * 取值范围：\[1,100\]。
     * @example `1`
     */
    "QueryCount"?: number;
}
