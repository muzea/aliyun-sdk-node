export interface UpdateMqSofamqGroupRequest {
    /**
     * 需配置的 Group ID
     * @example `test_group_id`
     */
    "GroupId": string;
    /**
     * 需配置的 Group ID 所对应的实例 ID
     * @example `SOFAMQ_INSTANCE_000001`
     */
    "InstanceId": string;
    /**
     * 设置读消息开关
     * @example `true`
     */
    "ReadEnable": boolean;
}
