export interface CreateMqSofamqGroupRequest {
    /**
     * 创建的消息端 Group ID
     * @example `test_group_id`
     */
    "GroupId": string;
    /**
     * 分组类型
     * @example `tcp`
     */
    "GroupType"?: string;
    /**
     * 需创建的 Group ID 所对应的实例 ID
     * @example `SOFAMQ_INSTANCE_000001`
     */
    "InstanceId": string;
    /**
     * Group ID 描述信息
     * @example `test`
     */
    "Remark"?: string;
}
