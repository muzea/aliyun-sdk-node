export interface UpdateInstanceNameRequest {
    /**
     * 需修改名称的云消息队列 RabbitMQ 版实例的ID。
     * @example `amqp-cn-zvp2ajsj****`
     */
    "InstanceId": string;
    /**
     * 需更新的实例名称。取值无限制，建议长度不超过64个字符。
     * @example `amqp_test`
     */
    "InstanceName": string;
}
