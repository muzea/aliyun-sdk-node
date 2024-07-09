export interface QueryMqttTraceMessagePublishRequest {
    /**
     * 云消息队列 MQTT 版实例地域（Region）的ID。请参见[服务接入点](~~181438~~)。
     * @example `cn-hangzhou`
     */
    "MqttRegionId": string;
    /**
     * 云消息队列 MQTT 版实例的ID，一定要和客户端实际使用的实例ID匹配。您可以在控制台**实例详情**页面的**基础信息**区域查看。
     * @example `mqtt-cn-i7m26mf****`
     */
    "InstanceId": string;
    /**
     * 消息ID，即Message ID。
     * @example `AC1EC0030EAB78308DB16A3EC773****`
     */
    "MsgId": string;
    /**
     * 查询范围的起始时间戳。单位：毫秒。
     * @example `1618646400000`
     */
    "BeginTime": number;
    /**
     * 查询范围的终止时间戳。单位：毫秒。
     * @example `1621591200000`
     */
    "EndTime": number;
}
