export interface QueryDevicePropertyStatusRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无**实例概览**页面或**ID**值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 要查询的设备所属的产品ProductKey。
     * ><notice>
     * 如果传入该参数，需同时传入**DeviceName**。
     * ></notice>
     * @example `a1BwAGV****`
     */
    "ProductKey"?: string;
    /**
     * 要查询的设备名称。
     * ><notice>
     * 如果传入该参数，需同时传入**ProductKey**。
     * ></notice>
     * @example `light`
     */
    "DeviceName"?: string;
    /**
     * 要查询属性所属的设备ID或IoT孪生节点ID：
     * - 调用[QueryDeviceInfo](~~257184~~)接口，可查询指定设备的**IotId**。
     * - 在物联网平台控制台的**孪生实体图**页面，单击孪生节点，可查看**节点ID**。
     * ><notice>
     * **IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**组合是一一对应的关系。如果传入该参数，则无需传入**ProductKey**和**DeviceName**。如果您同时传入**IotId**和**ProductKey**与**DeviceName**组合，则以**IotId**为准。
     * ></notice>
     * @example `Q7uOhVRdZRRlDnTLv****00100`
     */
    "IotId"?: string;
    /**
     * 物模型自定义模块标识符，在产品中具有唯一性。
     * 不传入此参数时，查询默认模块的数据。
     * @example `BatteryModule`
     */
    "FunctionBlockId"?: string;
}
