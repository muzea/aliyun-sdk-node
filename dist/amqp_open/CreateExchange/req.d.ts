export interface CreateExchangeRequest {
    /**
     * 待创建Exchange所属的云消息队列 RabbitMQ 版实例ID。
     * @example `amqp-cn-v0h1kb9nu***`
     */
    "InstanceId": string;
    /**
     * 待创建Exchange所属的Vhost名称。
     * @example `test`
     */
    "VirtualHost": string;
    /**
     * 待创建的Exchange名称。说明：
     * - Exchange名称只能包含字母、数字、短划线（-）、下划线（_）、半角句号（.）、井号（#）、正斜线（/）、at 符号（@），长度限制1~255 字符。
     * - Exchange创建后，名称不支持修改，只能删除后重建。
     * @example `DemoExchange`
     */
    "ExchangeName": string;
    /**
     * Exchange类型。取值：
     * - **DIRECT**：该类型路由规则会将消息路由到Binding Key与Routing Key完全匹配的Queue中。
     * - **TOPIC**：该类型与DIRECT类型相似，使用Routing Key模式匹配和字符串比较的方式将消息路由至绑定的Queue。
     * - **FANOUT**：该类型路由规则非常简单，会把所有发送到该Exchange的消息路由到所有与它绑定的Queue中，相当于广播功能。
     * - **HEADERS**：该类型与DIRECT类型相似。Headers Exchange使用Headers属性代替Routing Key进行路由匹配，在绑定Headers Exchange和Queue时，设置绑定属性的键值对；在向Headers Exchange发送消息时，设置消息的Headers属性键值对，使用消息Headers属性键值对和绑定属性键值对比较的方式将消息路由至绑定的Queue。
     * - **X-CONSISTENT-HASH**：x-consistent-hash Exchange支持将Routing Key或Header值进行Hash计算，使用一致性哈希算法将消息路由到不同的Queue上。
     * @example `DIRECT`
     */
    "ExchangeType": string;
    /**
     * 是否自动删除。取值：
     * - **true**：是。如果绑定到该Exchange的最后一个Queue解除绑定，该Exchange会自动删除。
     * - **false**：否。如果绑定到该Exchange的最后一个Queue解除绑定，该Exchange不会自动删除。
     * @example `false`
     */
    "AutoDeleteState": boolean;
    /**
     * 是否为内部Exchange。取值：
     * - **false**：否
     * - **true**：是
     * @example `false`
     */
    "Internal": boolean;
    /**
     * 备份Exchange。配置备份Exchange用于接收Exchange路由失败的消息。
     * @example `DemoAE`
     */
    "AlternateExchange"?: string;
}
