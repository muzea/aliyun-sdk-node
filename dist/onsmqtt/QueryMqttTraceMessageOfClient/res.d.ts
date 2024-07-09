export interface QueryMqttTraceMessageOfClientResponse {
    /**
     * 当前位于第几页。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `B096B9D6-62F3-4567-BB59-58D1362E****`
     */
    RequestId: string;
    /**
     * 每页最多显示的消息数量。
     * @example `10`
     */
    PageSize: number;
    /**
     * 查询到的消息总数。
     * @example `5`
     */
    Total: number;
    /**
     * 返回的消息列表。
     */
    MessageOfClientList: {
        /**
         * 消息发送的时间或被消费的时间。
         * @example `2021-05-21 15:08:19.234`
         */
        Time: string;
        /**
         * 消息动作。取值说明如下：
         * - **pub_mqtt**：微消息队列MQTT版客户端发送消息。
         * - **sub**：微消息队列MQTT版客户端订阅消息。
         * - **push_offline**：服务端推送离线消息到微消息队列MQTT版客户端。
         * @example `pub_mqtt`
         */
        Action: string;
        /**
         * 消息动作的返回码。取值说明如下
         * - **mqtt.trace.action.msg.pub.mqtt**：消息动作取值为**pub_mqtt**时返回该参数值。
         * - **mqtt.trace.action.msg.sub**：消息动作取值为**sub**时返回该参数值。
         * - **mqtt.trace.action.msg.push.offline**：消息动作取值为**push_offline**时返回该参数值。
         * @example `mqtt.trace.action.msg.pub.mqtt`
         */
        ActionCode: string;
        /**
         * 消息动作的返回信息。取值说明如下：
         * - **Pub From Mqtt Client**：消息动作取值为**pub_mqtt**时返回该参数值。
         * - **Push To Mqtt Client**：消息动作取值为**sub**时返回该参数值。
         * - **Push Offline Msg To Mqtt Client**：消息动作取值为**push_offline**时返回该参数值。
         * @example `Pub From Mqtt Client`
         */
        ActionInfo: string;
        /**
         * 消息ID，即Message ID。
         * @example `AC1EC0030EAB78308DB16A3EC773****`
         */
        MsgId: string;
        /**
         * 设备的Client ID。
         * @example `GID_test@@@producer`
         */
        ClientId: string;
    }[];
}
