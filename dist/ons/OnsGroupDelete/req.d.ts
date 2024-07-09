export interface OnsGroupDeleteRequest {
    /**
     * 待删除的消息消费集群的Group ID。
     * @example `GID_test_groupId`
     */
    "GroupId": string;
    /**
     * 待删除的Group所属的实例ID。
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId"?: string;
}
