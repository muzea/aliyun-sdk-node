export interface DeleteEventRecordPlanDeviceRequest {
    /**
     * 实例ID。
     * 您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。若有ID值，必须传入该ID值，否则调用会失败。
     * > 如果公共实例没有ID值，请参见[如何获取实例ID](~~267533~~)。
     * @example `iot-cn-n6w1y59****`
     */
    "IotInstanceId"?: string;
    /**
     * IPC设备所属产品的ProductKey。
     * 您可以在物联网平台控制台**产品**页查看或调用[QueryProductList](~~69271~~)查看当前账号下所有产品的信息。
     * ><notice> 如果传入该参数，需同时传入**DeviceName**。
     * ></notice>
     * @example `a1BwAGV****`
     */
    "ProductKey"?: string;
    /**
     * IPC设备的设备名称。
     * 您可以在物联网平台控制台的**设备**页查看**DeviceName**。
     * ><notice> 如果传入该参数，需同时传入**ProductKey**。
     * ></notice>
     * @example `camera1`
     */
    "DeviceName"?: string;
    /**
     * IPC设备的设备ID。物联网平台为该设备颁发的ID，设备的唯一标识符。
     * 可调用物联网平台[QueryDeviceDetail](~~69594~~)查询。
     * @example `zLZyi6aOLyOSHa9hsPyD00****`
     */
    "IotId"?: string;
    /**
     * 码流类型：
     * - **0**（默认）：主码流。
     * - **1**：辅码流。
     * @example `0`
     */
    "StreamType"?: number;
}
