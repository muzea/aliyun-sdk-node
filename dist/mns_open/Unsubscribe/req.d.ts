export interface UnsubscribeRequest {
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
}
