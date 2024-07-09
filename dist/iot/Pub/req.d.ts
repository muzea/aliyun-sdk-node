export interface PubRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无**实例概览**页面或**ID**值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-cn-0pp1n8t****`
     */
    "IotInstanceId"?: string;
    /**
     * 使用MQTT 5.0版本通信协议时，请求和响应模式中的相关数据，用户可自定义。
     * 消息接收方可根据相关数据处理请求。
     * > 您需要将相关数据转换为二进制数据，并进行Base64编码，从而生成String类型数据。
     * @example `aGVsbG8****`
     */
    "CorrelationData"?: string;
    /**
     * 要接收消息的设备所属产品的**ProductKey**。
     * @example `a1Q5XoY****`
     */
    "ProductKey": string;
    /**
     * MQTT云网关设备的名称。
     * ><notice>
     * 仅当需要向指定MQTT云网关设备发布消息时，需要传入该参数。
     * ></notice>
     * @example `device1`
     */
    "DeviceName"?: string;
    /**
     * 指定消息的发送方式。取值：
     * - **0**：最多发送一次。
     * - **1**：最少发送一次。如果QoS=1消息未接收到PUBACK消息，会在设备重连时，重新推送给设备。
     * 如果不传入此参数，则使用默认值**0**。
     * 通信消息的更多使用说明，请参见[使用限制的连接通信](~~30527~~)。
     * @example `0`
     */
    "Qos"?: number;
    /**
     * 使用MQTT 5.0版本通信协议时，发布消息的内容类型。
     * 典型应用于存放MIME类型文件，例如，文本文件类型：**text**、**plain**。
     * @example `text`
     */
    "ContentType"?: string;
    /**
     * 使用MQTT 5.0版本通信协议时，发布消息的有效载荷标识，可取值：
     * - **0**：消息是未确定的字节数据。
     * - **1**：消息的有效载荷是UTF-8编码的字符数据。
     * @example `1`
     */
    "PayloadFormatIndicator"?: number;
    "Retained"?: boolean;
    "MessageExpiryInterval"?: number;
    /**
     * 使用MQTT 5.0版本通信协议时，请求和响应模式中的响应主题，即通信的Topic。更多消息，请参见[MQTT 5.0协议说明](~~30540~~)。
     * @example `/a1Q5XoY****​/device1/user/update`
     */
    "ResponseTopic"?: string;
    /**
     * 要接收消息的设备的自定义Topic。
     * - 对于<props="china"><ph>开源MQTT托管形态设备和</ph></props>MQTT云网关设备，自定义Topic为设备的原始自定义Topic。详细内容，请参见[Topic说明](~~433806~~)。
     * - 对于<props="china"><ph>非开源MQTT托管形态设备和</ph></props>非MQTT云网关设备，自定义Topic的格式支持为：
     *     - `/${productKey}/${deviceName}/user/${TopicShortName}`：发送消息到指定**ProductKey**的指定设备。
     *     - `/broadcast/${productKey}/${自定义字段}`：发送消息到指定**ProductKey**下已订阅该Topic的在线设备。`${productKey}`是要接收广播消息的具体产品的**ProductKey**；`${自定义字段}`为您自定义的任意字段。
     * ><notice>
     * - Topic的操作权限必须为**订阅**或**发布和订阅**。
     * - 调用该接口前，设备必须已订阅该Topic且未取消，否则无法接收本次发布的消息。
     * ></notice>
     * 查询自定义Topic方法：
     * - 调用[QueryProductTopic](~~69647~~)接口，查询产品下的自定义Topic。
     * - 在物联网平台控制台**产品详情**页面的**Topic类列表**页签下，查询产品下的自定义Topic。
     * - 在物联网平台控制台**设备详情**页面的**Topic列表**页签下，查看设备已订阅的自定义Topic。
     * @example `/a1Q5XoY****​/device1/user/get`
     */
    "TopicFullName": string;
    /**
     * 要发送的消息主体。您需要将消息原文转换成二进制数据，并进行Base64编码，从而生成消息主体。
     * @example `eyJ0ZXN0IjoidGFzayBwdWIgYnJvYWRjYXN0In0=`
     */
    "MessageContent": string;
    "TopicAlias"?: number;
    /**
     * 使用MQTT 5.0版本通信协议时，用户自定义属性列表。
     */
    "UserProp"?: {
        /**
         * 使用MQTT 5.0版本通信协议时，用户自定义属性的Key。
         * 需要与**UserProp.N.Value**成对使用。
         * @example `key1`
         */
        Key: string;
        /**
         * 使用MQTT 5.0版本通信协议时，用户自定义属性的Value。
         * 需要与**UserProp.N.Key**成对使用。
         * @example `value1`
         */
        Value: string;
    }[];
}
