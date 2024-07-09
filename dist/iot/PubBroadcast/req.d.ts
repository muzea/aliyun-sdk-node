export interface PubBroadcastRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无<props="intl"><ph>**实例概览**页面或</ph></props>ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 要发送广播消息的产品的**ProductKey**。
     * **ProductKey**是物联网平台为产品颁发的全局唯一标识符。您可以在物联网平台控制台或调用[QueryProductList](~~69271~~)，查看当前账号下所有产品的信息。
     * @example `aldeji3*****`
     */
    "ProductKey": string;
    /**
     * 可选参数：
     * - 不赋值，表示全量在线设备广播，推送消息到指定**ProductKey**的全量在线设备。设备端收到的广播Topic格式为`/sys/${productKey}/${deviceName}/broadcast/request/${MessageId}`，其中**MessageId**由物联网平台生成。
     * - 赋值，表示指定Topic订阅广播，推送消息到指定**ProductKey**的已订阅广播Topic的在线设备。传入要接收广播消息的Topic全称，格式为：`/broadcast/${productKey}/自定义字段`。其中，**${productKey}**是要接收广播消息的具体产品**ProductKey**；自定义字段中您可以指定任意字段。
     * > - 广播Topic是在设备开发时编码定义的，无需控制台创建。
     * - 一个广播Topic最多可被1,000个设备订阅。如果您的设备超过数量限制，您可以对设备进行分组。例如，如果您有5,000个设备，您可以将设备按每组1,000个，而分成5组。您需要分5次调用广播Topic，自定义字段分别设置为group1/2/3/4/5，然后让每组设备分别订阅各自分组的广播Topic。
     * @example `/broadcast/UPqSxj2vXXX/xxx`
     */
    "TopicFullName"?: string;
    /**
     * 要发送的消息主体，最大报文64 KB。
     * 您需要将消息原文转换成二进制数据，并进行Base64编码，从而生成消息主体。
     * @example `aGVsbG93b3JsZA`
     */
    "MessageContent": string;
}
