export interface NotifyAddThingTopoRequest {
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
     * 要挂载在目标网关设备上的子设备数组，为JSON字符串形式的子设备标识信息，可使用**ProductKey**和**DeviceName**或**IotId**指代设备，例如**[{"productKey":"a1BwAGxxx","deviceName":"device1"},{"IotId":"Q7uOhxxx"}]**。
     * @example `[{"productKey":"a1BwAGV****","deviceName":"device1"},{"IotId":"Q7uOhVRdZRRlDnTLv****00100"}]`
     */
    "DeviceListStr"?: string;
    /**
     * 网关设备ID。物联网平台为该设备颁发的ID，设备的唯一标识符。
     * > 如果传入该参数，则无需传入**ProductKey**和**DeviceName**。**IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**组合是一一对应的关系。如果您同时传入**IotId**和**ProductKey**与**DeviceName**组合，则以**IotId**为准。
     * @example `vWxNur6BUApsqjv****4000100`
     */
    "GwIotId"?: string;
    /**
     * 网关设备所隶属的产品ProductKey。
     * > 如果传入该参数，需同时传入**DeviceName**。
     * @example `a1T27vz****`
     */
    "GwProductKey"?: string;
    /**
     * 网关设备名称。
     * > 如果传入该参数，需同时传入**ProductKey**。
     * @example `gateway`
     */
    "GwDeviceName"?: string;
}
