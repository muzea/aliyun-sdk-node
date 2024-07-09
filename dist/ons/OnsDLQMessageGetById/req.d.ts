export interface OnsDLQMessageGetByIdRequest {
    /**
     * 需查询的消息的ID，即Message ID。
     * @example `0BC16699165C03B925DB8A404E2D****`
     */
    "MsgId": string;
    /**
     * 需查询的消费端Group ID。
     * @example `GID_test_group_id`
     */
    "GroupId": string;
    /**
     * 需查询消息所对应的实例ID。
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId"?: string;
}
