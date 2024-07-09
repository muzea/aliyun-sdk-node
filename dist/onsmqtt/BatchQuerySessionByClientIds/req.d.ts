export interface BatchQuerySessionByClientIdsRequest {
    /**
     * 云消息队列 MQTT 版实例的ID，一定要和客户端实际使用的实例ID匹配。您可以在[控制台](https://mqtt.console.aliyun.com)**实例详情**页面获取该ID。
     * @example `post-cn-0pp12gl****`
     */
    "InstanceId": string;
    /**
     * 客户端列表。
     * @example `ClientIdList.1`
     */
    "ClientIdList": string[];
}
