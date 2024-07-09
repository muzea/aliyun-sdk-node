export interface AddCustomAuthConnectBlackRequest {
    /**
     * 云消息队列MQTT版实例的ID。
     * @example `mqtt-cn-i7m26mf****`
     */
    "InstanceId": string;
    /**
     * 禁止连接的设备ClientID。
     * @example `GID_test@@@test`
     */
    "ClientId": string;
}
