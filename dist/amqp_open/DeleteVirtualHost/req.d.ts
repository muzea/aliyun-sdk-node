export interface DeleteVirtualHostRequest {
    /**
     * 待删除的Vhost所属的云消息队列 RabbitMQ 版实例ID。
     * @example `amqp-cn-v0h1kb9nu***`
     */
    "InstanceId": string;
    /**
     * 待删除Vhost的名称。
     * @example `test`
     */
    "VirtualHost": string;
}
