export interface CreateQueueRequest {
    /**
     * 待创建Queue所属的云消息队列 RabbitMQ 版实例ID。
     * @example `amqp-cn-v0h1kb9nu***`
     */
    "InstanceId": string;
    /**
     * 待创建Queue所属的Vhost名称。
     * 只能包含字⺟、数字、短划线（-）、下划线（_）、半角句号（.）、井号（#）、正斜线（/）、at符号（@），⻓度限制1~255字符。
     * @example `test`
     */
    "VirtualHost": string;
    /**
     * 待创建的Queue的名称。
     * - Queue名称只能包含字母、数字、短划线（-）、下划线（_）、半角句号（.）、井号（#）、正斜线（/）、at符号（@），长度限制1~255字符。
     * - Queue创建后，名称无法修改，只能删除后重建。
     * @example `DemoQueue`
     */
    "QueueName": string;
    /**
     * 是否自动删除。取值：
     * - true：是。如果订阅该Queue的最后一个消费端取消订阅后，那么该Queue将会自动删除。
     * - false：否。
     * @example `false`
     */
    "AutoDeleteState"?: boolean;
    /**
     * 是否为排他性Exchange。取值：
     * - true：是。只能被声明该排他性Exchange的Connection使用。该Connection断开后该排他性Exchange自动删除。
     * - false：否。
     * @example `false`
     */
    "ExclusiveState"?: boolean;
    /**
     * 消息在Queue中的有效期。
     * - 某条消息在Queue中的留存时间超过配置的消息存活时间时，则该消息过期。
     * - 消息存活时间的值必须为非负整型数，最大为1天。单位为毫秒。例如，某条消息的存活时间的值是1000，则代表该消息最多会在Queue中存活1秒。
     * @example `1000`
     */
    "MessageTTL"?: number;
    /**
     * Queue的自动过期时间。如果Queue在指定时间内没有被访问，则会被自动删除。
     * 单位为毫秒。
     * > 该参数对应的功能需要开通后才能使用。如需使用，请<props="china">[提交工单](https://selfservice.console.aliyun.com/ticket/createIndex)</props><props="intl">[提交工单](https://ticket-intl.console.aliyun.com/#/ticket/createIndex)</props>开通。
     * @example `10000`
     */
    "AutoExpireState"?: number;
    /**
     * 当前版本不支持该参数。
     * Queue中消息的最大数量。如果超出该数量，则先到达该Queue的消息将会被删除。
     * @example `1000`
     */
    "MaxLength"?: number;
    /**
     * 死信Exchange。该类Exchange是用来接收被拒绝的消息。
     * 如果消费端拒绝一个不重新发送的消息，那么消息队列RabbitMQ版将会把消息路由到指定的死信Exchange，该Exchange再将消息路由到绑定的Queue进行存储。
     * @example `DLExchange`
     */
    "DeadLetterExchange"?: string;
    /**
     * 死信Routing Key。
     * 只能包含字⺟、数字、短划线（-）、下划线（_）、半角句号（.）、井号（#）、正斜线（/）、at符号（@），⻓度限制1~255字符。
     * @example `test.dl`
     */
    "DeadLetterRoutingKey"?: string;
    /**
     * 不支持优先级功能。取值不影响调用和返回结果。
     * @example `10`
     */
    "MaximumPriority"?: number;
}
