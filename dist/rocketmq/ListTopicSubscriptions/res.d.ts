export interface ListTopicSubscriptionsResponse {
    /**
     * 请求ID
     * @example `92A9BE4E-B794-50C8-979C-0456E4D32943`
     */
    requestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果
     */
    data: {
        /**
         * 消费者组
         * @example `CID-TEST`
         */
        consumerGroupId: string;
        /**
         * 订阅主题
         * @example `topic_test`
         */
        topicName: string;
        /**
         * 消费模式,ConsumptionModelEnum[BROADCASTING(广播模式),CLUSTERING(集群模式),code,desc]
         * @example `BROADCASTING`
         */
        messageModel: string;
        /**
         * 订阅状态,SubscriptionStatusEnum[ONLINE(在线),OFFLINE(离线),code,desc]
         * @example `ONLINE`
         */
        subscriptionStatus: string;
        /**
         * 过滤表达式
         * @example `*`
         */
        filterExpression: string;
        /**
         * 过滤表达式类型,SubscriptionExpressionTypeEnum[SQL(SQL过滤),TAG(TAG过滤),UNSPECIFIED(FILTER_TYPE_UNSPECIFIED  过滤类型未指定),code,desc]
         * @example `SQL`
         */
        filterExpressionType: string;
        consistency: string;
    }[];
    /**
     * 错误码
     * @example `MissingInstanceId`
     */
    code: string;
    /**
     * 错误信息
     * @example `The instance cannot be found.`
     */
    message: string;
    /**
     * HTTP状态码
     * @example `200`
     */
    httpStatusCode: number;
    /**
     * 动态错误码
     * @example `Topic`
     */
    dynamicCode: string;
    /**
     * 动态错误信息
     * @example `instanceId`
     */
    dynamicMessage: string;
}
