export interface SendMessageRequest {
    /**
     * 云消息队列 MQTT 版的Topic，即消息发送的目标Topic。
     * @example `TopicA`
     */
    "MqttTopic": string;
    /**
     * 云消息队列 MQTT 版实例的ID，一定要和客户端实际使用的实例ID匹配。您可以在[控制台](https://mqtt.console.aliyun.com)**实例详情**页面的**基础信息**区域查看。
     * @example `post-cn-0pp12gl****`
     */
    "InstanceId": string;
    /**
     * 消息内容，即消息负载。建议自行做Base64编码，避免传输不可见字符。
     * @example `test`
     */
    "Payload": string;
}
