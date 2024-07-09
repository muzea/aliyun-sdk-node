export interface BatchPubRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无<props="intl"><ph>**实例概览**页面或</ph></props>ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-cn-0pp1n8t****`
     */
    "IotInstanceId"?: string;
    /**
     * 要发送消息的产品**ProductKey**。
     * @example `a1BwAGV****`
     */
    "ProductKey": string;
    /**
     * 指定消息的发送方式。取值：
     * - **0**：最多发送一次。
     * - **1**：最少发送一次。
     * 如果不传入此参数，则使用默认值**0**。
     * > QoS=1的消息在物联网平台中最多可以保存7天。物联网平台不保存QoS=0的消息。
     * @example `0`
     */
    "Qos"?: number;
    /**
     * 自定义Topic的后缀。
     * 自定义Topic的格式为`/${productKey}/${deviceName}/user/${TopicShortName}`，传入后缀${TopicShortName}。
     * > 指定Topic的操作权限须为订阅，或发布和订阅，且所有设备已订阅该Topic。
     * 您可通过以下途径查看自定义Topic：
     * - 在产品详情页的**Topic类列表**页签下，查看产品下的自定义Topic。
     * - 在设备详情页的**Topic列表**页签下，查看设备已订阅的自定义Topic。
     * - 调用[QueryProductTopic](~~69647~~)接口查询产品下的自定义Topic。
     * @example `get`
     */
    "TopicShortName"?: string;
    /**
     * 要发送的消息主体。最大报文256 KB。
     * 您需要将消息原文转换成二进制数据，并进行Base64编码，从而生成消息主体。
     * @example `eyJ0ZXN0IjoidGFzayBiYXRjaHB1YiBicm9hZGNhc3QifQ==`
     */
    "MessageContent": string;
    "TopicTemplateName"?: string;
    "ResponseTopicTemplateName"?: string;
    "CorrelationData"?: string;
    "PayloadFormatIndicator"?: number;
    "ContentType"?: string;
    "MessageExpiryInterval"?: number;
    "Retained"?: boolean;
    /**
     * 要接收消息的设备名称。
     * > - 与**ProductKey**结合使用，传入设备必须属于同一产品。
     * - 单次调用，最多传入100个设备名称，且设备名称不可重复。
     * @example `newdevice1`
     */
    "DeviceName": string[];
    "UserProp"?: {
        Key: string;
        Value: string;
    }[];
}
