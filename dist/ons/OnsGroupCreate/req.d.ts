export interface OnsGroupCreateRequest {
    /**
     * 创建的消息消费集群的Group ID。取值说明如下：
     * - 长度限制为2~64个字符，只能包含字母、数字、短划线（-）和下划线（_）。
     * - 若创建的Group所在实例有命名空间，则Group ID需要保证实例内唯一，不能和本实例下已有的Group ID或Topic名称重复；跨实例之间可以重名，例如实例A的Group ID可以和实例B的Group ID重复，也可以和实例B的Topic名称重复。
     * - 若创建的Group所在实例无命名空间，则Group ID需要保证跨实例和跨地域全局唯一，全局范围内不能和已有的Group ID或Topic名称重复。
     * > - Group ID创建后，将无法再修改。
     * - 实例是否有命名空间，可以在消息队列RocketMQ版控制台**实例详情**页面的**基础信息区域**查看。
     * @example `GID_test_groupId`
     */
    "GroupId": string;
    /**
     * 备注。
     * @example `test`
     */
    "Remark"?: string;
    /**
     * 需创建的Group ID所对应的实例ID。
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId"?: string;
    /**
     * 指定创建的Group ID适用的协议。TCP协议和HTTP协议的Group ID不可以共用，需要分别创建。取值说明如下：
     * - **tcp**：默认值，表示创建的Group ID仅适用于TCP协议的消息收发。
     * - **http**：表示创建的Group ID仅适用于HTTP协议的消息收发。
     * @example `tcp`
     */
    "GroupType"?: string;
}
