export interface QueryDeviceDesiredPropertyRequest {
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
     * 要查询的设备所隶属的产品ProductKey。
     * > 如果传入该参数，需同时传入**DeviceName**。
     * @example `a1BwAGV****`
     */
    "ProductKey"?: string;
    /**
     * 要查询的设备名称。
     * > 如果传入该参数，需同时传入**ProductKey**。
     * @example `light`
     */
    "DeviceName"?: string;
    /**
     * 设备ID。物联网平台为该设备颁发的ID，设备的唯一标识符。
     * > 如果传入该参数，则无需传入**ProductKey**和**DeviceName**。**IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**组合是一一对应的关系。如果您同时传入**IotId**和**ProductKey**与**DeviceName**组合，则以**IotId**为准。
     * @example `Q7uOhVRdZRRlDnTLv****00100`
     */
    "IotId"?: string;
    /**
     * 物模型自定义模块标识符，在产品中具有唯一性。
     * 不传入此参数时，查询默认模块的数据。
     * @example `BatteryModule`
     */
    "FunctionBlockId"?: string;
    /**
     * 要查询期望值的属性的标识符（identifier）列表。
     * 设备的属性identifier，可在控制台中，设备所属产品的功能定义中查看。
     * - 单次调用，最多能传入10个标识符。
     * - 不可输入重复的属性标识符。
     * - 若不传入此参数，将返回该设备所有属性的期望值。
     * @example `Temperature`
     */
    "Identifier"?: string[];
}
