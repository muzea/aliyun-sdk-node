export interface SaveDevicePropRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无**实例概览**页面或ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 设备所属的产品ProductKey。
     * > 如果传入该参数，需同时传入**DeviceName**。
     * @example `a1BwAGV****`
     */
    "ProductKey"?: string;
    /**
     * 设备名称。
     * > 如果传入该参数，需同时传入**ProductKey**。
     * @example `light`
     */
    "DeviceName"?: string;
    /**
     * 要设置的设备标签，支持设置多个标签。
     * 设备标签是JSON格式，每个标签的具体结构为：**Key:Value**。**Key**是标签名称，**Value**是对应的标签值。
     * 多个标签使用半角逗号隔开，例如**Props={"color":"red","shape":"round"}**。
     *  ><notice>
     * - **Props**的总大小不超过5 KB。
     * - `abc`为物联网平台系统保留的标签**Key**，即标签**Key**不能设置为abc。若设置`Key=abc`，使用标签检索时会直接被过滤。
     * ></notice>
     * @example `{"color":"red"}`
     */
    "Props": string;
    /**
     * 设备ID。物联网平台为该设备颁发的ID，设备的唯一标识符。
     * > 如果传入该参数，则无需传入**ProductKey**和**DeviceName**。**IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**组合是一一对应的关系。如果您同时传入**IotId**和**ProductKey**与**DeviceName**组合，则以**IotId**为准。
     * @example `Q7uOhVRdZRRlDnTLv****00100`
     */
    "IotId"?: string;
}
