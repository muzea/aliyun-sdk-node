export interface QueryDeviceOriginalPropertyStatusRequest {
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
     * 指定返回结果中每页显示的记录数。数量限制：每页最多可显示50条。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 要查询设备所属的产品**ProductKey**。
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
     * 下一页标识。如果存在下一页，服务会返回此token，下次请求带上即可。
     * @example `Bo***x44Qx`
     */
    "NextPageToken"?: string;
    /**
     * 指定查询属性数据的时间排序方式。取值：
     * - 0：倒序。
     * - 1：正序。
     * @example `0`
     */
    "Asc": number;
    /**
     * 要查询的设备ID。物联网平台为该设备颁发的ID，设备的唯一标识符。
     * > 如果传入该参数，则无需传入**ProductKey**和**DeviceName**。**IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**组合是一一对应的关系。如果您同时传入**IotId**和**ProductKey**与**DeviceName**组合，则以**IotId**为准。
     * @example `Q7uOhVRdZRRlDnTLv****00100`
     */
    "IotId"?: string;
}
