export interface GetMqSofamqDLQMessageByIdRequest {
    /**
     * 需要查询的单元
     * @example `RZ01A`
     */
    "Cell"?: string;
    /**
     * 需查询的消费端 Group ID
     * @example `GID_test_group_id	 `
     */
    "GroupId": string;
    /**
     * 需查询消息所对应的实例 ID。针对有独立命名空间的实例，该参数为必填。
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId": string;
    /**
     * 需查询的消息的 ID，即 Message ID
     * @example `0BC16699165C03B925DB8A404E2D****`
     */
    "MsgId": string;
}
