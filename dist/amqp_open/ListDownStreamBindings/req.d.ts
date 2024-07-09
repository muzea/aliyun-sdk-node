export interface ListDownStreamBindingsRequest {
    /**
     * Exchange所属的云消息队列 RabbitMQ 版实例的ID。
     * @example `1880770869023***`
     */
    "InstanceId": string;
    /**
     * Exchange所属的Vhost名称。
     * @example `test`
     */
    "VirtualHost": string;
    /**
     * Exchange名称。
     * @example `test`
     */
    "ExchangeName": string;
    /**
     * 用来标记当前查询结束的位置，以便下一次调用时作为参数传入，继续翻页。首次调用或返回最后一页时，取值为空字符串。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    "NextToken"?: string;
    /**
     * 最大结果集。
     * @example `1`
     */
    "MaxResults": number;
}
