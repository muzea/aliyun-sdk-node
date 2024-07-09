export interface GetSubscriptionAttributesRequest {
    /**
     * Subscription订阅的主题名称。
     * @example `MyTopic`
     */
    "TopicName": string;
    /**
     * Subscription的名称。
     * @example `MySubscription`
     */
    "SubscriptionName": string;
}
