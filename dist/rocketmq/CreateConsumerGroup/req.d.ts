export interface CreateConsumerGroupRequest {
    /**
     * 待创建的消费者分组所属的实例ID。
     * @example `rmq-cn-7e22ody****`
     */
    "instanceId": string;
    /**
     * 待创建的消费者分组的ID。用于标识消费者分组，全局唯一。
     * 取值说明如下：
     * - 字符限制：支持字母a\~z或A\~Z、数字0\~9以及下划线（_）、短划线（-）。
     * - 长度限制：1~60个字符。
     * 保留字符限制，请参见[参数限制](~~440347~~)。
     * @example `GID_test_groupId`
     */
    "consumerGroupId": string;
    /**
     * 请求体对象。
     */
    "body"?: {
        /**
         * 待创建消费者分组的备注信息。
         * @example `This is the remark for test.`
         */
        remark: string;
        /**
         * 待创建消费者分组的投递顺序性。
         * 参数取值如下：
         * - Concurrently：并发投递
         * - Orderly：顺序投递
         * @example `Concurrently`
         */
        deliveryOrderType: string;
        /**
         * 待创建消费者分组的消费重试策略。更多信息，请参见
         * [消费重试](~~440356~~)。
         */
        consumeRetryPolicy: {
            /**
             * 最大重试次数。
             * @example `16`
             */
            maxRetryTimes: number;
            /**
             * 重试策略类型。更多信息，请参见[消息重试](~~440356~~)。
             * 参数取值如下：
             * - FixedRetryPolicy：固定间隔重试
             * - DefaultRetryPolicy：阶梯退避重试
             * @example `DefaultRetryPolicy`
             */
            retryPolicy: string;
            /**
             * 死信Topic。
             * 消费者出现异常消费某条消息失败，且消息重试后依然未成功，消息将被投递至死信Topic中，以便后续进行业务恢复或回溯。更多信息，请参见[消费重试与死信](~~440356~~)。
             * @example `DLQ_mqtest`
             */
            deadLetterTargetTopic: string;
        };
    };
}
