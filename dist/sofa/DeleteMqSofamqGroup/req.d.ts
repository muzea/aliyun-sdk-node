export interface DeleteMqSofamqGroupRequest {
    /**
     * 需要删除的消息消费集群的 Group ID
     * @example `test_group_id`
     */
    "GroupId": string;
    /**
     * 需删除的 Group ID 对应的实例 ID
     * @example `SOFAMQ_INSTANCE_000001`
     */
    "InstanceId": string;
}
