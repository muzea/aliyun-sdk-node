export interface GetConsumerGroupResponse {
    /**
     * 请求ID，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `C7F94090-3358-506A-97DC-34BC803C****`
     */
    requestId: string;
    /**
     * 执行结果是否成功。
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果。
     */
    data: {
        /**
         * 实例所属的地域ID。
         * @example `cn-hangzhou`
         */
        regionId: string;
        /**
         * 消费者分组所属的实例的ID。
         * @example `rmq-cn-7e22ody****`
         */
        instanceId: string;
        /**
         * 消费者分组的ID。
         * @example `CID-TEST`
         */
        consumerGroupId: string;
        /**
         * 消费者分组的状态。
         * @example `RUNNING`
         */
        status: string;
        /**
         * 消费者分组的备注信息。
         * @example `This is the remark for test.`
         */
        remark: string;
        /**
         * 消费者分组的创建时间。
         * @example `2022-08-01 20:05:50`
         */
        createTime: string;
        /**
         * 消费者分组的最后更新时间。
         * @example `2022-08-01 20:05:50`
         */
        updateTime: string;
        /**
         * 消费者分组的投递顺序性。
         * @example `Concurrently`
         */
        deliveryOrderType: string;
        /**
         * 消费者分组的消费重试策略。更多信息，请参见
         * [消费重试](~~440356~~)。
         */
        consumeRetryPolicy: {
            /**
             * 重试策略类型。
             * @example `DefaultRetryPolicy`
             */
            retryPolicy: string;
            /**
             * 最大重试次数。
             * @example `16`
             */
            maxRetryTimes: number;
            /**
             * 死信Topic。
             * 消费者出现异常消费某条消息失败，且消息重试后依然未成功，消息将被投递至死信Topic中，以便后续进行业务恢复或回溯。更多信息，请参见[消费重试与死信](~~440356~~)。
             * @example `DLQ_mqtest`
             */
            deadLetterTargetTopic: string;
        };
    };
    /**
     * 错误码。
     * @example `InvalidConsumerGroupId`
     */
    code: string;
    /**
     * 错误信息。
     * @example `Parameter consumerGroupId is invalid.`
     */
    message: string;
    /**
     * HTTP状态码。
     * @example `400`
     */
    httpStatusCode: number;
    /**
     * 动态错误码。
     * @example `ConsumerGroupId`
     */
    dynamicCode: string;
    /**
     * 动态错误信息。
     * @example `consumerGroupId`
     */
    dynamicMessage: string;
}
