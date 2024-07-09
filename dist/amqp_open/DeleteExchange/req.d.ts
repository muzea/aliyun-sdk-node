export interface DeleteExchangeRequest {
    /**
     * 待删除Exchange所属的云消息队列 RabbitMQ 版实例ID。
     * @example `amqp-cn-v0h1kb9nu***`
     */
    "InstanceId": string;
    /**
     * 待删除Exchange所属的Vhost名称。
     * @example `test`
     */
    "VirtualHost": string;
    /**
     * 待删除的Exchange的名称。
     * @example `DemoExchange`
     */
    "ExchangeName": string;
}
