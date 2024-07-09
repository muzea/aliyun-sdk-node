export interface QueryMqttTraceMessageOfClientRequest {
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
     * 需要查询消息列表的设备的Client ID。
     * @example `GID_test@@@producer`
     */
    "ClientId": string;
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
    /**
     * 当前取第几页消息，从1开始递增。若输入参数大于总页数，则返回结果为空。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 分页查询，每页最多显示的消息数量，最小1条，最多100条。
     * @example `5`
     */
    "PageSize": number;
    /**
     * 返回结果是否倒序显示。取值说明如下：
     * - **true**：按照消息发送或消费时间倒序显示，最后一条发送或消费的消息显示在第一条，最早一条发送或消费的消息显示在最后一条。
     * - **false**：按照消息发送或消费时间顺序显示，最早一条发送或消费的消息显示在第一条，最后一条发送或消费的消息显示在最后一条。
     * 若不输入，则返回结果默认按照消息发送或消费的时间顺序显示。
     * @example `false`
     */
    "Reverse"?: boolean;
}
