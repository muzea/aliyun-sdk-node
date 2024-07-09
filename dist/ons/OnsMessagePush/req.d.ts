export interface OnsMessagePushRequest {
    /**
     * Group ID。详细信息，请参见[名词解释](~~29533~~)。
     * @example `GID_test_group_id`
     */
    "GroupId": string;
    /**
     * 消费者实例的ID。您可调用[OnsConsumerGetConnection](~~29598~~)接口获取该ID。
     * @example `30.5.121.**@24813#-1999745829#-1737591554#453111174894656`
     */
    "ClientId": string;
    /**
     * 消息的标识，即Message ID。
     * @example `0BC1669963053CF68F733BB70396****`
     */
    "MsgId": string;
    /**
     * 消息推送至的目标Topic。
     * @example `test-mq_topic`
     */
    "Topic": string;
    /**
     * 所需推送的消息所在的实例ID。
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId"?: string;
}
