export interface CreateVirtualHostRequest {
    /**
     * 云消息队列 RabbitMQ 版实例的ID。
     * @example `amqp-cn-v0h1kb9n***`
     */
    "InstanceId": string;
    /**
     * 待创建Vhost的名称。取值说明如下：
     * - Vhost名称只能包含字母、数字、短划线（-）、下划线（_）、半角句号（.）、井号（#）、正斜线（/）、at符号（@）。
     * - Vhost名称长度限制1~255字符。
     * - Vhost创建后，Vhost名称不可修改，只能删除重建。
     * @example `Demo`
     */
    "VirtualHost": string;
}
