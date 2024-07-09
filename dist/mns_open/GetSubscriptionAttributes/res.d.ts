export interface GetSubscriptionAttributesResponse {
    /**
     * 请求的ID。
     * @example `06273500-249F-5863-121D-74D51123****`
     */
    RequestId: string;
    /**
     * 响应code。
     * @example `200`
     */
    Code: number;
    /**
     * 响应的状态。
     * @example `Success`
     */
    Status: string;
    /**
     * 响应信息。
     * @example `operation success`
     */
    Message: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 响应数据。
     */
    Data: {
        /**
         * Subscription的名称。
         * @example `MySubscription`
         */
        SubscriptionName: string;
        /**
         * Subscription订阅的主题所有者的AccountId。
         * @example `123456789098****`
         */
        TopicOwner: string;
        /**
         * Subscription订阅的主题名称。
         * @example `MyTopic`
         */
        TopicName: string;
        /**
         * 订阅的终端地址。
         * @example `http://example.com`
         */
        Endpoint: string;
        /**
         * 描述了该订阅中消息过滤的标签（仅标签一致的消息才会被推送）。
         * @example `important`
         */
        FilterTag: string;
        /**
         * Subscription的创建时间，从1970-01-01 00:00:00到现在的。
         * @example `1449554806`
         */
        CreateTime: number;
        /**
         * 最近一次修改Subscription属性信息的时间，从1970-01-01 00:00:00到现在的秒值。
         * @example `1449554962`
         */
        LastModifyTime: number;
        /**
         * 向Endpoint推送消息错误时的重试策略。取值说明如下：
         * - BACKOFF_RETRY：退避重试。
         * - EXPONENTIAL_DECAY_RETRY：指数衰减重试。
         * @example `BACKOFF_RETRY`
         */
        NotifyStrategy: string;
        /**
         * 向Endpoint推送的消息内容格式。
         * 取值说明如下：
         * - XML
         * - JSON
         * - SIMPLIFIED
         * @example `XML`
         */
        NotifyContentFormat: string;
    };
}
