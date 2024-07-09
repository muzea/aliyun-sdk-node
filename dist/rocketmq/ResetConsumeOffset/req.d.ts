export interface ResetConsumeOffsetRequest {
    /**
     * 云消息队列 RocketMQ 版的实例ID。
     * @example `rmq-cn-tl32ue44x0g`
     */
    "instanceId": string;
    /**
     * 消费者分组ID。
     * @example `dolphin_status`
     */
    "consumerGroupId": string;
    /**
     * 消费者分组订阅的主题名称。
     * @example `AMZN_REPORT_TOPIC`
     */
    "topicName": string;
    /**
     * 请求体对象。
     */
    "body"?: {
        /**
         * 重置方式。
         * - CLATEST_OFFSET：从最新位点开始消费。
         *    Group ID消费指定Topic中的消息时，会跳过当前堆积（未被消费）的所有消息，从重置操作时间后发送的最新消息开始消费。
         * - SPECIFIED_TIME：从指定时间的位点开始消费。
         *
         *    - 消费者将从重置时间对应的消费位点之后的消息进行消费，不管这些消息是否已被消费过。
         *   - 可选时间范围中的起始和终止时间分别是该Topic中储存的最早的和最晚的一条消息的生产时间，不能选择超过可选时间范围的时间点。
         *    - 重置到某一时刻对应的消费位点，匹配位点时，服务端会根据自动匹配到该时刻最接近的消费位点。
         * @example `LATEST_OFFSET`
         */
        resetType: string;
        /**
         * 指定重置时间。表示消费者将从该时间点对应的消费位点重新开始消费消息。
         * 仅当resetType（重置方式）选择SPECIFIED_TIME（指定时间）时需要填写该参数。
         * 格式为YYYY-MM-DD HH:mm:ss，例如：2023-11-23 10:00:00。
         * @example `2023-03-22 12:17:08`
         */
        resetTime: string;
    };
}
