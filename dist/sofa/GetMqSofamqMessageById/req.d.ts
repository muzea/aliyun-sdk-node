export interface GetMqSofamqMessageByIdRequest {
    /**
     * 需查询的消息所在的单元
     * @example `RZ01A  `
     */
    "Cell"?: string;
    /**
     * 需查询消息所对应的实例 ID。针对有独立命名空间的实例，该参数为必填。
     * @example `MQ_INST_111111111111_DOxxxxxx	 `
     */
    "InstanceId": string;
    /**
     * 需查询的消息的 ID，即 Message ID
     * @example `1E0578FE110F18B4AAC235C05F2*****`
     */
    "MsgId": string;
    /**
     * 需查询的消息的 Topic
     * @example `test-mq_topic	 `
     */
    "Topic": string;
}
