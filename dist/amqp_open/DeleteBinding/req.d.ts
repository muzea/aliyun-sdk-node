export interface DeleteBindingRequest {
    /**
     * 实例ID。
     * @example `amqp-cn-v0h1kb9nu***`
     */
    "InstanceId": string;
    /**
     * Vhost名称。
     * @example `test`
     */
    "VirtualHost": string;
    /**
     * 源Exchange名称。
     * @example `NormalEX`
     */
    "SourceExchange": string;
    /**
     * 解绑目标对象的名称。
     * @example `DemoQueue`
     */
    "DestinationName": string;
    /**
     * 解绑目标对象的类型。取值：
     * - **QUEUE**
     * - **EXCHANGE**
     * @example `QUEUE`
     */
    "BindingType": string;
    /**
     * 绑定键。
     * @example `.test.`
     */
    "BindingKey": string;
}
