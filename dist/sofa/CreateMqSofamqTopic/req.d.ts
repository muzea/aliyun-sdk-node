export interface CreateMqSofamqTopicRequest {
    /**
     * 需创建的 Topic 所对应的实例 ID
     * @example `000001`
     */
    "InstanceId": string;
    /**
     * 消息类型。取值说明如下：0：普通消息；1：分区顺序消息；2：全局顺序消息；4：事务消息；5：定时/延时消息。
     * @example `0`
     */
    "MessageType": number;
    /**
     * Topic 的备注信息
     * @example `测试`
     */
    "Remark"?: string;
    /**
     * 需创建的 Topic 的名称
     * @example `test`
     */
    "Topic": string;
}
