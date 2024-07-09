export interface DeleteQueueRequest {
    /**
     * 实例ID。
     * @example `1880770869023***`
     */
    "InstanceId": string;
    /**
     * Queue名称。
     * @example `DemoQueue`
     */
    "QueueName": string;
    /**
     * Vhost名称。
     * @example `Test`
     */
    "VirtualHost": string;
}
