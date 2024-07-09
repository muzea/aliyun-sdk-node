export interface QueryVoiceIntercomRequest {
    /**
     * 语音对讲的连接协议类型。可取值：
     * - **ws**：表示WebSocket连接协议。Web端实现语音对讲能力时，调用本接口获取的Web语音通话地址。<props="china"><ph>Web端与设备端实现语音对讲能力的详细说明，请参见[Web语音对讲集成说明](~~2545966~~)。</ph></props>
     * - **rtmp**（默认）：Android和iOS应用端播放器实现语音对讲时，调用本接口获取的对应语音通话地址。Android和iOS应用端与设备端实现语音对讲能力的详细说明，请参见[Android语音对讲](~~260925~~)和[iOS语音对讲](~~253953~~)。
     * @example `rtmp`
     */
    "Scheme"?: string;
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无**实例概览**页面或**ID**值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-cn-n6w1y*****`
     */
    "IotInstanceId"?: string;
    /**
     * IPC设备所属产品的**ProductKey**。
     * 您可以在物联网平台控制台**产品**页面或调用接口[QueryProductList](~~69271~~)查看当前账号下所有产品的信息。
     * ><notice> 如果传入该参数，需同时传入**DeviceName**。
     * ></notice>
     * @example `a1BwAGV****`
     */
    "ProductKey"?: string;
    /**
     * IPC设备的设备名称。
     * 您可以在物联网平台控制台的**设备**页面查看**DeviceName**。
     * ><notice> 如果传入该参数，需同时传入**ProductKey**。
     * ></notice>
     * @example `camera1`
     */
    "DeviceName"?: string;
    /**
     * IPC设备的设备ID。物联网平台为该设备颁发的ID，设备的唯一标识符。可调用接口[QueryDeviceDetail](~~69594~~)查询。
     * ><notice> **IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**的组合是一一对应的关系。如果传入该参数，则无需传入**ProductKey**和**DeviceName**。如果您同时传入**IotId**和**ProductKey**与**DeviceName**的组合，则以**IotId**为准。
     * ></notice>
     * @example `C47T6xwp6ms4bNlkHRWCg4****`
     */
    "IotId"?: string;
}
