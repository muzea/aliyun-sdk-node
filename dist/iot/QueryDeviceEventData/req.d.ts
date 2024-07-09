export interface QueryDeviceEventDataRequest {
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
     * 返回结果中每页显示的记录数。数量限制：每页最多可显示50条。默认值是10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 要查询的设备所属的产品**ProductKey**。
     * ><notice> 如果传入该参数，需同时传入**DeviceName**。
     * ></notice>
     * @example `a1BwAGV****`
     */
    "ProductKey"?: string;
    /**
     * 要查询的设备名称。
     * ><notice> 如果传入该参数，需同时传入**ProductKey**。
     * ></notice>
     * @example `light`
     */
    "DeviceName"?: string;
    /**
     * 要查询的事件记录的开始时间。格式为毫秒级的13位时间戳，例如：1516538300303。
     * @example `1516541900303`
     */
    "StartTime": number;
    /**
     * 要查询的事件标识符。设备的事件**Identifier**，可在控制台中设备所属的产品的功能定义中查看；也可以调用[QueryThingModel](~~150321~~)，从返回的物模型信息中查看。
     * > 如果是自定义（非默认）模块**testFb**下事件**PowerOff**，则参数值为**testFb:PowerOff**。
     * 不传入此参数时，查询默认模块和自定义模块下的所有事件数据。
     * @example `PowerOff`
     */
    "Identifier"?: string;
    /**
     * 要查询的事件类型。取值：
     * - **info**：信息。
     * - **alert**：告警。
     * - **error**：故障。
     * @example `info`
     */
    "EventType"?: string;
    /**
     * 返回结果中事件记录的排序方式，取值：
     * - **0**（默认）：倒序。
     * - **1**：正序。
     * > 不传入此参数时，使用默认值**0**，按照倒序进行排序。
     * @example `0`
     */
    "Asc"?: number;
    /**
     * 要查询的设备ID。物联网平台为该设备颁发的ID，设备的唯一标识符。
     * ><notice> **IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**组合是一一对应的关系。如果传入该参数，则无需传入**ProductKey**和**DeviceName**。如果您同时传入**IotId**和**ProductKey**与**DeviceName**组合，则以**IotId**为准。
     * ></notice>
     * @example `Q7uOhVRdZRRlDnTLv****00100`
     */
    "IotId"?: string;
    /**
     * 要查询的事件记录的结束时间。格式为毫秒级的13位时间戳，例如：1516541900303。
     * @example `1516541900303`
     */
    "EndTime": number;
}
