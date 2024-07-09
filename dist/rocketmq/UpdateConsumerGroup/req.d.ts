export interface UpdateConsumerGroupRequest {
    /**
     * 待更新消费者分组所属的实例的ID。
     * @example `rmq-cn-7e22on9****`
     */
    "instanceId": string;
    /**
     * 待更新的消费者分组ID。
     * @example `CID-TEST`
     */
    "consumerGroupId": string;
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * 更新后的消费者分组的备注信息。
         * @example `This is the remark for test.`
         */
        remark: string;
        /**
         * 更新后的消费者分组的投递顺序性。
         * 参数取值如下：
         * - Concurrently：并发投递
         * - Orderly：顺序投递
         * @example `Concurrently`
         */
        deliveryOrderType: string;
        /**
         * 更新后的消费者分组的消费重试策略。更多信息，请参见
         * [消费重试](~~440356~~)。
         */
        consumeRetryPolicy: {
            /**
             * 重试策略类型。更多信息，请参见[消息重试](~~440356~~)。
             * 参数取值如下：
             * - FixedRetryPolicy：固定间隔重试
             * - DefaultRetryPolicy：阶梯退避重试
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
}
