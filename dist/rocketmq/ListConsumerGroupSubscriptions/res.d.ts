export interface ListConsumerGroupSubscriptionsResponse {
    /**
     * 请求ID。
     * @example `5F4D9D5F-625B-59FF-BD4F-DA8284575DB4`
     */
    requestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果。
     */
    data: {
        /**
         * 消费者分组ID。
         * @example `CID-TEST`
         */
        consumerGroupId: string;
        /**
         * 指定消费者分组订阅的主题。
         * @example `topic_test`
         */
        topicName: string;
        /**
         * 消费者分组的消费模式。
         * - BROADCASTING：广播模式
         * - CLUSTERING：集群模式
         * @example `CLUSTERING`
         */
        messageModel: string;
        /**
         * 订阅状态。
         * - ONLINE：在线。消费者分组下如果有多个消费者，只要有一个消费者在线则显订阅状态为在线。
         * - OFFLINE：离线。消费者分组下如果有多个消费者，所有消费者都处于离线时订阅状态才显示离线。
         * @example `ONLINE`
         */
        subscriptionStatus: string;
        /**
         * 过滤表达式。
         * @example `*`
         */
        filterExpression: string;
        /**
         * 过滤表达式类型。
         * - SQL：SQL过滤
         * - TAG：Tag过滤。
         * @example `SQL`
         */
        filterExpressionType: string;
        /**
         * 是否创建了topic。
         * @example `true`
         */
        topicCreated: boolean;
        consistency: boolean;
    }[];
    /**
     * 错误码。
     * @example `MissingInstanceId`
     */
    code: string;
    /**
     * 错误信息。
     * @example `Parameter instanceId is mandatory for this action .`
     */
    message: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    httpStatusCode: number;
    /**
     * 动态错误码。
     * @example `InstanceId`
     */
    dynamicCode: string;
    /**
     * 动态错误信息。
     * @example `InstanceId`
     */
    dynamicMessage: string;
}
