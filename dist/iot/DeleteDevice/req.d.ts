export interface DeleteDeviceRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无**实例概览**页面或**ID**值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-cn-0pp1n8t****`
     */
    "IotInstanceId"?: string;
    /**
     * 要删除的设备所属的产品**ProductKey**。
     * ><notice> 如果传入该参数，需同时传入**DeviceName**。
     * ></notice>
     * @example `a1FlqIQ****`
     */
    "ProductKey"?: string;
    /**
     * 指定要删除的设备的名称。
     * ><notice> 如果传入该参数，需同时传入**ProductKey**。
     * ></notice>
     * @example `light`
     */
    "DeviceName"?: string;
    /**
     * 要删除的设备ID。
     * ><notice> **IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**组合是一一对应的关系。如果传入该参数，则无需传入**ProductKey**和**DeviceName**。如果您同时传入**IotId**和**ProductKey**与**DeviceName**组合，则以**IotId**为准。
     * ></notice>
     * @example `MpEKNuEUJzIORNANAWJX0010929900*****`
     */
    "IotId"?: string;
}
