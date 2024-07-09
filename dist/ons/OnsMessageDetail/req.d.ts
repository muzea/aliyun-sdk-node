export interface OnsMessageDetailRequest {
    /**
     * 云消息队列 RocketMQ 版实例ID。
     * @example `MQ_INST_184681981******_BXig0x6A`
     */
    "InstanceId": string;
    /**
     * 需查询的消息的Topic名称。
     * @example `test-mq_topic`
     */
    "Topic": string;
    /**
     * 需查询的消息的ID，即Message ID。
     * @example `1E0578FE110F18B4AAC235C0******`
     */
    "MsgId": string;
}
