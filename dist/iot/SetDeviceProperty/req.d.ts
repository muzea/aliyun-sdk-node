export interface SetDevicePropertyRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无**实例概览**页面或**ID**值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-v64*****`
     */
    "IotInstanceId"?: string;
    /**
     * 设备所属的产品**ProductKey**。
     * ><notice> 如果传入该参数，需同时传入**DeviceName**。
     * ></notice>
     * @example `a1BwAGV****`
     */
    "ProductKey"?: string;
    /**
     * 设备名称。
     * ><notice> 如果传入该参数，需同时传入**ProductKey**。
     * ></notice>
     * @example `light`
     */
    "DeviceName"?: string;
    /**
     * 设备ID。物联网平台为该设备颁发的ID，设备的唯一标识符。
     * ><notice> **IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**组合是一一对应的关系。如果传入该参数，则无需传入**ProductKey**和**DeviceName**。如果您同时传入**IotId**和**ProductKey**与**DeviceName**组合，则以**IotId**为准。
     * ></notice>
     * @example `Q7uOhVRdZRRlDnTLv****00100`
     */
    "IotId"?: string;
    /**
     * 要设置的属性信息，数据格式为JSON。
     * 每个属性信息由标识符与属性值 (key:value) 构成，多个属性用英文逗号隔开。
     * 例如，设置智能灯的如下两个属性：
     * - 标识符为**Switch**的开关属性，数据类型为**Bool**，设置值为**1**（开）。
     * - 标识符为**Color**的灯颜色属性，数据类型为**String**，设置值为**blue**。
     * 那么要设置的属性信息，JSON格式如下：
     * `Items={"Switch":1,"Color":"blue"}`
     * > 如果设置自定义模块testFb（非默认模块）的属性，则格式为：`Items={"testFb:Switch":1,"testFb:Color":"blue"}`
     * @example `{"Switch":1,"Color":"blue"}`
     */
    "Items": string;
    /**
     * 指定调用本接口时，消息的发送方式。取值：
     * - **0**（默认）：最多发送一次。
     * - **1**：最少发送一次。如果QoS=1消息未接收到PUBACK消息，会在设备重连时，重新推送给设备。
     * @example `1`
     */
    "Qos"?: number;
}
