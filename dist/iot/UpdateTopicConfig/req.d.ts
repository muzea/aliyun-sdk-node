export interface UpdateTopicConfigRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无**实例概览**页面或**ID**值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-0pp1n8t****`
     */
    "IotInstanceId"?: string;
    /**
     * 要接收消息的设备所属产品的**ProductKey**。
     * @example `a1Q5XoY****`
     */
    "ProductKey": string;
    /**
     * 是否支持保留消息广播。
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    "EnableBroadcast"?: boolean;
    "EnableProxySubscribe"?: boolean;
    "Codec"?: string;
    "Operation"?: string;
    /**
     * 要广播消息的自定义Topic。
     * - 对于<props="china"><ph>开源MQTT托管形态设备和</ph></props>MQTT云网关设备，自定义Topic为设备的原始自定义Topic。详细内容，请参见[Topic说明](~~433806~~)。
     * - 对于<props="china"><ph>非开源MQTT托管形态设备和</ph></props>非MQTT云网关设备，自定义Topic的格式为`/broadcast/${productKey}/${自定义字段}`。其中`${productKey}`与请求参数**ProductKey**值一致，`${自定义字段}`为您自定义的任意字段。
     * ><notice>
     * - Topic是在设备开发时编码定义的，无需控制台创建。
     * - Topic的操作权限必须为**订阅**或**发布和订阅**。
     * ></notice>
     * @example `/broadcast/a1Q5XoY****​/test`
     */
    "TopicFullName": string;
    "Description"?: string;
}
