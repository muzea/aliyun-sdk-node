export interface ResetThingRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无<props="intl"><ph>**实例概览**页面或</ph></props>ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-cn-0pp1n8t****`
     */
    "IotInstanceId"?: string;
    /**
     * 要重置的设备所属的产品ProductKey。
     * > 如果传入该参数，需同时传入**DeviceName**。
     * @example `a1KiV******`
     */
    "ProductKey"?: string;
    /**
     * 指定重置的设备的名称。
     * > 如果传入该参数，需同时传入**ProductKey**。
     * @example `device1`
     */
    "DeviceName"?: string;
    /**
     * 要重置的设备ID。
     * > 如果传入该参数，则无需传入**ProductKey**和**DeviceName**。**IotId**作为设备唯一标识符，与**ProductKey**和**DeviceName**组合是一一对应的关系。如果您同时传入**IotId**和**ProductKey**与**DeviceName**组合，则以**IotId**为准。
     * @example `SR8FiTu1R9tlUR2V1bmi0010a5****`
     */
    "IotId"?: string;
}
