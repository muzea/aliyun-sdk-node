export interface QueryMqttTraceMessageSubscribeResponse {
    /**
     * 当前位于第几页。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `4E685844-ADAF-4D85-9EAC-F9471E8C****`
     */
    RequestId: string;
    /**
     * 每页最多显示的消息数量。
     * @example `5`
     */
    PageSize: number;
    /**
     * 查询到的消息轨迹总数。
     * @example `2`
     */
    Total: number;
    /**
     * 返回的消息投递轨迹列表。
     */
    MessageTraceLists: {
        /**
         * 消息的投递时间。
         * @example `2021-05-25 16:46:41.274`
         */
        Time: string;
        /**
         * 消息动作。取值说明如下：
         * - **sub**：微消息队列MQTT版客户端订阅消息。
         * - **push_offline**：服务端推送离线消息到微消息队列MQTT版客户端。
         * @example `sub`
         */
        Action: string;
        /**
         * 消息动作的返回码。取值说明如下：
         * - **mqtt.trace.action.msg.sub**：消息动作取值为**sub**时返回该参数值。
         * - **mqtt.trace.action.msg.push.offline**：消息动作取值为**push_offline**时返回该参数值。
         * @example `mqtt.trace.action.msg.sub`
         */
        ActionCode: string;
        /**
         * 消息动作的说明信息。取值说明如下：
         * - **Push To Mqtt Client**：消息动作取值为**sub**时返回该参数值。
         * - **Push Offline Msg To Mqtt Client**：消息动作取值为**push_offline**时返回该参数值。
         * @example `Push To Mqtt Client`
         */
        ActionInfo: string;
        /**
         * 消息ID，即Message ID。
         * @example `AC1EC1B33D5978308DB17F3245E4****`
         */
        MsgId: string;
        /**
         * 订阅消息的客户端ID。
         * @example `GID_test@@@consumer`
         */
        ClientId: string;
    }[];
}
