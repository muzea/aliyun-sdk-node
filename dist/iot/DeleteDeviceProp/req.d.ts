export interface DeleteDevicePropRequest {
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
     * 标签所属设备隶属的产品ProductKey。
     * > 如果传入该参数，需同时传入**DeviceName**。
     * @example `a1BwAGV****`
     */
    "ProductKey"?: string;
    /**
     * 标签所属设备的名称。
     * > 如果传入该参数，需同时传入**ProductKey**。
     * @example `light`
     */
    "DeviceName"?: string;
    /**
     * 要删除的设备标签键值（Key）。
     * > 物联网平台在目标设备的标签中检索您提供的Key值，并删除与之对应的标签。如果目标设备的标签中没有与您提供的Key值对应的记录，则不执行任何操作。
     * @example `room`
     */
    "PropKey": string;
    /**
     * 标签所属设备的ID
     * > 如果传入该参数，则无需传入**ProductKey**和**DeviceName**。**IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**组合是一一对应的关系。如果您同时传入**IotId**和**ProductKey**与**DeviceName**组合，则以**IotId**为准。
     * @example `Q7uOhVRdZRRlDnTLv****00100`
     */
    "IotId"?: string;
}
