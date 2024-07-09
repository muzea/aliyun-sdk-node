export interface OnsMessageTraceRequest {
    /**
     * 消息的Topic。
     * @example `test-mq_topic`
     */
    "Topic": string;
    /**
     * 需查询消息轨迹的消息ID，即Message ID。
     * @example `1E05791C117818B4AAC23B1BB0CE****`
     */
    "MsgId": string;
    /**
     * 需查询的消息所对应的实例ID。
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId"?: string;
}
