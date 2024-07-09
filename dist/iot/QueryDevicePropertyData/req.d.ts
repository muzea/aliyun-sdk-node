export interface QueryDevicePropertyDataRequest {
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
     * 返回结果中每页显示的记录数。数量限制：每页最多可显示50条。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 要查询设备所属的产品ProductKey。
     * ><notice>
     * 如果传入该参数，需同时传入**DeviceName**。
     * ></notice>
     * @example `a1BwAGV****`
     */
    "ProductKey"?: string;
    /**
     * 要查询设备的名称。
     * ><notice>
     *  如果传入该参数，需同时传入**ProductKey**。
     * ></notice>
     * @example `airconditioning`
     */
    "DeviceName"?: string;
    /**
     * 要查询的属性记录的开始时间，必须小于结束时间**EndTime**。取值为毫秒值时间戳，例如：1579249499000。
     * @example `1579249499000`
     */
    "StartTime": number;
    /**
     * 要查询的属性标识符。
     * <props="china">
     * - 设备的属性**Identifier**，可在物联网平台控制台中设备所属的产品的功能定义中查看，或调用[QueryThingModel](~~150321~~)，从返回的物模型数据中查看。
     * - 数字孪生节点的属性**Identifier**，可在物联网平台控制台中数字孪生工作台下的孪生节点的功能属性中查看。具体操作，请参见[孪生节点的功能属性](~~278729~~)。
     * </props>
     * <props="intl">设备的属性**Identifier**，可在物联网平台控制台中设备所属的产品的功能定义中查看，或调用[QueryThingModel](~~150321~~)，从返回的物模型数据中查看。</props>
     * > 如果设备的属性是自定义（非默认）模块**testFb**下属性**temperature**，则参数值为**testFb:temperature**。
     * @example `temperature`
     */
    "Identifier": string;
    /**
     * 返回结果中属性记录的排序方式，取值：
     * - **0**：倒序。
     * - **1**：正序。
     * @example `0`
     */
    "Asc": number;
    /**
     * 要查询属性所属的设备ID<props="china"><ph>或数字孪生节点ID</ph></props>：
     * <props="china">
     * - 调用[QueryDeviceInfo](~~257184~~)接口，可查询指定设备的**IotId**。
     * - 在物联网平台控制台的**数字孪生体详情**页面，单击孪生节点，可查看**节点ID**。
     * </props>
     * <props="intl">调用[QueryDeviceInfo](~~257184~~)接口，可查询指定设备的**IotId**。</props>
     * ><notice>**IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**组合是一一对应的关系。如果传入该参数，则无需传入**ProductKey**和**DeviceName**。如果您同时传入**IotId**和**ProductKey**与**DeviceName**组合，则以**IotId**为准。
     * ></notice>
     * @example `Q7uOhVRdZRRlDnTLv****00100`
     */
    "IotId"?: string;
    /**
     * 要查询的属性记录的结束时间，必须大于起始时间**StartTime**。取值为毫秒值时间戳，例如：1579249499000。
     * @example `1579249499000`
     */
    "EndTime": number;
}
