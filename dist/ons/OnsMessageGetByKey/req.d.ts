export interface OnsMessageGetByKeyRequest {
    /**
     * 需查询的消息的Topic。
     * @example `test-mq_topic`
     */
    "Topic": string;
    /**
     * 需查询的消息的Message Key。
     * @example `messageKey1`
     */
    "Key": string;
    /**
     * 需查询的消息所对应的实例ID。
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId"?: string;
}
