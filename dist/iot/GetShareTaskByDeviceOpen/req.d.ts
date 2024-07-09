export interface GetShareTaskByDeviceOpenRequest {
    /**
     * 设备ID。
     * ><notice> **IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**组合是一一对应的关系。如果传入该参数，则无需传入**ProductKey**和**DeviceName**。如果您同时传入**IotId**和**ProductKey**与**DeviceName**组合，则以**IotId**为准。
     * ></notice>
     * @example `y4u2weAIrpp****WHMle1234`
     */
    "IotId"?: string;
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无**实例概览**页面或**ID**值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 设备所属的产品**ProductKey**。
     * ><notice> 如果传入该参数，需同时传入**DeviceName**。
     * ></notice>
     * @example `a2Yw*****`
     */
    "ProductKey"?: string;
    /**
     * 设备的名称。
     * ><notice> 如果传入该参数，需同时传入**ProductKey**。
     * ></notice>
     * @example `device1`
     */
    "DeviceName"?: string;
}
