export interface QueryDeviceServiceDataRequest {
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
     * 返回结果中每页显示的记录数。数量限制：每页最多可显示50条。
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
     * 要查询的服务调用记录的开始时间。取值为毫秒值时间戳，例如：1579249499000。
     * @example `1579249499000`
     */
    "StartTime": number;
    /**
     * 要查询的服务标识符。设备的服务**Identifier**。可在控制台中，设备所属的产品的功能定义中查看；或调用[QueryThingModel](~~150321~~)。
     * > 如果是自定义（非默认）模块**testFb**下服务**testService**，则参数值为**testFb:testService**。
     * 不传入此参数时，查询默认模块和自定义模块下的所有服务数据。
     * @example `Set`
     */
    "Identifier"?: string;
    /**
     * 返回结果中，服务调用记录按时间排序的方式。取值：
     * - **0**：倒序。
     * - **1**：正序。
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
     * 要查询的服务调用记录的结束时间。取值为毫秒值时间戳，例如：1579249499000。
     * @example `1579249499000`
     */
    "EndTime": number;
}
