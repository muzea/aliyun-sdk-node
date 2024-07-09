export interface ListBindingsRequest {
    /**
     * 云消息队列 RabbitMQ 版实例的ID。
     * @example `1880770869023***`
     */
    "InstanceId": string;
    /**
     * Vhost名称。
     * @example `Test`
     */
    "VirtualHost": string;
    /**
     * 用来标记当前查询结束的位置，以便下一次调用时作为参数传入，继续翻页。首次调用和当返回最后一页时，取值为空字符串。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    "NextToken"?: string;
    /**
     * 本次读取的最大数据记录数量。取值：
     * **1~100**
     * @example `1`
     */
    "MaxResults": number;
}
