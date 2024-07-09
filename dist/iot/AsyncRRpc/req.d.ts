export interface AsyncRRpcRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无**实例概览**页面或**ID**值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 要接收消息的设备所属产品的**ProductKey**。
     * @example `aldfeSe****`
     */
    "ProductKey": string;
    /**
     * 要接收消息的设备名称。
     * @example `device1`
     */
    "DeviceName": string;
    /**
     * 发送消息给云网关GB/T 32960协议的设备时，需要传入此参数，标识消息的命令类型，可取值：
     * - **128**：查询命令（0x80）。
     * - **129**：设置命令（0x81）。
     * - **130**：车载终端控制命令（0x82）。
     * 云网关GB/T 32960协议的设备接入详情，请参见[云网关GB/T 32960协议概述](~~2248990~~)。
     * @example `{"commandType": 128}`
     */
    "ExtInfo"?: string;
    /**
     * 要发送的消息主体。
     * 您需要将消息原文转换成二进制数据，并进行Base64编码，从而生成消息主体。
     * @example `eyJ0ZXN0IjoidGFzayBwdWIgYnJvYWRjYXN0In0=`
     */
    "MessageContent": string;
    /**
     * 发送消息给MQTT协议设备时，需要传入对应设备的自定义Topic。Topic的操作权限必须为**订阅**或**发布和订阅**。
     * 发送消息给云网关GB/T 32960协议的设备时，无需传入此参数。
     * @example `/a1uZfYb****​/A_Vol****​/user/update`
     */
    "TopicFullName"?: string;
}
