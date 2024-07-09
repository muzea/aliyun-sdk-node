export interface QueryMqttTraceMessagePublishResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `69AD5550-BF22-438A-9202-A6E89185****`
     */
    RequestId: string;
    /**
     * 返回的消息发送轨迹列表。
     */
    MessageTraceLists: {
        /**
         * 消息的发送时间。
         * @example `2021-05-21 15:08:19.210`
         */
        Time: string;
        /**
         * 消息动作。取值说明如下：
         * - **pub_mqtt**：表示消息的发送者是云消息队列 MQTT 版客户端。
         * - **pub_mq**：表示消息的发送者是云消息队列 RocketMQ 版客户端。
         * @example `pub_mqtt`
         */
        Action: string;
        /**
         * 消息动作的返回码。取值说明如下：
         * - **mqtt.trace.action.msg.pub.mqtt**：消息动作取值为**pub_mqtt**时返回该参数值。
         * - **mqtt.trace.action.msg.pub.mq**：消息动作取值为**pub_mq**时返回该参数值。
         * @example `mqtt.trace.action.msg.pub.mqtt`
         */
        ActionCode: string;
        /**
         * 消息动作的说明信息。取值说明如下：
         * - **Pub From Mqtt Client**：消息动作取值为**pub_mqtt**时返回该参数值。
         * - **Pub From MQ**：消息动作取值为**pub_mq**时返回该参数值。
         * @example `Pub From Mqtt Client`
         */
        ActionInfo: string;
        /**
         * 消息ID，即Message ID。
         * @example `AC1EC0030EAB78308DB16A3EC773BD95`
         */
        MsgId: string;
        /**
         * 发送消息的客户端ID。
         * @example `GID_test@@@producer`
         */
        ClientId: string;
    }[];
}
