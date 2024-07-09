export interface ListExchangesRequest {
    /**
     * 云消息队列 RabbitMQ 版实例的ID。
     * @example `amqp-cn-7pp2mwbc****`
     */
    "InstanceId": string;
    /**
     * Vhost名称。
     * @example `test`
     */
    "VirtualHost": string;
    /**
     * 下一次查询的Token。取值：
     * - 如果是第一次查询或没有下一次查询，则无需填写。
     * - 如果有下一次查询，则取值为上一次返回的`NextToken`值。
     * @example `AAAANDQBYW1xcC1jbi03cHAybXdiY3AwMGEBdmhvc3QBAXNkZndhYWJhATE2NDkzMTM4OTU5NDIB4o3z1pPwWzk4aYuiRffi8R6-****`
     */
    "NextToken"?: string;
    /**
     * 最大结果集。取值：
     * **1～100**。
     * @example `1`
     */
    "MaxResults": number;
}
