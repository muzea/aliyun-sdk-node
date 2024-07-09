export interface ResetMqSofamqConsumerOffsetRequest {
    /**
     * 需要查询的单元。
     * @example `RZ01A`
     */
    "Cell"?: string;
    /**
     * 需查询的消费端 Group ID。
     * @example `GID_test_consumer_id`
     */
    "GroupId": string;
    /**
     * 需查询的 Group ID 所对应的实例 ID。针对有独立命名空间的实例，该参数为必填。
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId": string;
    /**
     * 重置位点到指定的时间戳，仅在 Type 为 1 时生效。单位：毫秒。
     * @example `1568033253000`
     */
    "ResetTimestamp"?: number;
    /**
     * 需重置位点的 Topic 名称。
     * @example `test-mq-topic	`
     */
    "Topic": string;
    /**
     * 消息清理类型，取值说明如下：
     * - 0：清除所有消息。
     * - 1：清理到指定时间。
     * @example `1`
     */
    "Type": number;
}
