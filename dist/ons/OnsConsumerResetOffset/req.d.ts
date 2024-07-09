export interface OnsConsumerResetOffsetRequest {
    /**
     * 需查询的消费端Group ID。
     * @example `GID_test_consumer_id`
     */
    "GroupId": string;
    /**
     * 需重置位点的Topic。
     * @example `test-mq-topic`
     */
    "Topic": string;
    /**
     * 消息清理类型。取值说明如下：
     * - **0**：清除所有消息。该Group ID在消费该Topic下的消息时会跳过当前堆积（未被消费）的所有消息，从这之后发送的最新消息开始消费。
     *
     *  对于程序返回"reconsumeLater"，即走重试流程的这部分消息来说，清除无效。
     * - **1**：清理到指定时间。请指定一个时间点，这个时间点之后发送的消息才会被消费。
     *
     *  可选时间范围中的起始和终止时间分别是该Topic中储存的最早的和最晚的一条消息的生产时间。不能选择超过可选时间范围的时间点。
     * @example `1`
     */
    "Type": number;
    /**
     * 重置位点到指定的时间戳，仅在**Type**为**1**时生效。单位：毫秒。
     * @example `1591153871000`
     */
    "ResetTimestamp"?: number;
    /**
     * 需查询的Group ID所对应的实例ID。
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId"?: string;
}
