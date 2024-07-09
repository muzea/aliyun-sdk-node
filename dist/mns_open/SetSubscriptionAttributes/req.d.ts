export interface SetSubscriptionAttributesRequest {
    /**
     * Topic的名称。
     * @example `test`
     */
    "TopicName": string;
    /**
     * Subscription的名称。
     * @example `MySubscription`
     */
    "SubscriptionName": string;
    /**
     * 向Endpoint推送消息错误时的重试策略。取值说明如下：
     * - BACKOFF_RETRY：退避重试。
     * - EXPONENTIAL_DECAY_RETRY：指数衰减重试。
     * @example `BACKOFF_RETRY`
     */
    "NotifyStrategy"?: string;
}
