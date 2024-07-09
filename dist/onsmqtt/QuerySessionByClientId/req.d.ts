export interface QuerySessionByClientIdRequest {
    /**
     * 需要查询的目标Client ID。
     * @example `GID_test@@@test`
     */
    "ClientId": string;
    /**
     * 云消息队列 MQTT 版实例的ID，一定要和客户端实际使用的实例ID匹配。您可以在[控制台](https://mqtt.console.aliyun.com)**实例详情**页面获取该ID。
     * @example `post-cn-0pp12gl****`
     */
    "InstanceId": string;
}
