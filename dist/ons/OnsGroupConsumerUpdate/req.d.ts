export interface OnsGroupConsumerUpdateRequest {
    /**
     * 需配置的Group ID。
     * @example `GID_test_groupId`
     */
    "GroupId": string;
    /**
     * 设置Group ID对应的消费者集群是否有读取消息权限。取值说明如下：
     * - **true**：指定Group ID对应的消费者集群有读消息权限。
     * - **false**：指定Group ID对应的消费者集群没有读消息权限。
     * 默认值为**true**。
     * @example `true`
     */
    "ReadEnable": boolean;
    /**
     * 需配置的Group ID所对应的实例ID。
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId"?: string;
}
