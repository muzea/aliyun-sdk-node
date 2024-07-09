export interface RRpcRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无**实例概览**页面或**ID**值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 要发送消息产品的**ProductKey**。
     * @example `aldfeSe****`
     */
    "ProductKey": string;
    /**
     * 要接收消息的设备名称。
     * @example `device1`
     */
    "DeviceName": string;
    /**
     * 等待设备回复消息的时间，单位是毫秒，取值范围是1,000 ~8,000。
     * @example `1000`
     */
    "Timeout": number;
    /**
     * 使用JT/T 808协议通信时，服务端向指定设备发送消息的类型。可取值：
     * - **0**：GNSS模块详细定位数据。
     * - **11**：道路运输证IC卡信息。
     * - **65**：串口1透传。
     * - **66**：串口2透传。
     * - **240**~**255**：用户自定义透传。
     * 物联网平台支持的JT/T 808协议详细使用说明，请参见[JT/T 808协议云网关概述](~~474256~~)。
     * @example `240`
     */
    "ContentType"?: string;
    /**
     * 要发送的消息内容经过Base64编码得到的字符串格式数据，例如`dGhpcyBpcyBhbiBleGFtcGxl`。
     * @example `dGhpcyBpcyBhbiBleGFtcGxl`
     */
    "RequestBase64Byte": string;
    /**
     * 使用自定义的RRPC相关Topic。需要设备端配合使用，请参见设备端开发[自定义Topic](~~90570~~)。
     * 不传入此参数，则使用系统默认的RRPC Topic。
     * @example `/a1uZfYb****​/A_Vol****​/user/update`
     */
    "Topic"?: string;
}
