export interface ResendMqSofamqDLQMessageBatchRequest {
    /**
     * 需要查询的单元
     * @example `RZ01A`
     */
    "Cell"?: string;
    /**
     * 需查询的消费端 Group ID
     * @example `GID_test_group_id`
     */
    "GroupId": string;
    /**
     * 需查询消息所对应的实例 ID。
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId": string;
    /**
     * 需重发的消息的 ID，即 Message ID，多个消息使用英文逗号分隔
     * @example `1E0578FE110F18B4AAC235C0C******,1E0578FE110F18B4AAC235C0C******`
     */
    "MsgIds": string;
}
