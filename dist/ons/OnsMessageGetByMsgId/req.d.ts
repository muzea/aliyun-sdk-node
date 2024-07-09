export interface OnsMessageGetByMsgIdRequest {
    /**
     * 需查询的消息的ID，即Message ID。
     * @example `1E0578FE110F18B4AAC235C05F2*****`
     */
    "MsgId": string;
    /**
     * 需查询的消息的Topic。
     * @example `test-mq_topic`
     */
    "Topic": string;
    /**
     * 需查询消息所对应的实例ID。
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId"?: string;
}
