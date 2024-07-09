export interface QueryDeviceOriginalPropertyDataRequest {
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
     * 单个属性可返回的数据记录数量。最大值为100。
     * 任意一个属性返回的数据记录数量不超过该值。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 要查询设备所属的产品**ProductKey**。
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
     * 下一页标识。如果存在下一页，服务会返回此token，下次请求带上即可。
     * @example `Bo***x44Qx`
     */
    "NextPageToken"?: string;
    /**
     * 要查询的属性记录的开始时间。取值为毫秒值时间戳。
     * @example `1569249488000`
     */
    "StartTime": number;
    /**
     * 属性的标识符。
     * - 对于弱校验，设备的属性**Identifier**，可在控制台中设备所属的产品的功能定义中查看；也可以调用[QueryThingModel](~~150321~~)，从返回的物模型信息中查看。
     * - 对于免校验，必须与设备属性上报时自定义的**identifier**一致。
     * @example `temperature`
     */
    "Identifier": string;
    /**
     * 返回结果中，属性记录按时间排序的方式。取值：
     * - 0：倒序。
     * - 1：正序。
     * > **StartTime**必须小于**EndTime**，系统会根据排序方式自动转换。
     * @example `0`
     */
    "Asc": number;
    /**
     * 要查询的设备ID。物联网平台为该设备颁发的ID，设备的唯一标识符。
     * ><notice> **IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**组合是一一对应的关系。如果传入该参数，则无需传入**ProductKey**和**DeviceName**。如果您同时传入**IotId**和**ProductKey**与**DeviceName**组合，则以**IotId**为准。
     * ></notice>
     * @example `Q7uOhVRdZRRlDnTLv****00100`
     */
    "IotId"?: string;
    /**
     * 属性记录的结束时间。取值为13位毫秒值时间戳。
     * @example `1579249499000`
     */
    "EndTime": number;
}
