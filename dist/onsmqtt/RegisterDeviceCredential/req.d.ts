export interface RegisterDeviceCredentialRequest {
    /**
     * 需要注册访问凭证的设备的Client ID。
     * @example `GID_test@@@test`
     */
    "ClientId": string;
    /**
     * 云消息队列 MQTT 版实例的ID，一定要和客户端实际使用的实例ID匹配。您可以在控制台**实例详情**页面获取该ID。
     * @example `post-cn-0pp12gl****`
     */
    "InstanceId": string;
}
