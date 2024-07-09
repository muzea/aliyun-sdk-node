export interface CreateDeviceTunnelRequest {
    /**
     * 指定设备的设备ID。
     * ><notice>如果传入该参数，则无需传入**ProductKey**和**DeviceName**。**IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**的组合是一一对应的关系。如果您同时传入**IotId**和**ProductKey**与**DeviceName**的组合，则以**IotId**为准。
     * ></notice>
     * @example `Q7uOhVRdZRRlDnTLv***00100`
     */
    "IotId"?: string;
    /**
     * 安全隧道的描述信息。内容长度不超过1024个字符。
     * @example `用于远程登录到摄像头。`
     */
    "Description"?: string;
    /**
     * 推送给设备的自定义信息，数据格式自定义，长度不超过4096个字符。
     * 会在通知设备创建安全隧道时发送给设备。
     * @example `reboot`
     */
    "Udi"?: string;
    /**
     * 指定设备所属产品的**ProductKey**。
     * ><notice>如果传入该参数，需同时传入**DeviceName**。
     * ></notice>
     * @example `a1BwAGV***`
     */
    "ProductKey"?: string;
    /**
     * 指定设备的设备名称。
     * ><notice>如果传入该参数，需同时传入**ProductKey**。
     * ></notice>
     * @example `light`
     */
    "DeviceName"?: string;
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无<props="intl"><ph>**实例概览**页面或</ph></props>ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-***-v64***`
     */
    "IotInstanceId"?: string;
}
